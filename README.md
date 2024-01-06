# N-Gemini

N-Gemini is a Kotlin Compose Multiplatform project designed to target Android, Web, and Desktop platforms.

![NGemini](https://github.com/mahmmedn19/N-Gemini/assets/100851080/612b8754-c80e-492a-adcb-fc616c6db6da)

https://github.com/mahmmedn19/N-Gemini/assets/100851080/98dbd815-86e2-4837-a59f-329bb4bd8220

## Project Structure

The `/composeApp` directory contains code shared across Compose Multiplatform applications, organized into the following subfolders:

- `commonMain`: Code common to all platforms.
- `jvmMain`, `androidMain`, `jsMain`: Platform-specific code for Desktop, Android, and Web, respectively.

## 📱 Supported Platforms

This project supports the following platforms:

- Android
- Desktop (Linux, macOS, Windows)
- Web

## Before Running

Before running the project, obtain an API key from [Google AI](https://ai.google.dev) to communicate with the Gemini API. Once obtained, assign the key to the `NGEMINI_API_KEY` constant in the `local.properties` file:

1. Add a `local.properties` file to the project root.
2. Set the path to the Android SDK in the `local.properties` file.
3. Add `NGEMINI_API_KEY=" "` to store the obtained API key.

Learn more about:

- [Kotlin Multiplatform](https://www.jetbrains.com/help/kotlin-multiplatform-dev/get-started.html)
- [Compose Multiplatform](https://github.com/JetBrains/compose-multiplatform/#compose-multiplatform)
- [Kotlin/Wasm](https://kotl.in/wasm/)

## Running the Application

### Android

To run the application on an Android device/emulator:

1. Open the project in Android Studio.
2. Run the imported Android run configuration.

To build the application bundle:

```bash
./gradlew :composeApp:assembleDebug
```
### Desktop

Run the desktop application:
```bash
./gradlew :composeApp:run
```
### Browser

Run the browser application:
```bash
./gradlew :composeApp:jsBrowserDevelopmentRun
```
## 🤍 Found this Repository Useful?

Support it by starring and sharing it ⭐

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/mahmmedn19/N-Gemini/blob/master/LICENSE) file for details.

