package org.monaser.project

import org.koin.core.context.startKoin
import android.app.Application
import android.content.Context
import android.net.Uri
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.*
import androidx.compose.runtime.setValue
import androidx.compose.ui.platform.LocalContext
import di.appModule
import org.koin.android.ext.koin.androidContext

class NGeminiApplication : Application() {
    companion object {
        lateinit var INSTANCE: NGeminiApplication
    }
    override fun onCreate() {
        super.onCreate()
        startKoin {
            androidContext(this@NGeminiApplication)
            modules(
                appModule()
            )
        }
        INSTANCE = this
    }
}