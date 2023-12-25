package di

import com.monaser.ngemini.ui.screens.ChatViewModel
import org.koin.dsl.module

val viewModelModule = module {
    single { ChatViewModel(get()) }
}