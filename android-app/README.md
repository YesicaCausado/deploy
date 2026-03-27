# 🎯 Enfoque Extremo - Android APK

Aplicación Android WebView que carga el juego **Enfoque Extremo** desde Netlify.

## 📱 Cómo generar el APK

### Opción 1: Android Studio (Recomendado)

1. **Descarga e instala** [Android Studio](https://developer.android.com/studio)
2. **Abre el proyecto**: `File > Open` → selecciona la carpeta `android-app`
3. **Espera** a que Gradle sincronice las dependencias
4. **Genera el APK**:
   - Para debug: `Build > Build Bundle(s) / APK(s) > Build APK(s)`
   - Para release: `Build > Generate Signed Bundle / APK`
5. El APK estará en: `app/build/outputs/apk/debug/app-debug.apk`

### Opción 2: Línea de comandos (con Android SDK instalado)

```bash
cd android-app
./gradlew assembleDebug
```

El APK se genera en: `app/build/outputs/apk/debug/app-debug.apk`

### Opción 3: Usar un servicio online

Si no tienes Android Studio, puedes usar servicios como:
- [AppsGeyser](https://www.appsgeyser.com/) - Convierte URL a APK gratis
- [WebIntoApp](https://www.webintoapp.com/) - WebView APK builder
- Sube la carpeta `android-app` a un servicio de build como [Codemagic](https://codemagic.io/)

## 📂 Estructura del proyecto

```
android-app/
├── build.gradle              # Config Gradle raíz
├── settings.gradle           # Settings del proyecto
├── gradle.properties         # Propiedades Gradle
├── app/
│   ├── build.gradle          # Config de la app
│   ├── proguard-rules.pro    # Reglas ProGuard
│   └── src/main/
│       ├── AndroidManifest.xml
│       ├── java/com/enfoqueextremo/app/
│       │   ├── MainActivity.java      # WebView principal
│       │   └── SplashActivity.java    # Splash screen
│       └── res/
│           ├── layout/
│           │   ├── activity_main.xml
│           │   └── activity_splash.xml
│           ├── values/
│           │   ├── colors.xml
│           │   ├── strings.xml
│           │   └── themes.xml
│           └── mipmap-*/              # Íconos de la app
```

## ⚙️ Configuración

- **URL del juego**: `https://deploy1c.netlify.app/`
- **Min SDK**: 24 (Android 7.0+)
- **Target SDK**: 34 (Android 14)
- **Package**: `com.enfoqueextremo.app`

## 🎮 Características

- ✅ WebView a pantalla completa (modo inmersivo)
- ✅ Splash screen animado con el logo
- ✅ JavaScript habilitado
- ✅ Soporte para sonido sin interacción
- ✅ Barra de progreso de carga
- ✅ Ícono personalizado con tu logo
