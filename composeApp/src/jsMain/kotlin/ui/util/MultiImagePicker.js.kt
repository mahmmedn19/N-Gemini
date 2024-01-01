package ui.util

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.ImageBitmap

actual class PlatformContext()

@Composable
actual fun getPlatformContext(): PlatformContext = PlatformContext()

actual class ImagePicker(
    private val onImagePicked: (List<ByteArray>) -> Unit
) {
    // Actual implementation for Android
    actual fun pickImages() {
    }

    @Composable
    actual fun registerPicker() {
    }
}

actual class ImagePickerFactory actual constructor(context: PlatformContext) {
    // Actual implementation for Android
    @Composable
    actual fun createPicker(onImagePicked: (List<ByteArray>) -> Unit): ImagePicker {
        TODO("Not yet implemented")
    }
}

@Composable
actual fun rememberBitmapFromBytes(bytes: ByteArray?): ImageBitmap? {
    // Actual implementation for Android
    TODO("Not yet implemented")

}
