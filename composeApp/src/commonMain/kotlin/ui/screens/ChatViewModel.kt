package ui.screens

import data.models.ChatMessage
import data.models.Role
import dev.icerock.moko.mvvm.viewmodel.ViewModel
import domain.usecase.IGetContentUseCase
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.cancel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

class ChatViewModel(
    private val getContentUseCase: IGetContentUseCase
) : ViewModel() {

    private val _chatUiState = MutableStateFlow(ChatUiState())
    val chatUiState = _chatUiState.asStateFlow()

    fun generateContentWithText(content: String, images: List<ByteArray>?=null) {
        viewModelScope.launch(Dispatchers.Unconfined) {
            addToMessages(content, emptyList(), Role.USER)
            try {
                _chatUiState.value =
                    _chatUiState.value.copy(isLoading = true, isConnectionError = false)
                val nGemini = getContentUseCase.getContentWithImage(content, images)
                val generatedContent =
                    nGemini.candidates?.get(0)?.content?.parts?.get(0)?.text.toString()
                updateLastBotMessage(generatedContent)
                addToMessages(generatedContent, emptyList(), Role.MODEL)
                _chatUiState.value =
                    _chatUiState.value.copy(isLoading = false, isConnectionError = false)
            } catch (e: Exception) {
                handleContentGenerationError()
            }
        }
    }


    private fun handleContentGenerationError() {
        _chatUiState.value = _chatUiState.value.copy(
            isLoading = false,
            isConnectionError = true,
            errorMessage = "Failed to generate content. Please try again."
        )
    }


    private fun updateLastBotMessage(text: String) {
        val messages = _chatUiState.value.message.toMutableList()
        if (messages.isNotEmpty() && messages.last()?.role == Role.MODEL.roleName) {
            val last = messages.last()
            val updatedMessage = last?.copy(text = text)
            messages[messages.lastIndex] = updatedMessage
            _chatUiState.value = _chatUiState.value.copy(
                message = messages,
            )
        }
    }

    private fun addToMessages(
        text: String,
        images: List<ByteArray>,
        sender: Role
    ) {
        val newMessage = ChatMessage(text, images, sender.roleName)
        val currentMessages = _chatUiState.value.message.toMutableList()

        currentMessages.add(newMessage)
        _chatUiState.value = _chatUiState.value.copy(
            message = currentMessages,
            isLoading = true
        )
    }


    override fun onCleared() {
        viewModelScope.cancel()
        super.onCleared()
    }
}