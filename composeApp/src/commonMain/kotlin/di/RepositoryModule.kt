package di


import data.repository.NGeminiRepositoryImp
import domain.repository.NGeminiRepository
import org.koin.dsl.module


val nGeminiRepositoryModule = module {
    single<NGeminiRepository> { NGeminiRepositoryImp(get()) }
}
