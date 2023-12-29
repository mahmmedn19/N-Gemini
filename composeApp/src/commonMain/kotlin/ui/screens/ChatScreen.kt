package ui.screens

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.gestures.detectTransformGestures
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.AppBarDefaults
import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.material.TextField
import androidx.compose.material.TopAppBar
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Send
import androidx.compose.material.icons.rounded.AttachFile
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.platform.LocalSoftwareKeyboardController
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.unit.dp
import data.models.ChatMessage
import kotlinx.coroutines.delay
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.koin.mp.KoinPlatform

@Composable
fun ChatScreen() {
    val contentViewModel: ChatViewModel = KoinPlatform.getKoin().get()
    val state by contentViewModel.chatUiState.collectAsState()
    ChatContent(
        chatUiState = state, viewModel = contentViewModel
    )
}

@OptIn(ExperimentalComposeUiApi::class)
@Composable
fun ChatContent(
    chatUiState: ChatUiState, viewModel: ChatViewModel
) {

    var contentText by remember { mutableStateOf("") }
    val focusManager = LocalFocusManager.current
    var attachmentImage: ImageBitmap? by remember { mutableStateOf(null) }
    var isError by remember { mutableStateOf(false) }
    val keyboardController = LocalSoftwareKeyboardController.current
    var offset by remember { mutableStateOf(0f) }
    var scale by remember { mutableStateOf(1f) }
    var rotation by remember { mutableStateOf(0f) }

    Scaffold(
        content = {
        Column(
            modifier = Modifier.fillMaxSize().padding(16.dp)
        ) {
            // Display chat messages
            chatUiState.message.forEach { message ->
                if (message != null) {
                    ChatMessageItem(message = message)
                }
            }
            Spacer(modifier = Modifier.height(16.dp))
            attachmentImage?.let {
                Image(bitmap = it,
                    contentDescription = null,
                    modifier = Modifier.size(100.dp).background(Color.Gray).pointerInput(Unit) {
                            detectTransformGestures { _, pan, zoom, rotationChange ->
                                if (pan.y > 0) {
                                    scale *= zoom
                                    rotation += rotationChange
                                    attachmentImage = null
                                }
                            }
                        })
            }
            Spacer(modifier = Modifier.weight(1f))
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                IconButton(onClick = {

                }) {
                    Icon(
                        imageVector = Icons.Rounded.AttachFile,
                        contentDescription = "Attach File"
                    )
                }

                TextField(
                    value = contentText,
                    onValueChange = {
                        contentText = it
                        isError = false
                    },
                    label = { Text("Enter your message") },
                    modifier = Modifier.fillMaxWidth(),
                    keyboardOptions = KeyboardOptions.Default.copy(
                        imeAction = ImeAction.Send
                    ),
                    keyboardActions = KeyboardActions(onSend = {
                        if (contentText.isNotBlank()) {
                            isError = false
                            viewModel.generateContent(contentText)
                            contentText = ""
                            focusManager.clearFocus()
                        } else {
                            isError = true
                        }
                    }),
                )
                IconButton(onClick = {
                    if (contentText.isNotBlank()) {
                        isError = false
                        viewModel.generateContent(contentText)
                        contentText = ""
                        focusManager.clearFocus()
                    } else {
                        isError = true
                    }
                }) {
                    Icon(imageVector = Icons.Outlined.Send, contentDescription = "Send")
                }
            }
        }
    })
}


@Composable
fun ChatMessageItem(message: ChatMessage) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(8.dp),
        horizontalArrangement = if (message.isModel) Arrangement.Start else Arrangement.End
    ) {
        if (message.image != null) {
            // Display image if available

        }
        // Display text message
        Text(
            text = message.text,
            modifier = Modifier.background(
                    if (message.isModel) Color.Gray else Color.Blue,
                    CircleShape
                ).padding(8.dp),
            color = Color.White
        )
    }
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