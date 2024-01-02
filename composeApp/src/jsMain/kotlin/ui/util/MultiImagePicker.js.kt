// Web module

package ui.util

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.ImageBitmap


actual class PlatformContext

@Composable
actual fun getPlatformContext(): PlatformContext = PlatformContext()

actual class ImagePicker {
    private var onImagePicked: ((List<ByteArray>) -> Unit)? = null

    actual fun pickImages() {

    }

    @Composable
    actual fun registerPicker(onImagePicked: (List<ByteArray>) -> Unit) {
        this.onImagePicked = onImagePicked
    }
}

actual class ImagePickerFactory actual constructor(private val context: PlatformContext) {
    @Composable
    actual fun createPicker(): ImagePicker {
        return ImagePicker()
    }
}

@Composable
actual fun rememberBitmapFromBytes(bytes: ByteArray?): ImageBitmap? {
    // TODO: Implement
    return null
}


