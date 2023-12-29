package ui.screens

import data.models.ChatMessage

data class ChatUiState(
    val message: List<ChatMessage?> = emptyList(),
    val isLoading: Boolean = true,
    val isConnectionError: Boolean = false,
    val errorMessage: String? = null
)