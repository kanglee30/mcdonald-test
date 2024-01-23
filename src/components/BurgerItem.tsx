"use client";

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import * as actions from "@/actions";

//TYpes
import { BurgerType } from "@/types";
import { useRouter } from "next/navigation";

interface BurgerItemProps {
  burger: BurgerType;
  detailed?: boolean;
}

const BurgetItemWrapper = styled.div`
  color: white;
  background-color: rgb(15, 17, 18);
  width: 85%;
  margin: 0 auto;
  padding: 10px;
  min-height: 445px;
  &.burger_item_wrapper--detailed {
    border-radius: 5px;
    .link {
      margin: 10px;
    }
  }
  .button_go_back {
    display: flex;
    border: none;
    border-style: none;
    background-color: transparent;
    padding: 10px 15px;
    color: white;
    font-size: 16px;
    svg {
      margin-left: 10px;
      fill: white;
      width: 15px;
      height: 15px;
    }
  }
  .burger_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    max-width: 320px;
    margin: 0 auto;
    text-align: left;
    h1 {
      text-align: center;
      padding: 10px 0;
    }
    p {
      padding-bottom: 5px;
    }
    img {
      width: 100%;
      height: auto;
      max-height: 220px;
      border-radius: 5px;
    }

    button {
      background-color: rgb(129, 129, 129);
      border-radius: 30px;
      padding: 15px 30px;
      color: white;
      margin: 15px 85px;
      border-style: none;
      &:hover {
        background-color: rgb(156, 156, 156);
      }
    }
    &__cart {
      text-align: center;
      padding-top: 10px;
    }
  }
`;

export default function BurgerList({ burger, detailed }: BurgerItemProps) {
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const router = useRouter();

  const handlePostRequest = async (postData: BurgerType) => {
    try {
      await actions.addItemCart(postData);
      setConfirmationVisible(true);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };
  return (
    <BurgetItemWrapper
      className={
        detailed ? "burger_item_wrapper--detailed" : "burger_item_wrapper"
      }
    >
      {detailed && (
        <button className="button_go_back" onClick={() => router.back()}>
          Go Back
          <svg x="0" y="0" viewBox="0 0 128 128">
            <g id="_x32_8_1_">
              <path
                d="M78.1 0v6.2c22.4 0 40.5 18.2 40.5 40.6s-18.1 40.6-40.5 40.6H17.9l27.9-28-4.5-4.5L5.5 90.8l36 36.2 4.5-4.5-28.8-28.9h60.9c25.8 0 46.7-21 46.7-46.8S103.9 0 78.1 0z"
                id="icon_13_"
              />
            </g>
          </svg>
        </button>
      )}
      <div className="burger_item">
        <Image
          src={burger.image}
          alt={burger.description}
          width={320}
          height={240}
          style={{ objectFit: "cover" }}
          priority
        />
        <h1>{burger.name}</h1>
        <p>{burger.description}</p>
        <p>${(burger.price / 100).toFixed(2)}</p>
        {detailed && (
          <>
            <p>Nutrition: {burger.calorie} calories</p>
            <button
              onClick={() => {
                handlePostRequest(burger);
              }}
            >
              Add to Cart
            </button>
          </>
        )}
        {confirmationVisible && (
          <p className="burger_item__cart">Item Added to Cart</p>
        )}
      </div>
    </BurgetItemWrapper>
  );
}
