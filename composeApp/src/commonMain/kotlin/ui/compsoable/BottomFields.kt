package ui.compsoable

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.OutlinedTextField
import androidx.compose.material.Text
import androidx.compose.material.TextFieldDefaults
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Attachment
import androidx.compose.material.icons.filled.Send
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.platform.LocalSoftwareKeyboardController
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ui.screens.ChatUiState
import ui.util.ImagePicker

@OptIn(ExperimentalComposeUiApi::class)
@Composable
fun BottomFields(
    modifier: Modifier = Modifier.fillMaxWidth(),
    chatUiState: ChatUiState,
    onSendClick: (String) -> Unit,
    imagePicker: ImagePicker
) {
    var message by remember { mutableStateOf("") }
    val keyboardController = LocalSoftwareKeyboardController.current
    val focusManager = LocalFocusManager.current
    val images = remember { mutableStateListOf<ByteArray>() }

    OutlinedTextField(
        value = message,
        onValueChange = {
            message = it
        },
        modifier = modifier
            .fillMaxWidth(),
        keyboardOptions = KeyboardOptions.Default.copy(
            imeAction = ImeAction.Send
        ),
        keyboardActions = KeyboardActions(
            onSend = {
                if (message.isNotEmpty()) {
                    onSendClick(message)
                    message = ""
                    focusManager.clearFocus()
                    keyboardController?.hide()
                }
            }
        ),
        placeholder = {
            Text("Type a message")
        },
        leadingIcon = {
            Icon(
                modifier = Modifier.size(48.dp).clickable {
                    imagePicker.pickImages()
                },
                imageVector = Icons.Default.Attachment,
                contentDescription = "Attachment",
                tint = MaterialTheme.colors.primary
            )
        },
        trailingIcon = {
            Icon(
                modifier = Modifier.size(36.dp)
                    .clickable {
                        if (message.isNotEmpty()) {
                            onSendClick(message)
                            message = ""
                            focusManager.clearFocus()
                            keyboardController?.hide()
                        }
                    },
                imageVector = Icons.Default.Send,
                contentDescription = "Send",
                tint = if (message.isNotEmpty()) MaterialTheme.colors.primary else Color.Gray
            )
        },
        textStyle = TextStyle(
            fontSize = 18.sp,
            fontFamily = MaterialTheme.typography.h2.fontFamily,
            color = Color.Black
        ),
        colors = TextFieldDefaults.outlinedTextFieldColors(
            focusedBorderColor = Color.Gray,
            unfocusedBorderColor = Color.Gray,
            focusedLabelColor = Color.Gray,
            unfocusedLabelColor = Color.Gray
        )

    )
    Spacer(modifier = Modifier.height(16.dp))

    ImageList(images = images)

    imagePicker.registerPicker()

}