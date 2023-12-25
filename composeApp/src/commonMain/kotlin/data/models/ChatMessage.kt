package data.models


data class ChatMessage(
    val text: String,
    val image: String? = null,
    val role: String = Role.USER.roleName,
) {
    val isModel: Boolean
        get() = role == Role.MODEL.roleName
}

enum class Role(val roleName: String) {
    USER("You"),
    MODEL("NGemini")
}
