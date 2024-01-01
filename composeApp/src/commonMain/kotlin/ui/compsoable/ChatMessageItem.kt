package ui.compsoable

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import ui.screens.ChatUiState
import ui.util.ImagePicker

@Composable
fun ChatMessageItem(
    modifier: Modifier = Modifier,
    chatUiState: ChatUiState,
) {
    val listState = rememberLazyListState()
    if (chatUiState.message.isNotEmpty()) {
        LaunchedEffect(chatUiState.message) {
            listState.animateScrollToItem(chatUiState.message.lastIndex)
        }
    }
    LazyColumn(
        state = listState,
        modifier = modifier.fillMaxWidth(),
        contentPadding = PaddingValues(8.dp),
        verticalArrangement = Arrangement.spacedBy(4.dp)
    ) {
        items(chatUiState.message.size) {
            val message = chatUiState.message[it]
            if (message != null) {
                Box(
                    contentAlignment = if (message.isModel) Alignment.CenterEnd else Alignment.CenterStart,
                    modifier = Modifier
                        .clip(
                            RoundedCornerShape(
                                topStart = 24f,
                                topEnd = 24f,
                                bottomStart = if (message.isModel) 24f else 0f,
                                bottomEnd = if (message.isModel) 0f else 24f
                            )
                        )
                        .background(MaterialTheme.colors.secondary)
                        .padding(16.dp)
                ) {
                    Text(message.text.trim())
                }
            }
        }
    }
}