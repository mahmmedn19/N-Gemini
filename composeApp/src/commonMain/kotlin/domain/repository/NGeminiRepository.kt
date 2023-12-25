package domain.repository

import domain.models.NGemini


interface NGeminiRepository {
    suspend fun generateContent(content: String): NGemini


    suspend fun generateContentWithImage(content: String, image: String): NGemini
}