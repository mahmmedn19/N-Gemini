package domain.models

data class NGemini(
    val candidates: List<Candidate>?,
) {
    data class Candidate(
        val content: Content?,
        val finishReason: String?,
    )

    data class Content(
        val parts: List<Part>?,
        val role: String?
    )

    data class Part(
        val text: String?
    )

}