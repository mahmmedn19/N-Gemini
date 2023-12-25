package data.repository


import data.mapper.toNGemini
import data.network.NGeminiService
import domain.models.NGemini
import domain.repository.NGeminiRepository


class NGeminiRepositoryImp(
    private val nGeminiService: NGeminiService
) : NGeminiRepository {

    override suspend fun generateContent(content: String): NGemini {
        return nGeminiService.generateContent(content).toNGemini()
    }

    override suspend fun generateContentWithImage(content: String, image: String): NGemini {
        return nGeminiService.generateContentWithImage(content, image).toNGemini()
    }
}