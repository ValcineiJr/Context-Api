import React, { createContext, useState, useEffect, useContext } from "react";

const DataContext = createContext({
  offers: Array,
  setOffers: () => {},
  categories: Array,
  setCategories: () => {},
  moreSeller: Array,
  setMoreSeller: () => {},
  categoriesList: Array,
  setCategoriesList: () => {},
});

const categoriesItems = [
  { key: "1", name: "Promoções", cor: "#CF2434" },
  { key: "2", name: "Mercados", cor: "#FFC44E" },
  { key: "3", name: "Padarias", cor: "#AADFB1" },
  { key: "4", name: "Cafeterias", cor: "#AF9EC8" },
  { key: "5", name: "Doces & Bolos", cor: "#416549" },
  { key: "6", name: "Salgados", cor: "#CF2434" },
  { key: "7", name: "Congelados", cor: "#FFC44E" },
  { key: "8", name: "Saudáveis", cor: "#AADFB1" },
  { key: "9", name: "Cozinha rápida", cor: "#AF9EC8" },
  { key: "10", name: "Pizza", cor: "#416549" },
  { key: "11", name: "Japonês", cor: "#CF2434" },
  { key: "12", name: "Poke", cor: "#FFC44E" },
  { key: "13", name: "Espetinhos", cor: "#AADFB1" },
  { key: "14", name: "Hot-Dog", cor: "#AF9EC8" },
  { key: "15", name: "Chinesa", cor: "#416549" },
  { key: "16", name: "Italiana", cor: "#CF2434" },
  { key: "17", name: "Carnes", cor: "#FFC44E" },
  { key: "18", name: "Árabe", cor: "#AADFB1" },
  { key: "19", name: "Sorvetes", cor: "#AF9EC8" },
];

export const DataProvider = ({ children }) => {
  const [offers, setOffers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesList, setCategoriesList] = useState(categoriesItems);
  const [moreSeller, setMoreSeller] = useState([]);

  return (
    <DataContext.Provider
      value={{
        offers,
        setOffers,
        categories,
        setCategories,
        moreSeller,
        setMoreSeller,
        categoriesList,
        setCategoriesList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export function useData() {
  const context = useContext(DataContext);

  return context;
}
