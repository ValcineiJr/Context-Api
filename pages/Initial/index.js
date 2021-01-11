import React, { useEffect, useMemo } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useData } from "../../contexts/data";
import { useAuth } from "../../contexts/auth";

import { Address, Header, Wrapper, Welcome, Name } from "./styles";
import CategoryList from "../../components/CategoryList";
import OffersList from "../../components/OffersList";
import BestSellerHeader from "../../components/BestSellerHeader";

import colors from "../../styles/colors";
import { Feather } from "@expo/vector-icons";
import BestSellerList from "../../components/BestSellerList";
import CartIndicator from "../../components/CartIndicator";

const Initial = () => {
  const navigation = useNavigation();
  const { setOffers, setCategories, setMoreSeller } = useData();
  const { user } = useAuth();

  const { data } = useMemo(() => {
    const items = [
      { key: "CATEGORIES", render: () => <CategoryList /> },
      { key: "OFFERS", render: () => <OffersList /> },
      { key: "BEST_SELLER", render: () => <BestSellerHeader /> },
      { key: "BEST_SELLER_LIST", render: () => <BestSellerList /> },
    ];

    return {
      data: items,
    };
  }, []);

  useEffect(() => {
    setCategories([
      {
        key: "1",
        image:
          "https://supermercadotakara.com.br/takaravp/wp-content/uploads/2017/03/CARRINHO.png",
        name: "Mercado",
        color: "#FFC44E",
      },
      {
        key: "2",
        image: "https://image.flaticon.com/icons/png/512/40/40354.png",
        name: "Promoções",
        color: colors.second_red,
      },
      {
        key: "3",
        image:
          "https://restaurantesabordecasa.com.br/wp-content/uploads/2018/06/prato-com-arroz-e-feij%C3%A3o.png",
        name: "Brasileira",
        color: colors.green,
      },
      {
        key: "4",
        image:
          "https://i2.wp.com/www.greensaboresnaturais.com.br/wp-content/uploads/2019/08/Salada_Topo.png?fit=748%2C742&ssl=1",
        name: "Salada",
        color: colors.green,
      },
      {
        key: "5",
        image:
          "https://i1.wp.com/presuntovegetariano.com.br/wp-content/uploads/2015/09/RefeicaocompletaPadraoArtigos-300x300.png?resize=300%2C300",
        name: "Vegetariana",
        color: "#7495BE",
      },
      {
        key: "6",
        image:
          "https://apetitoso.com.br/wp-content/themes/apetitoso/assets/img/marmita/saborosa-max.png",
        name: "Marmita",
        color: colors.second_red,
      },
    ]);
    setOffers([
      { key: "1", text: "Almoço apartir de R$10", color: colors.second_red },
      { key: "2", text: "Até 70% OFF", color: colors.yellow },
      {
        key: "3",
        text: "Restaurantes com entrega grátis",
        color: colors.green,
      },
    ]);
    setMoreSeller([
      {
        key: "1",
        image:
          "https://jvonline.com.br/img/noticias/noticias_bf680b9ccda1740bd911c0c4bf3b4a7b.jpg",
      },
      {
        key: "2",
        image:
          "https://jvonline.com.br/img/noticias/noticias_bf680b9ccda1740bd911c0c4bf3b4a7b.jpg",
      },
      {
        key: "3",
        image:
          "https://jvonline.com.br/img/noticias/noticias_bf680b9ccda1740bd911c0c4bf3b4a7b.jpg",
      },
      {
        key: "4",
        image:
          "https://jvonline.com.br/img/noticias/noticias_bf680b9ccda1740bd911c0c4bf3b4a7b.jpg",
      },
    ]);
  }, []);

  const goToDetails = () => {
    navigation.navigate("Pedidos");
  };

  return (
    <Wrapper>
      <CartIndicator />
      <Header>
        <Welcome>
          Logado como: <Name>{user.name}</Name>
        </Welcome>
        <TouchableOpacity>
          <Address>
            Escolha seu endereço{" "}
            <Feather name="chevron-down" color={colors.second_red} size={15} />{" "}
          </Address>
        </TouchableOpacity>
      </Header>
      <FlatList
        data={data}
        renderItem={({ item }) => item.render()}
        keyExtractor={(item) => item.key}
      />
    </Wrapper>
  );
};

export default Initial;
