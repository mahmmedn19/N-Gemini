package di

import org.koin.dsl.module
import ui.screens.ChatViewModel

val viewModelModule = module {
    single { ChatViewModel(get()) }
}