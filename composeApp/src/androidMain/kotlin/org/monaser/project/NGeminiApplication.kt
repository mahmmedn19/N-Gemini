package org.monaser.project

import android.app.Application
import di.nGeminiRepositoryModule
import di.nGeminiServiceModule
import di.networkModule
import di.useCaseModule
import di.viewModelModule
import org.koin.android.ext.koin.androidContext
import org.koin.core.context.startKoin

class NGeminiApplication : Application() {
    companion object {
        lateinit var INSTANCE: NGeminiApplication
    }

    override fun onCreate() {
        super.onCreate()
        startKoin {
            androidContext(this@NGeminiApplication)
            modules(
                nGeminiServiceModule,
                nGeminiRepositoryModule,
                networkModule,
                useCaseModule,
                viewModelModule
            )
        }
        INSTANCE = this
    }
}