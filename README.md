# 🎯 Enfoque Extremo

Un juego de concentración extrema desarrollado en React donde debes mantener presionado un botón mientras resistes múltiples distracciones.

## 🎮 Descripción del Juego

**Enfoque Extremo** es un juego que simula la experiencia de mantener la concentración real frente a interrupciones. El objetivo es simple pero desafiante: mantén presionado el botón el mayor tiempo posible mientras lidias con diversas distracciones.

## 🌟 Características

### Mecánica del Juego
- Presiona y mantén el botón para comenzar el juego
- Tu tiempo se registra mientras mantienes el botón presionado
- Si sueltas el botón, el juego termina
- Intenta superar tu mejor tiempo personal

### Distracciones
Durante el juego, enfrentarás múltiples tipos de distracciones diseñadas para romper tu concentración:

- 🔄 **Vibraciones de Pantalla**: La interfaz tiembla de forma aleatoria
- 🎭 **Botones Falsos**: Aparecen botones engañosos que imitan al real
- ⚡ **Flashes Visuales**: Destellos de luz que intentan distraerte
- 🎨 **Cambios de Color**: La pantalla cambia de tonalidad repentinamente
- 🔊 **Alertas Sonoras**: Beeps y sonidos de advertencia

## 🚀 Instalación y Ejecución

### Requisitos Previos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

```bash
npm install
```

### Ejecución en Modo Desarrollo

```bash
npm run dev
```

El juego se ejecutará en `http://localhost:5173` (o el puerto que Vite asigne automáticamente).

### Compilación para Producción

```bash
npm run build
```

### Vista Previa de la Compilación

```bash
npm run preview
```

## 🎯 Cómo Jugar

1. Abre el juego en tu navegador
2. Presiona el botón verde que dice "¡PRESIONA AQUÍ!"
3. Mantén el botón presionado todo el tiempo que puedas
4. Resiste las distracciones que aparecerán aleatoriamente
5. Si sueltas el botón, el juego termina y se muestra tu tiempo
6. Intenta superar tu mejor récord

### Consejos
- 💡 Mantén la calma y no te dejes engañar por los botones falsos
- 💡 Ignora las vibraciones y efectos visuales
- 💡 Concéntrate en mantener el cursor sobre el botón real
- 💡 Los sonidos son solo distracciones, no te asustes

## 🛠️ Tecnologías Utilizadas

- **React** 19.2.4 - Framework de interfaz de usuario
- **Vite** 8.0.1 - Herramienta de construcción y desarrollo
- **JavaScript** - Lenguaje de programación
- **CSS3** - Estilos y animaciones
- **Web Audio API** - Efectos de sonido

## 📱 Compatibilidad

El juego es compatible con:
- Navegadores de escritorio (Chrome, Firefox, Safari, Edge)
- Dispositivos móviles (táctiles)
- Diferentes tamaños de pantalla (responsive design)

## 🎨 Características Técnicas

- Animaciones CSS suaves
- Efectos de sonido generados con Web Audio API
- Estados de React para manejo del juego
- Hooks personalizados para efectos y timers
- Sistema de puntuación y récords
- Interfaz responsive

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Desarrollo

### Estructura del Proyecto
```
deploy/
├── src/
│   ├── App.jsx       # Componente principal del juego
│   ├── App.css       # Estilos del juego
│   ├── main.jsx      # Punto de entrada
│   └── index.css     # Estilos globales
├── public/           # Archivos estáticos
├── package.json      # Dependencias y scripts
└── vite.config.js    # Configuración de Vite
```

### Scripts Disponibles
- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta el linter

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas para nuevas distracciones o mejoras al juego, no dudes en contribuir.

---

¡Diviértete probando tu concentración! 🎯✨

