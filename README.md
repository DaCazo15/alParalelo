<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./src/assets/logo.png" alt="Project logo"></a>
</p>

<h3 align="center">alParalelo</h3>

<div align="center">

[![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)]()
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)]()
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)]()

</div>

---

<p align="center"> Una aplicación Vue.js para la conversión de monedas entre Bolívar Venezolano y Dólar Estadounidense, utilizando tasas de cambio oficiales y paralelas.
    <br>
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

alParalelo es una aplicación web desarrollada con Vue.js que permite convertir entre Bolívar Venezolano (VES) y Dólar Estadounidense (USD). Utiliza las tasas de cambio oficiales y las del mercado paralelo (informal) para proporcionar conversiones precisas y actualizadas.

La aplicación obtiene los datos de las tasas de cambio a través de una API externa y permite al usuario seleccionar la dirección de la conversión (VES a USD o USD a VES) y la cantidad a convertir.

## 🏁 Getting Started <a name = "getting_started"></a>

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Prerequisites

Necesitas tener instalado Node.js y npm en tu sistema.

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (viene incluido con Node.js)

### Installing

1. Clona el repositorio:

```
git clone https://github.com/DaCazo15/alParalelo.git
```

2. Navega al directorio del proyecto:

```
cd alParalelo
```

3. Instala las dependencias:

```
npm install
```

4. Inicia el servidor de desarrollo:

```
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique Vite).

## 🎈 Usage <a name="usage"></a>

1. Abre la aplicación en tu navegador.
2. Selecciona la dirección de la conversión usando el checkbox (de VES a USD o viceversa).
3. Ingresa la cantidad a convertir.
4. Haz clic en "Calcular" para ver los resultados con ambas tasas (oficial y paralela).
5. Usa "Limpiar" para resetear los valores.

## 🚀 Deployment <a name = "deployment"></a>

Para desplegar la aplicación en un sistema en vivo:

1. Construye la aplicación para producción:

```
npm run build
```

2. Sirve los archivos generados en la carpeta `dist` usando un servidor web estático como Nginx, Apache o Vercel/Netlify.

## ⛏️ Built Using <a name = "built_using"></a>

- [Vue.js](https://vuejs.org/) - Framework web
- [Vite](https://vitejs.dev/) - Herramienta de construcción y servidor de desarrollo
- [Node.js](https://nodejs.org/en/) - Entorno de ejecución

## ✍️ Authors <a name = "authors"></a>

- [@DaCazo15](https://github.com/DaCazo15) - Desarrollo inicial

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- API externa para obtener las tasas de cambio
- Comunidad de Vue.js por el excelente framework
