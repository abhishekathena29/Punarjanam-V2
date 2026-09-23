import furniture from "@/assets/furniture.jpg";
import lighting from "@/assets/lighting.jpg";
import sculpture from "@/assets/sculpture.jpg";
import decor from "@/assets/decor.jpg";

export type Piece = {
  id: string;
  name: string;
  category: "Furniture" | "Lighting" | "Sculpture" | "Décor";
  price: string;
  origin: string;
  artist: string;
  image: string;
};

export const pieces: Piece[] = [
  {
    id: "FR-021",
    name: "Rim Plinth Table",
    category: "Furniture",
    price: "₹32,000",
    origin: "Alloy rim, Tata Indica 2009",
    artist: "Devika Rao, Delhi",
    image: furniture,
  },
  {
    id: "LT-007",
    name: "Headlamp Pendant",
    category: "Lighting",
    price: "₹9,500",
    origin: "Headlamp housing, Bajaj Chetak",
    artist: "Imran Qureshi, Delhi",
    image: lighting,
  },
  {
    id: "SC-033",
    name: "Grille Study No. 3",
    category: "Sculpture",
    price: "₹48,000",
    origin: "Grille & cam gears, Maruti 800",
    artist: "Farah Ansari, Jaipur",
    image: sculpture,
  },
  {
    id: "DC-048",
    name: "Piston Bookend Set",
    category: "Décor",
    price: "₹2,400",
    origin: "Pistons & sprockets, mixed lots",
    artist: "Rohan Mehta, Gurgaon",
    image: decor,
  },
];

export const process = [
  {
    step: "01",
    title: "Sourcing",
    body: "Parts are recovered from certified end-of-life vehicle yards in Mayapuri and Mangolpuri.",
  },
  {
    step: "02",
    title: "Preparation",
    body: "Components are cleaned, hazardous fluids removed, and structural condition assessed.",
  },
  {
    step: "03",
    title: "Creation",
    body: "Artists across Delhi, Jaipur and Gurgaon shape each part into a single finished piece.",
  },
  {
    step: "04",
    title: "Provenance",
    body: "Every work ships with a record of its vehicle, lot, artist and kilograms diverted.",
  },
];

export const impact = [
  { value: "20.8t", label: "Material upcycled" },
  { value: "3,014", label: "Parts reborn" },
  { value: "182", label: "Artists supported" },
  { value: "12", label: "Public installations" },
];
