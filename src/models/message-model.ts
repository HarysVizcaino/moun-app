export interface MainAppMessage {
  id: string;
  menu: {
    home: string;
    about: string;
    search: string;
  };
  rightMenu: {
    english: string;
    spanish: string;
  };
  card: {
    learnMore: string;
  };
  homePage: {
    main: string;
    searchby: string;
    listTitle: string;
    searchButton: string;
    genre: string;
    sortBy: string;
    popularity: {
      more: string;
      less: string;
    };
    mostrecent: string;
    oldestRelease: string;
    categories: {
      terror: string;
      heroes: string;
      family: string;
    };
  };
}
