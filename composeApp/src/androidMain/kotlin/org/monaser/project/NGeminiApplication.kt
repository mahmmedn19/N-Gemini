package org.monaser.project

import org.koin.core.context.startKoin
import android.app.Application
import di.appModule
import org.koin.android.ext.koin.androidContext

class NGeminiApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        startKoin {
            androidContext(this@NGeminiApplication)
            modules(
                appModule()
            )
        }
    }
}
