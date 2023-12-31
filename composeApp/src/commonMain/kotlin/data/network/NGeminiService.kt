package data.network

import data.models.NGeminiResponseDto


interface NGeminiService {
    suspend fun generateContent(content: String): NGeminiResponseDto
    suspend fun generateContentWithImage(content: String, image: List<ByteArray>? = emptyList()): NGeminiResponseDto
}