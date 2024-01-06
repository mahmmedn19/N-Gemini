package ui.util

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.ImageBitmap
import kotlinx.browser.document
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.asList
import org.w3c.files.File
import org.w3c.files.FileReader

actual class PlatformContext

@Composable
actual fun getPlatformContext(): PlatformContext = PlatformContext()

actual class ImagePicker {
    private var onImagePicked: ((List<ByteArray>) -> Unit)? = null

    init {
        setupImagePicker()
    }

    private fun setupImagePicker() {
        document.addEventListener("change", { event ->
            val input = event.target as? HTMLInputElement
            if (input?.id == "imageInput") {
                val files = input.files
                val images = files?.asList()?.map { file ->
                    file.readAsByteArray {
                        onImagePicked?.invoke(listOf(it))
                    }
                } ?: emptyList()
            }
        })
    }

    actual fun pickImages() {
        document.getElementById("imageInput")?.let {
            (it as? HTMLInputElement)?.click()
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
    return null
}

private fun ByteArray.toBase64(): String {
    return js("btoa(String.fromCharCode.apply(null, this))") as String
}

fun File.readAsByteArray(callback: (ByteArray) -> Unit) {
    val reader = FileReader()
    reader.onload = {
        callback(reader.result.unsafeCast<ByteArray>())
    }
    reader.readAsArrayBuffer(this)
}