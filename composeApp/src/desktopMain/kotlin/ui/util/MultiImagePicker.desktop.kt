package ui.util


import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.toComposeImageBitmap
import java.awt.FileDialog
import java.awt.Frame
import java.io.ByteArrayInputStream
import javax.imageio.ImageIO

actual class PlatformContext

@Composable
actual fun getPlatformContext(): PlatformContext = PlatformContext()

actual class ImagePicker {
    private var onImagePicked: ((List<ByteArray>) -> Unit)? = null

    actual fun pickImages() {
        val fileDialog = FileDialog(Frame(), "Select Images", FileDialog.LOAD)
        fileDialog.isMultipleMode = true
        fileDialog.file = "*.png;*.jpg;*.jpeg"
        fileDialog.isVisible = true

        val selectedFiles = fileDialog.files
        selectedFiles?.let { files ->
            val images = files.map { file ->
                file.readBytes()
            }
            onImagePicked?.invoke(images)
        }
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
    return if (bytes != null) {
        val inputStream = ByteArrayInputStream(bytes)
        ImageIO.read(inputStream).toComposeImageBitmap()
    } else {
        null
    }
}


