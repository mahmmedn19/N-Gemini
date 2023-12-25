package data.network

import data.models.NGeminiResponseDto
import io.ktor.client.HttpClient
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.util.InternalAPI
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.Json.Default.decodeFromString

class NGeminiServiceImp(
    private val client: HttpClient
) : NGeminiService {

    private val BASE_URL = "https://generativelanguage.googleapis.com"
/*    private val NGEMINI_API_KEY = BuildKonfig.NGEMINI_API_KEY*/
    private val GEMINI_PRO = "$BASE_URL/v1beta/models/gemini-pro:generateContent?key=${NGEMINI_API_KEY}"

    @OptIn(InternalAPI::class)
    override suspend fun generateContent(content: String): NGeminiResponseDto {
        val url = GEMINI_PRO
        val requestBody = mapOf(
            "contents" to listOf(
                mapOf("parts" to listOf(mapOf("text" to content)))
            )
        )
        return try {
            val responseText: String = client.post(url) {
                header(HttpHeaders.ContentType, ContentType.Application.Json.toString())
                body = Json.encodeToString(requestBody)
            }.bodyAsText()

            println("API Response: $responseText")

            decodeFromString(responseText)
        } catch (e: Exception) {
            println("Error during API request: ${e.message}")
            throw e
        }
    }

    @OptIn(InternalAPI::class)
    override suspend fun generateContentWithImage(content: String, image: String): NGeminiResponseDto {
        val url =
            "$BASE_URL/v1beta/models/gemini-pro:generateContent?key=${NGEMINI_API_KEY}"
        val requestBody = mapOf(
            "contents" to listOf(
                mapOf("parts" to listOf(mapOf("text" to content))),
                mapOf("inline_data" to mapOf("mime_type" to "image/jpeg", "data" to image))
            )
        )
        return try {
            val responseText: String = client.post(url) {
                header(HttpHeaders.ContentType, ContentType.Application.Json.toString())
                body = Json.encodeToString(requestBody)
            }.bodyAsText()
            println("API Response: $responseText")
            decodeFromString(responseText)
        } catch (e: Exception) {
            println("Error during API request: ${e.message}")
            throw e
        }

    }

}