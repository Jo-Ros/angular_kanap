export interface Product {
    id: string,
    name: string,
    price: number, 
    description: string,
    imgUrl: string,
    colors: string[],
}

export const products = [
    {
      id: "107fb5b75607497b96722bda5b504926",
      name: "Kanap panaK",
      price: 4443,
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imgUrl: "../assets/images/kanap001.jpg",
      colors: [ 'blue', 'green', 'black'],
    },
    {
      id: "107fb5b75607hjhgj96722bda5b504926",
      name: "Kanap Altemps",
      price: 1849,
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imgUrl: "../assets/images/kanap02.jpg",
      colors: [ 'yellow', 'orange', 'red'],
    },
    {
      id: "107fb5b75607fdfd96722bda5b504926",
      name: "Kanap Etit",
      price: 3456,
      description: "",
      imgUrl: "../assets/images/kanap03.jpg",
      colors: [ 'green', 'black', 'grey'],
    },
    {
      id: "107fb5b7560rtrt6722bda5b504926",
      name: "Kanap Oil",
      price: 149,
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imgUrl: "../assets/images/kanap04.jpg",
      colors: [ 'pink', 'red', 'purple'],
    },
    {
      id: "107fb5b756074thth6722bda5b504926",
      name: "Kanap Adargent",
      price: 1654,
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imgUrl: "../assets/images/kanap05.jpg",
      colors: [ 'red', 'salmon', 'trout'],
    },
];