package ui.screens

import dev.icerock.moko.mvvm.viewmodel.ViewModel
import domain.models.NGemini
import domain.usecase.IGetContentUseCase
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch


class ChatViewModel(
    private val getContentUseCase: IGetContentUseCase
) : ViewModel() {

    private val _contentState = MutableStateFlow<NGemini?>(null)
    val contentState: StateFlow<NGemini?> get() = _contentState

    private val _errorState = MutableStateFlow<String?>(null)
    val errorState: StateFlow<String?> get() = _errorState

    fun generateContent(content: String) {
        viewModelScope.launch {
            try {
                val result = getContentUseCase.getContentWithText(content)
                _contentState.value = result
            } catch (e: Exception) {
                _errorState.value = "Error generating content: ${e.message}"
            }
        }
    }
}