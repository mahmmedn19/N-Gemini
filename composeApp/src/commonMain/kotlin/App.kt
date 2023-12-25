import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Close
import androidx.compose.material.icons.rounded.Send
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.unit.dp
import domain.models.NGemini
import kotlinx.coroutines.delay
import org.jetbrains.compose.resources.ExperimentalResourceApi
import ui.screens.ChatViewModel
import dev.icerock.moko.mvvm.viewmodel.ViewModel

@OptIn(ExperimentalResourceApi::class)
@Composable
fun App() {
    MaterialTheme {
        val viewModel: ChatViewModel by viewModel()
        val viewModels by inject<ChatViewModel>()

        /*
                val contentViewModel = getViewModel<ChatViewModel>()
        */

        ContentScreen(contentViewModel)

    }
}

@Composable
fun ContentScreen(viewModel: ChatViewModel) {
    var contentText by remember { mutableStateOf("") }
    var isError by remember { mutableStateOf(false) }
    val focusManager = LocalFocusManager.current

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        TextField(
            value = contentText,
            onValueChange = {
                contentText = it
                isError = false
            },
            label = { Text("Enter Content") },
            modifier = Modifier
                .fillMaxWidth()
                .background(color = Color.Black),
            keyboardOptions = KeyboardOptions.Default.copy(
                imeAction = ImeAction.Send
            ),
            keyboardActions = KeyboardActions(
                onSend = {
                    if (contentText.isNotBlank()) {
                        isError = false
                        viewModel.generateContent(contentText)
                        focusManager.clearFocus()
                    } else {
                        isError = true
                    }
                }
            ),
        )

        Spacer(modifier = Modifier.height(16.dp))

        if (isError) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(color = Color.Black)
                    .padding(8.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Icon(
                    imageVector = Icons.Rounded.Send,
                    contentDescription = null,
                    tint = Color.Red
                )
                Spacer(modifier = Modifier.width(8.dp))
                Text(
                    text = "Content cannot be empty",
                    color = Color.Red
                )
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        Button(
            onClick = {
                if (contentText.isNotBlank()) {
                    isError = false
                    viewModel.generateContent(contentText)
                    focusManager.clearFocus()
                } else {
                    isError = true
                }
            },
            modifier = Modifier.fillMaxWidth()
        ) {
            Icon(imageVector = Icons.Rounded.Send, contentDescription = null)
            Spacer(modifier = Modifier.width(8.dp))
            Text("Generate Content")
        }

        Spacer(modifier = Modifier.height(16.dp))

        val contentState by viewModel.contentState.collectAsState()
        val errorState by viewModel.errorState.collectAsState()

        if (contentState != null) {
            ContentResult(contentState!!)
        }

        if (errorState != null) {
            ErrorResult(errorState!!)
        }
    }
}

@Composable
fun ContentResult(content: NGemini) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp)
    ) {
        Spacer(modifier = Modifier.height(8.dp))
        //Text(text = content.candidates?.firstOrNull()?.content?.parts?.firstOrNull()?.text.orEmpty())
        GptTextAnimation(content.candidates?.firstOrNull()?.content?.parts?.firstOrNull()?.text.orEmpty())
    }
}

@Composable
fun ErrorResult(errorMessage: String) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .background(color = Color.Red)
            .padding(8.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Icon(
            imageVector = Icons.Outlined.Close,
            contentDescription = null,
            tint = Color.Red
        )
        Spacer(modifier = Modifier.width(8.dp))
        Text(text = errorMessage, color = Color.Red)
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
            delay(50) // Adjust this delay for the desired animation speed
        }
    }

    Text(
        text = animatedText,
    )
}

