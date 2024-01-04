package ui.compsoable

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Image
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import ui.util.rememberBitmapFromBytes

@Composable
fun ImageList(
    modifier: Modifier = Modifier,
    images: List<ByteArray>
) {
    LazyRow(
        modifier = modifier.wrapContentSize(),
        contentPadding = PaddingValues(8.dp),
    ) {
        items(images.size) { index ->
            val imageBytes = images[index]
            val bitmap = rememberBitmapFromBytes(imageBytes)
            bitmap?.let {
                Image(
                    bitmap = it,
                    contentDescription = null,
                    modifier = Modifier
                        .size(96.dp)
                        .padding(8.dp)
                        .fillMaxSize()
                        .border(
                            border = BorderStroke(2.dp, color = Color.Unspecified)
                        )
                        .clip(RoundedCornerShape(8.dp)),
                    contentScale = ContentScale.Crop
                )
            }
        }
    }
}