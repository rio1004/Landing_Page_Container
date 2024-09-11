"use client";

import { tabActive } from "@/store/atoms";
import Card from "./card";
import { cards } from "./cards";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

const CardHolder = () => {
  const [activeTab, setActiveTab] = useAtom(tabActive);
  const [activeCards, setActiveCards] = useState([]);

  useEffect(() => {
    renderCards();
  }, [activeTab]);

  const renderCards = () => {
    if (activeTab === "favorites") {
      const filteredCards = cards.filter((item) => item.isFav === true);
      setActiveCards(filteredCards);
    } else {
      setActiveCards(cards);
    }
  };

  return (
    <div
      className={`cardHolder grid ${
        activeCards.length < 5
          ? "grid-cols-5"
          : "grid-auto-fit-[20rem]"
      } gap-4`}
    >
      {activeCards.map((item) => (
        <Card
          key={item.url}
          url={item.url}
          title={item.title}
          isFav={item.isFav}
        />
      ))}
    </div>
  );
};

export default CardHolder;
