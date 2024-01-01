package ui.util

import androidx.compose.runtime.Composable

import androidx.compose.ui.graphics.ImageBitmap


expect class PlatformContext {
}

@Composable
expect fun getPlatformContext(): PlatformContext
expect class ImagePicker {
    fun pickImages()

    @Composable
    fun registerPicker()
}

expect class ImagePickerFactory(context: PlatformContext) {
    @Composable
    fun createPicker(onImagePicked: (List<ByteArray>) -> Unit): ImagePicker
}

@Composable
expect fun rememberBitmapFromBytes(bytes: ByteArray?): ImageBitmap?
