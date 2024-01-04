package data.network.utils

import org.monaser.project.BuildKonfig

object Constant {
    private const val BASE_URL = "https://generativelanguage.googleapis.com"

    private val NGEMINI_API_KEY = BuildKonfig.NGEMINI_API_KEY

    val GEMINI_PRO =
        "$BASE_URL/v1beta/models/gemini-pro:generateContent?key=${NGEMINI_API_KEY}"

    val GEMINI_PRO_VISION =
        "$BASE_URL/v1beta/models/gemini-pro-vision:generateContent?key=${NGEMINI_API_KEY}"
}