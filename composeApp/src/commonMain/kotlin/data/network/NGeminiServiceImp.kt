package data.network

import data.models.NGeminiResponseDto
import data.network.utils.Constant.GEMINI_PRO
import data.network.utils.Constant.GEMINI_PRO_VISION
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
    override suspend fun generateContentWithImage(
        content: String,
        image: List<ByteArray>?
    ): NGeminiResponseDto {
        val url = GEMINI_PRO_VISION
        val requestBody = mapOf(
            "contents" to listOf(
                mapOf("parts" to listOf(mapOf("text" to content))),
                mapOf("inline_data" to mapOf("mime_type" to "image/jpeg", "data" to image))
            )
        )
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