package ui.compsoable

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.layout.size
import androidx.compose.material.MaterialTheme
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun LoadingIcon(state: Boolean) {

    AnimatedVisibility(
        visible = state,
        enter = fadeIn(),
        exit = fadeOut()
    ) {
        CircularProgressIndicator(
            modifier = Modifier
                .size(36.dp),
            color = MaterialTheme.colors.primary
        )
    }
}