package domain.usecase

import domain.models.NGemini
import domain.repository.NGeminiRepository


interface IGetContentUseCase {
    suspend fun getContentWithImage(content: String, images: List<ByteArray>? = null): NGemini
}

class GetContentUseCase(private val nGeminiRepository: NGeminiRepository) : IGetContentUseCase {
    override suspend fun getContentWithImage(content: String, images: List<ByteArray>?): NGemini{
        println("image size: $images")
        return if (images.isNullOrEmpty()){
            nGeminiRepository.generateContent(content)
        } else{
            nGeminiRepository.generateContentWithImage(content, images)
        }
    }

}