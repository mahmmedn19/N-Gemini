package di


import domain.usecase.GetContentUseCase
import domain.usecase.IGetContentUseCase
import org.koin.dsl.module

val useCaseModule = module {
    single<IGetContentUseCase> { GetContentUseCase(get()) }
}