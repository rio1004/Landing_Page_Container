"use client";

import { showModal, tabActive } from "@/store/atoms";
import Card from "./card";
import { cards } from "./cards";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import ModalComponent from "./ModalComponent";
import { motion, Variants } from "framer-motion";

const CardHolder = () => {
  const [activeTab, setActiveTab] = useAtom(tabActive);
  const [activeCards, setActiveCards] = useState([]);
  const [showMd, setShowModal] = useAtom(showModal);

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
    <>
      {showMd ? (
        <motion.div
          variants={{
            open: { opacity: 1, display: "block" },
            close: { opacity: 0, display: "none" },
          }}
          animate={showMd ? "open" : "close"}
        >
          <ModalComponent />
        </motion.div>
      ) : (
        ""
      )}

      <div
        className={`cardHolder grid ${
          activeCards.length < 5 ? "grid-cols-5" : "grid-auto-fit-[20rem]"
        } gap-4 ${showMd ? "blur-lg" : ""}`}
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
    </>
  );
};

export default CardHolder;
