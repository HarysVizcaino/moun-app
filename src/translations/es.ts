import { MainAppMessage } from '../models/message-model';

const es: MainAppMessage = {
  id: 'es',
  menu: {
    home: 'Inicio',
    about: 'Nosotros',
    search: 'Buscar',
  },
  rightMenu: {
    english: 'ingles',
    spanish: 'español',
  },
  card: {
    learnMore: 'VER MAS',
  },
  homePage: {
    main: 'Encuentra peliculas para ver en familia',
    searchby: 'Buscar por estrellas',
    listTitle: 'Descubre los últimos estrenos',
    searchButton: 'ENCONTRAR MI PELICULA',
    genre: 'Genero',
    sortBy: 'Organizar Por',
    popularity: {
      more: 'Mas Populares',
      less: 'Menores Populares',
    },
    mostrecent: 'Lanzamiento más reciente',
    oldestRelease: 'Lanzamiento más antiguos',
    categories: {
      family: 'Familia',
      heroes: 'Heroes',
      terror: 'Terror',
    },
  },
};

export default es;
