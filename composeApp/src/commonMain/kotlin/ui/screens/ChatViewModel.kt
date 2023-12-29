package ui.screens

import data.models.ChatMessage
import data.models.Role
import dev.icerock.moko.mvvm.viewmodel.ViewModel
import domain.usecase.IGetContentUseCase
import kotlinx.coroutines.cancel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import org.jetbrains.skia.Bitmap


class ChatViewModel(
    private val getContentUseCase: IGetContentUseCase
) : ViewModel() {

    private val _chatUiState = MutableStateFlow(ChatUiState())
    val chatUiState = _chatUiState.asStateFlow()
    private var currentUserRole: Role = Role.USER

    fun generateContent(content: String, image: Bitmap? = null) {
        viewModelScope.launch {
            try {
                _chatUiState.value = ChatUiState(isLoading = true)

                val nGemini = if (image != null) {
                    getContentUseCase.getContentWithImage(content, image)
                } else {
                    getContentUseCase.getContentWithText(content)
                }

                val chatMessage = nGemini.candidates?.get(0)?.content?.parts?.get(0)?.text?.let {
                    ChatMessage(
                        it,
                        image,
                        currentUserRole.roleName
                    )
                }
                _chatUiState.value = ChatUiState(message = listOf(chatMessage), isLoading = false)
            } catch (e: Exception) {
                _chatUiState.value = ChatUiState(
                    isConnectionError = true,
                    errorMessage = e.message,
                    isLoading = false
                )
            }
        }
    }
    private fun ChatMessage.toChatMessage(role: Role): ChatMessage {
        // Convert the response to a ChatMessage
        return ChatMessage(
            text = this.text,
            image = this.image,
            role = role.roleName
        )
    }
    fun setUserRole(role: Role) {
        currentUserRole = role
    }


    override fun onCleared() {
        viewModelScope.cancel()
        super.onCleared()
    }
}