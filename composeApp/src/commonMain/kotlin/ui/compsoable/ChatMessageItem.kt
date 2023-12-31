package ui.compsoable

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import data.models.ChatMessage
import ui.screens.GptTextAnimation

@Composable
fun ChatMessageItem(
    chatMessage: ChatMessage
) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp)
    ) {
        Box(
            modifier = Modifier
                .align(if (chatMessage.isModel) Alignment.Start else Alignment.End)
                .clip(
                    RoundedCornerShape(
                        topStart = 24f,
                        topEnd = 24f,
                        bottomStart = if (chatMessage.isModel) 24f else 0f,
                        bottomEnd = if (chatMessage.isModel) 0f else 24f
                    )
                )
                .background(Color.LightGray)
                .padding(16.dp)
        ) {
            Text(chatMessage.text.trim())
        }
    }
}