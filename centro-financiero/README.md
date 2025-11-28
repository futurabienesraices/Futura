# Centro Financiero - Futura Bienes Raíces

## Descripción
Herramientas de financiamiento inmobiliario profesionales para El Salvador. Incluye:
- Calculadora de hipotecas con amortización francesa
- Calculadora de aranceles de compra
- Comparador de tasas de diferentes entidades

## Estructura del Proyecto

```
centro-financiero/
├── src/
│   ├── main.jsx         # Punto de entrada
│   ├── App.jsx          # Componente principal
│   ├── index.css        # Estilos globales
│   └── index.html       # Template HTML
├── package.json         # Dependencias
├── vite.config.js       # Configuración de Vite
├── tailwind.config.js   # Configuración de Tailwind
└── postcss.config.js    # Configuración de PostCSS
```

## Instalación

1. Navega a la carpeta del proyecto:
   ```bash
   cd centro-financiero
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173`

## Build

Para crear la versión de producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

## Características

### Calculadora de Hipotecas
- Cálculo automático de cuota mensual (P&I)
- Costos adicionales (seguros, gastos administrativos)
- Tabla de amortización de 12 primeros meses
- Soporte para diferentes tipos de enganche

### Aranceles de Compra
- Impuesto de Transferencia (ITBR)
- Honorarios notariales
- Derechos de Inscripción (CNR)
- Cálculos basados en legislación de El Salvador

### Comparador de Tasas
- Tasas actualizadas de FSV, Banco Agrícola, BAC, Davivienda, etc.
- Análisis de elegibilidad (ratio 30% de ingreso)
- Identificación de mejores opciones

## Tecnologías

- React 18
- Vite
- Tailwind CSS
- Lucide React (iconos)

## Despliegue

Este proyecto está configurado para desplegarse en Hostinger como un sitio estático.

1. En tu host, crea una carpeta `centro-financiero` en `public_html/`
2. Sube el contenido de `dist/` a esa carpeta
3. Accede vía `tudominio.com/centro-financiero/`

## Autor

Futura Bienes Raíces - Centro Financiero Inmobiliario
