package ui.compsoable

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import ui.screens.ChatUiState

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
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        items(chatUiState.message.size) {
            val message = chatUiState.message[it]
            if (message != null) {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(
                            start = if (message.isModel) 64.dp else 0.dp,
                            end = if (message.isModel) 0.dp else 64.dp
                        ),
                    contentAlignment = if (message.isModel) Alignment.CenterEnd else Alignment.CenterStart,
                ) {
                    Box(
                        modifier = Modifier
                            .clip(
                                RoundedCornerShape(
                                    topStart = 24.dp,
                                    topEnd = 24.dp,
                                    bottomStart = if (message.isModel) 24.dp else 0.dp,
                                    bottomEnd = if (message.isModel) 0.dp else 24.dp
                                )
                            )
                            .background(MaterialTheme.colorScheme.tertiaryContainer)
                            .padding(16.dp),
                        contentAlignment = if (message.isModel) Alignment.CenterEnd else Alignment.CenterStart
                    ) {
                        Text(
                            message.text.trim(),
                            color = MaterialTheme.colorScheme.onTertiaryContainer,
                        )
                    }
                }
            }
        }
    }
}

