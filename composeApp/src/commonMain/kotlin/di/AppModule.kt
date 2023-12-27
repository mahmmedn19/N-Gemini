package di

import org.koin.dsl.module

fun appModule() = module {
    includes(
        nGeminiServiceModule,
        nGeminiRepositoryModule,
        networkModule,
        useCaseModule,
        viewModelModule
    )
}