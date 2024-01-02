@file:OptIn(ExperimentalComposeLibrary::class)


import org.jetbrains.compose.ExperimentalComposeLibrary
import org.jetbrains.compose.desktop.application.dsl.TargetFormat

plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidApplication)
    alias(libs.plugins.jetbrainsCompose)
    alias(libs.plugins.buildConfig)
    alias(libs.plugins.kotlinx.serialization)
    id("com.google.android.libraries.mapsplatform.secrets-gradle-plugin")
    /*
        id("com.codingfeline.buildkonfig")
    */
}

kotlin {
/*    @OptIn(ExperimentalWasmDsl::class)
    wasmJs {
        moduleName = "composeApp"
        browser {
            commonWebpackConfig {
                outputFileName = "composeApp.js"
            }
        }
        binaries.executable()
    }*/


    androidTarget {
        compilations.all {
            kotlinOptions {
                jvmTarget = "17"
            }
        }
    }

    jvm("desktop")

    js(IR) {
        moduleName = "composeApp"
        browser {
            commonWebpackConfig {
                outputFileName = "composeApp.js"
            }
        }
        binaries.executable()
    }


    sourceSets {
        val desktopMain by getting

        androidMain.dependencies {
            implementation(libs.compose.ui.tooling.preview)
            implementation(libs.compose.uitooling)
            implementation(libs.androidx.activity.compose)
            implementation(libs.kotlinx.coroutines.android)
            implementation(libs.ktor.client.okhttp)
            implementation(libs.ktor.core)
            implementation(libs.koin.androidx.compose)
            implementation(libs.koin.android)
            implementation(libs.kstore.file)

        }
        commonMain.dependencies {
            implementation(compose.runtime)
            implementation(compose.foundation)
            implementation(compose.material)
            implementation(compose.ui)
            @OptIn(ExperimentalComposeLibrary::class)
            implementation(compose.components.resources)
            implementation(compose.materialIconsExtended)
            implementation(compose.material3)
            implementation(libs.ktor.core)
            implementation(libs.kotlinx.coroutines.core)
            implementation(libs.ktor.client.content.negotiation)
            implementation(libs.ktor.client.logging)
            implementation(libs.io.ktor.ktor.client.serialization)
            implementation(libs.kotlinx.serialization.json)
            implementation(libs.koin.core)
            implementation(libs.composeIcons.featherIcons)
            implementation(libs.com.google.code.gson)
            implementation(libs.moko.mvvm)
            implementation(libs.mvvm.flow.compose)
            implementation(libs.material.v150)
            implementation(libs.kstore)

        }
        desktopMain.dependencies {
            implementation(compose.desktop.currentOs)
            implementation(compose.desktop.common)
            implementation(libs.ktor.client.okhttp)
            implementation(libs.kotlinx.coroutines.core)
            // Toaster for Windows
            implementation(libs.toast4j)

            implementation("de.jangassen:jfa:1.2.0") {

                exclude(group = "net.java.dev.jna", module = "jna")
            }
            implementation(libs.kstore.file)
        }

        jsMain.dependencies {
            implementation(compose.html.core)
        }
    }
}

android {
    namespace = "org.monaser.project"
    compileSdk = 34

    sourceSets["main"].manifest.srcFile("src/androidMain/AndroidManifest.xml")
    sourceSets["main"].res.srcDirs("src/androidMain/res")
    sourceSets["main"].resources.srcDirs("src/commonMain/resources")

    defaultConfig {
        applicationId = "org.monaser.project"
        minSdk = 24
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"
    }
    packaging {
        resources {
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
        }
    }
    buildTypes {
        getByName("release") {
            isMinifyEnabled = false
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    dependencies {
        debugImplementation(libs.compose.ui.tooling)
    }
    buildFeatures {
        compose = true
        buildConfig = true
    }
    composeOptions {
        kotlinCompilerExtensionVersion = "1.5.4"
    }
}


compose.desktop {
    application {
        mainClass = "MainKt"

        nativeDistributions {
            targetFormats(TargetFormat.Dmg, TargetFormat.Msi, TargetFormat.Deb)
            packageName = "org.monaser.project"
            packageVersion = "1.0.0"
        }
    }
}

compose.experimental {
    web.application {}
}


/*buildkonfig {
    packageName = "org.monaser.project"

    defaultConfigs {
        val apiKey: String = gradleLocalProperties(rootDir).getProperty("NGEMINI_API_KEY")

        require(apiKey.isNotEmpty()) {
            "Register your api key from developer.nytimes.com and place it in local.properties as `apiKey`"
        }

        buildConfigField("NGEMINI_API_KEY", apiKey)
    }
}*/
