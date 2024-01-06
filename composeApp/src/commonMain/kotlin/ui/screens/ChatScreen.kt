package ui.screens


import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.jetbrains.compose.resources.painterResource
import org.koin.mp.KoinPlatform
import ui.compsoable.BottomFields
import ui.compsoable.ChatMessageItem
import ui.compsoable.NGeminiTopAppBar
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

@OptIn(ExperimentalResourceApi::class)
@Composable
fun ChatContent(
    chatUiState: ChatUiState,
    viewModel: ChatViewModel,
) {
    Scaffold(
        contentColor = MaterialTheme.colorScheme.background,
        topBar = { NGeminiTopAppBar() },
        bottomBar = {
            BottomFields(
                modifier = Modifier.navigationBarsPadding(),
                chatUiState = chatUiState,
                onSendClick = { message, images ->
                    viewModel.generateContentWithText(message, images)
                },
                imagePicker = ImagePickerFactory(getPlatformContext()).createPicker()
            )
        },
        content = { paddingValues ->
            Column(
                modifier = Modifier.fillMaxSize(),
                verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally,
            ) {
                AnimatedVisibility(
                    visible = chatUiState.message.isEmpty(),
                    enter = fadeIn(),
                    exit = fadeOut()
                ) {
                    Column(
                        modifier = Modifier.fillMaxSize(),
                        verticalArrangement = Arrangement.Center,
                        horizontalAlignment = Alignment.CenterHorizontally,
                    ) {
                        Image(
                            painter = painterResource("placeholder.png"),
                            contentDescription = "placeholder",
                            modifier = Modifier
                                .size(160.dp),
                            contentScale = ContentScale.Crop
                        )
                        Text(
                            text = "Welcome to NGemini",
                            color = MaterialTheme.colorScheme.primary,
                        )
                    }
                }
            }

            ChatMessageItem(
                modifier = Modifier.padding(paddingValues),
                chatUiState = chatUiState
            )
        },
    )
}