package data.network.utils

import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json


@Serializable
data class InlineData(val mimeType: String, val data: String)

@Serializable
data class ContentItem(@Contextual val parts: List<Map<String, @Contextual Any>>)

@Serializable
data class RequestBody(val contents: List<ContentItem>)

inline fun <reified T : Any> String.fromJson(): T = Json.decodeFromString(this)

inline fun <reified T : Any> T.toJson(): String = Json.encodeToString(this)

fun createRequestBody(content: String, image: String?): RequestBody {
    val parts = mutableListOf<Map<String, Any>>(
        mapOf("parts" to listOf(mapOf("text" to content)))
    )

    image?.let {
        val inlineData = mapOf("inline_data" to InlineData(mimeType = "image/jpeg", data = image))
        parts.add(inlineData)
    }

    return RequestBody(contents = listOf(ContentItem(parts = parts)))
}