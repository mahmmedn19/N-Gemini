package ui.screens


import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import org.koin.mp.KoinPlatform
import ui.compsoable.BottomFields
import ui.compsoable.ChatMessageItem
import ui.compsoable.ImageList
import ui.compsoable.NGeminiTopAppBar
import ui.util.ImagePicker
import ui.util.ImagePickerFactory
import ui.util.getPlatformContext

@Composable
fun ChatScreen() {
    val contentViewModel: ChatViewModel = KoinPlatform.getKoin().get()
    val state by contentViewModel.chatUiState.collectAsState()
    ChatContent(
        chatUiState = state, viewModel = contentViewModel
    )
}

@Composable
fun ChatContent(
    chatUiState: ChatUiState,
    viewModel: ChatViewModel,
) {
    Scaffold(
        contentColor = MaterialTheme.colorScheme.primary,
        topBar = { NGeminiTopAppBar() },
        bottomBar = {
            BottomFields(
                chatUiState = chatUiState,
                onSendClick = { message, images ->
                    viewModel.generateContentWithText(message, images)
                },
                imagePicker = ImagePickerFactory(getPlatformContext()).createPicker()
            )
        },
        content = { paddingValues ->
            ChatMessageItem(
                modifier = Modifier.padding(paddingValues),
                chatUiState = chatUiState
            )
        },
    )
}