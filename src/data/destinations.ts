export type Destination = {
  id: number;
  title: string;
  description: string;
  depth: string;
  image: string;
};

export const destinations: Destination[] = [
  {
    id: 1,
    title: "Cabo de Palos",
    description: "Reserva marina · Isla Hormigas",
    depth: "18–30 m",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Cabo_de_Palos_-_Faro_de_la_Isla_de_la_Hormiga.jpg/800px-Cabo_de_Palos_-_Faro_de_la_Isla_de_la_Hormiga.jpg"
  },
  {
    id: 2,
    title: "El Hierro",
    description: "Volcanes submarinos y fauna",
    depth: "10–40 m",
    image: "https://sectormaritimo.es/wp-content/uploads/2012/11/volcanes_submarinos.jpg"
  },
  {
    id: 3,
    title: "Islas Medas",
    description: "Meros gigantes",
    depth: "12–25 m",
    image: "https://www.fishipedia.es/wp-content/uploads/2020/06/DSC03086-scaled.jpg"
  },
  {
    id: 4,
    title: "Gran Canaria",
    description: "El Cabrón",
    depth: "12–25 m",
    image: "https://www.grancanaria.com/blog/fileadmin/_processed_/csm_Gran-Canaria-buceo_8910fa9c72.jpg"
  }
];
