package ui.compsoable

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.Icon
import androidx.compose.material.OutlinedTextField
import androidx.compose.material.Text
import androidx.compose.material.TextFieldDefaults
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Attachment
import androidx.compose.material.icons.filled.Send
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.platform.LocalSoftwareKeyboardController
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import ui.screens.ChatUiState
import ui.util.ImagePicker

@OptIn(ExperimentalComposeUiApi::class)
@Composable
fun BottomFields(
        modifier: Modifier = Modifier.fillMaxWidth(),
        chatUiState: ChatUiState,
        onSendClick: (String, List<ByteArray>?) -> Unit,
        imagePicker: ImagePicker
) {
    var message by remember { mutableStateOf("") }
    val keyboardController = LocalSoftwareKeyboardController.current
    val focusManager = LocalFocusManager.current
    val images = remember { mutableStateListOf<ByteArray>() }
    imagePicker.registerPicker {
        images.addAll(it)
    }
    Box(
            modifier = modifier
    ) {
        Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center
        ) {
            ImageList(
                    images = images,
            )
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
                                if (message.isNotEmpty() || images.isNotEmpty()) {
                                    onSendClick(message, images)
                                    message = ""
                                    focusManager.clearFocus()
                                    keyboardController?.hide()
                                }
                            }
                    ),
                    placeholder = {
                        Text(
                                text = "Message NGemini.....",
                                color = MaterialTheme.colorScheme.outline,
                                maxLines = 2,
                                overflow = TextOverflow.Ellipsis
                        )
                    },
                    leadingIcon = {
                        Icon(
                                modifier = Modifier.size(32.dp).clickable {
                                    imagePicker.pickImages()
                                },
                                imageVector = Icons.Default.Attachment,
                                contentDescription = "Attachment",
                                tint = MaterialTheme.colorScheme.primary
                        )
                    },
                    trailingIcon = {

                        if (chatUiState.isLoading) {
                            LoadingIcon(state = chatUiState.isLoading)
                        } else {
                            Icon(
                                    modifier = Modifier.size(32.dp)
                                            .clickable {
                                                if (message.isNotEmpty() || images.isNotEmpty()) {
                                                    onSendClick(message, images)
                                                    message = ""
                                                    images.clear()
                                                    focusManager.clearFocus()
                                                    keyboardController?.hide()
                                                }
                                            },
                                    imageVector = Icons.Default.Send,
                                    contentDescription = "Send",
                                    tint = if (message.isNotEmpty() || images.isNotEmpty()) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.outline
                            )
                        }
                    },
                    textStyle = TextStyle(
                            fontSize = 18.sp,
                            fontFamily = MaterialTheme.typography.labelLarge.fontFamily,
                            color = MaterialTheme.colorScheme.onSecondaryContainer
                    ),
                    colors = TextFieldDefaults.outlinedTextFieldColors(
                            textColor = MaterialTheme.colorScheme.onSecondaryContainer,
                            backgroundColor = MaterialTheme.colorScheme.secondaryContainer,
                            focusedBorderColor = MaterialTheme.colorScheme.primary,
                            unfocusedBorderColor = MaterialTheme.colorScheme.primary,
                            focusedLabelColor = MaterialTheme.colorScheme.primary,
                            unfocusedLabelColor = MaterialTheme.colorScheme.primary
                    ),
                    shape = RoundedCornerShape(topStart = 16.dp, topEnd = 16.dp),
            )
        }
    }
}