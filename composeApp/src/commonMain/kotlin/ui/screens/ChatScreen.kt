package ui.screens

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.material.Icon
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Send
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import data.models.ChatMessage
import data.models.Role
import io.ktor.utils.io.core.toByteArray
import kotlinx.coroutines.delay
import org.jetbrains.compose.resources.Resource
import org.jetbrains.skia.Drawable
import org.koin.mp.KoinPlatform
import ui.compsoable.ChatMessageItem
import ui.compsoable.MessageBubble

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
    val listState = rememberLazyListState()
    if (chatUiState.message.isNotEmpty()) {
        LaunchedEffect(chatUiState.message) {
            listState.animateScrollToItem(chatUiState.message.lastIndex)
        }
    }
    Scaffold(
        modifier = Modifier.fillMaxSize(),
        backgroundColor = Color.DarkGray,
        content = {
            Column {
                LazyColumn(
                    state = listState,
                    modifier = Modifier.fillMaxWidth(),
                    contentPadding = PaddingValues(16.dp)
                ) {
                    items(chatUiState.message.size) {
                        val chatMessage = chatUiState.message[it]
                        if (chatMessage != null) {
                            ChatMessageItem(chatMessage = chatMessage)
                        }
                    }
                }
                Spacer(modifier = Modifier.weight(1f))
                MessageBubble(
                    onSendClick = {
                        viewModel.generateContentWithText(it)
                    },
                    onAttachmentClick = {

                    }
                )
            }


        })

}


@Composable
fun GptTextAnimation(text: String) {
    var animatedText by remember { mutableStateOf("") }
    var visibleCharCount by remember { mutableStateOf(0) }

    LaunchedEffect(text) {
        while (visibleCharCount <= text.length) {
            animatedText = text.take(visibleCharCount)
            visibleCharCount++
            delay(50)
        }
    }
    Text(
        text = animatedText,
    )
}