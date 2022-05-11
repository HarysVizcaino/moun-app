import { MainAppMessage } from '../models/message-model';

const en: MainAppMessage = {
  id: 'en-US',
  menu: {
    home: 'home',
    about: 'about',
    search: 'search',
  },
  rightMenu: {
    english: 'english',
    spanish: 'spanish',
  },
  card: {
    learnMore: 'LEARN MORE',
  },
  homePage: {
    main: 'Find movie to watch in family',
    searchby: 'Search by Rating',
    searchButton: 'FIND MY MOVIE',
    listTitle: 'Discover the latest releases',
    genre: 'Genre',
    sortBy: 'Sorty By',
    popularity: {
      more: 'More Popular',
      less: 'Less Popular',
    },
    mostrecent: 'most recent release',
    oldestRelease: 'oldest release',
    categories: {
      family: 'Family',
      heroes: 'Heroes',
      terror: 'Terror',
    },
  },
};

export default en;
