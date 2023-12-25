package domain.usecase

import domain.models.NGemini
import domain.repository.NGeminiRepository


interface IGetContentUseCase {
    suspend fun getContentWithText(content: String): NGemini
    suspend fun getContentWithImage(content: String, image: String): NGemini
}

class GetContentUseCase(private val nGeminiRepository: NGeminiRepository) : IGetContentUseCase {
    override suspend fun getContentWithText(content: String): NGemini =
        nGeminiRepository.generateContent(content)

    override suspend fun getContentWithImage(content: String, image: String): NGemini =
        nGeminiRepository.generateContentWithImage(content, image)

}