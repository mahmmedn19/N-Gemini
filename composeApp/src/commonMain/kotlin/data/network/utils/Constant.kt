package data.network.utils

object Constant {
    const val BASE_URL = "https://generativelanguage.googleapis.com"

    /*    private val NGEMINI_API_KEY = BuildKonfig.NGEMINI_API_KEY*/
    const val NGEMINI_API_KEY = "AIzaSyAQ3IxPChrrr4m6dtEkrV60nAJlvb_6Uz4"

    const val GEMINI_PRO =
        "$BASE_URL/v1beta/models/gemini-pro:generateContent?key=${NGEMINI_API_KEY}"

    const val GEMINI_PRO_VISION =
        "$BASE_URL/v1beta/models/gemini-pro-vision:generateContent?key=${NGEMINI_API_KEY}"
}