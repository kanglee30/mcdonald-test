"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import BurgerCartItem from "@/components/BurgerCartItem";

//TYpes
import { BurgerType } from "@/types";

interface BurgerCartListProps {
  burgersCart: { id: string; burger: BurgerType }[];
}

const BurgetListWrapper = styled.section`
  min-height: 100vh;
  margin: 5%;
  border-radius: 5px;
  padding: 20px 20px 50px 20px;
  background-color: rgb(15, 17, 18);
  h1 {
    text-align: center;
    color: white;
    padding-bottom: 35px;
  }
`;

export default function BurgerList({ burgersCart }: BurgerCartListProps) {
  const [currCart, setCurrCart] = useState<
    { burgerId: string[]; burgers: BurgerType[] }[]
  >([]);

  useEffect(() => {
    const combinedData: { burgerId: string[]; burgers: BurgerType[] }[] = [];
    const burgerIdSet = new Set();

    burgersCart.forEach((item) => {
      const burgerId = item.burger.id;
      if (!burgerIdSet.has(burgerId)) {
        burgerIdSet.add(burgerId);
        combinedData.push({
          burgerId: [item.id],
          burgers: [item.burger],
        });
      } else {
        const index = combinedData.findIndex(
          (data) => data.burgers[0].id === burgerId
        );
        combinedData[index].burgerId.push(item.id);
        combinedData[index].burgers.push(item.burger);
      }
    });

    setCurrCart(combinedData);
  }, [burgersCart]);

  return (
    <BurgetListWrapper>
      <h1>Shopping Cart</h1>
      {currCart.length === 0 && (
        <h2>
          Your current cart is empty. Buy some <Link href="/">burgers!</Link>
        </h2>
      )}
      {currCart &&
        currCart.map((item, key) => (
          <div key={item.burgerId.join()}>
            <BurgerCartItem burgerCartItem={item} />
          </div>
        ))}
    </BurgetListWrapper>
  );
}
