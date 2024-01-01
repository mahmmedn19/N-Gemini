package ui.screens


import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import org.koin.mp.KoinPlatform
import ui.compsoable.BottomFields
import ui.compsoable.ChatMessageItem
import ui.compsoable.CustomTopAppBar
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
    chatUiState: ChatUiState, viewModel: ChatViewModel

) {

    Scaffold(
        modifier = Modifier.fillMaxSize(),
        containerColor = MaterialTheme.colorScheme.primary,
        topBar = {
            CustomTopAppBar()
        },
        bottomBar = {
            BottomFields(
                modifier = Modifier.fillMaxWidth(),
                chatUiState = chatUiState,
                onSendClick = { message ->
                    viewModel.generateContentWithText(message, null)
                },
                imagePicker = ImagePickerFactory(context = getPlatformContext()).createPicker{
                    viewModel.generateContentWithText("Hi", it)
                }
            )
        },
        content = { paddingValues ->
            ChatMessageItem(
                modifier = Modifier.padding(paddingValues),
                chatUiState = chatUiState
            )
        })
}