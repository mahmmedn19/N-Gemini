package data.mapper

import data.models.*
import domain.models.NGemini


fun NGeminiResponseDto.toNGemini(): NGemini {

    return NGemini(
        candidates?.map { it.toCandidate() } ?: emptyList(),
    )
}

fun CandidateDto.toCandidate(): NGemini.Candidate {
    return NGemini.Candidate(
        content?.toContent(),
        finishReason,
    )
}

fun ContentDto.toContent(): NGemini.Content {
    return NGemini.Content(
        parts?.map { it.toPart() } ?: emptyList(),
        role.orEmpty()
    )
}

fun PartDto.toPart(): NGemini.Part {
    return NGemini.Part(
        text.orEmpty()
    )
}