package data.network

import data.models.NGeminiResponseDto
import data.network.utils.createRequestBody
import data.network.utils.fromJson
import data.network.utils.toJson
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
    private val NGEMINI_API_KEY = "AIzaSyAQ3IxPChrrr4m6dtEkrV60nAJlvb_6Uz4"

    private val GEMINI_PRO =
        "$BASE_URL/v1beta/models/gemini-pro:generateContent?key=${NGEMINI_API_KEY}"

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
    override suspend fun generateContentWithImage(content: String, image: String?): NGeminiResponseDto {
        val url = GEMINI_PRO
        val requestBody = createRequestBody(content, null)

        return try {
            val responseText: String = client.post(url) {
                header(HttpHeaders.ContentType, ContentType.Application.Json.toString())
                body = requestBody.toJson()
            }.bodyAsText()
            println("API Response: $responseText")
            responseText.fromJson()
        } catch (e: Exception) {
            println("Error during API request: ${e.message}")
            throw e
        }
    }

}