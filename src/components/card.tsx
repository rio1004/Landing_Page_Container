"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CardProps = {
  url: string;
  title: string;
  isFav: boolean;
};

const Card = ({ url, title, isFav }: CardProps) => {
  const [favorite, setIsFav] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  useEffect(() => {
    console.log(isFav);
    fav();
  }, []);
  const showMoadal = () => {
    console.log("click");
  };
  const fav = () => {
    const fav = isFav ? "/images/fillStar.png" : "/images/star.png";

    console.log(fav);
    setIsFav(fav);
  };
  return (
    <div
      className="card flex justify-center flex-col items-center"
      onClick={() => showMoadal()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="frameHolder relative">
        <iframe
          className="rounded-3xl border-white border-2"
          src={url}
          height="500px"
        >
          Your browser does not support iframes.
        </iframe>
        {/* {isHovered && (
          <div className="absolute w-[100%] h-[100%] bg-black rounded-3xl opacity-50 top-0 pointer-events-none "></div>
        )}
        {} */}
      </div>
      <div className="description flex justify-between my-5 w-[80%] max-w-[280px]">
        <p className="text-2xl font-black">{title}</p>
        <Image
          src={favorite}
          alt={"rating"}
          width={24}
          height={24}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

// position: absolute;
// width: 100%;
// height: 100%;
// background: #000;
// top: 0;
// border-radius: 1.5rem;
// opacity: 0.5;
// pointer-events: none;

export default Card;
