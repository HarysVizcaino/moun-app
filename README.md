# Moun - App Aplicacion para buscar informacion de peliculas

DEMO 👉 https://moun-fv40q9rhc-harysvizcaino.vercel.app/

Esto es un ejemplo para la empresa Houm.com frontend challenge.

## Prerequisites

Necesitara [Node.js](https://nodejs.org) version 16 o superior.

## Setup

Opten el codigo clonandolo de github o descargando un zip

```
git clone https://github.com/HarysVizcaino/moun-app.git
```

```
npm install
```

Para correr tu propia version del app necesitas configurar las variables de environment `local.env` crea un archivo y añade las siguientes variables:

```
NEXT_PUBLIC_ANALYTICS_ID=''
NEXT_PUBLIC_API_URL=''
NEXT_PUBLIC_API_KEY=''
NEXT_PUBLIC_IMAGE_URL=''
```

Se utilizo el API de the movie DB [consigue aqui un API KEY](https://www.themoviedb.org/).

Para correr el proyecto:

```
npm run dev
```

La aplicacion deberia estar visible en: http://localhost:3000 🚀

## Detalle

Que contiene la aplicacion:

### Contiene un infinit Scroll para que no exista la necesidad de paginar ulizando eventos.

### Tiene traduccion con un metodo que es utilizando data components como context api global.

### la data esta almacenada en un main componente (data component).

### lo usuarios pueden cambiar el idioma de la applicacion y toda la data incluido los request se haran en este idioma

### posibilidad de filtrar utilizando las categorias de las peliculas y los generos
