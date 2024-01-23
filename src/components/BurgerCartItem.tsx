"use client";

import styled from "styled-components";
import Image from "next/image";
import * as actions from "@/actions";

//TYpes
import { BurgerType } from "@/types";

interface BurgerCartItemProps {
  burgerCartItem: {
    burgerId: string[];
    burgers: BurgerType[];
  };
}

const BurgerCartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  color: white;
  margin: 0 auto;
  padding-top: 20px;
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
  svg {
    width: 20px;
    height: 20px;
  }
  .left_hand,
  .right_hand {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .right_hand {
    p {
      margin-right: 20px;
    }
  }
`;

export default function BurgerCartItem({
  burgerCartItem,
}: BurgerCartItemProps) {
  const burgerDetals = burgerCartItem.burgers[0];

  const getBurgerPrice = (burger: BurgerType[]) => {
    let price = 0;
    burger.forEach((burgerItem: BurgerType) => {
      price += burgerItem.price;
    });
    return (price / 100).toFixed(2);
  };
  const handlePostRequest = async () => {
    try {
      const id = burgerCartItem.burgerId[0];
      await actions.deleteItemCart(id);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };
  return (
    <BurgerCartItemWrapper>
      <div className="left_hand">
        <Image
          src={burgerDetals.image}
          alt={burgerDetals.description}
          width={320}
          height={240}
          style={{ objectFit: "cover" }}
          priority
        />
        <p>{`${burgerDetals.name} (${burgerCartItem.burgers.length})`}</p>
      </div>
      <div className="right_hand">
        <p>${getBurgerPrice(burgerCartItem.burgers)}</p>
        <button onClick={handlePostRequest}>
          <svg
            fill="#000000"
            version="1.1"
            width="800px"
            height="800px"
            viewBox="0 0 485 485"
          >
            <g>
              <g>
                <rect x="67.224" width="350.535" height="71.81" />
                <path d="M417.776,92.829H67.237V485h350.537V92.829H417.776z M165.402,431.447h-28.362V146.383h28.362V431.447z M256.689,431.447    h-28.363V146.383h28.363V431.447z M347.97,431.447h-28.361V146.383h28.361V431.447z" />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </BurgerCartItemWrapper>
  );
}
