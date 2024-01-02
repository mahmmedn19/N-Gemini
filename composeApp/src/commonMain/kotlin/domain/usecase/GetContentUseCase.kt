package domain.usecase

import domain.models.NGemini
import domain.repository.NGeminiRepository


interface IGetContentUseCase {
    suspend fun getContentWithText(content: String): NGemini
    suspend fun getContentWithImage(content: String, images: List<ByteArray>? = emptyList()): NGemini
}

class GetContentUseCase(private val nGeminiRepository: NGeminiRepository) : IGetContentUseCase {
    override suspend fun getContentWithText(content: String): NGemini =
        nGeminiRepository.generateContent(content)


    override suspend fun getContentWithImage(content: String, images: List<ByteArray>?): NGemini{
        return if (images == null){
            nGeminiRepository.generateContent(content)
        } else{
            nGeminiRepository.generateContentWithImage(content, images)
        }
    }

}