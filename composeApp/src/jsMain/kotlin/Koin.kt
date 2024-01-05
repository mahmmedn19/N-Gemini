import di.*
import org.koin.core.context.startKoin
import org.koin.dsl.KoinAppDeclaration

fun initKoin() =
    startKoin {
        modules(
            nGeminiServiceModule,
            nGeminiRepositoryModule,
            networkModule,
            useCaseModule,
            viewModelModule
        )
    }
