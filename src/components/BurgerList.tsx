"use client";

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import BurgerItem from "@/components/BurgerItem";
import { BurgerType } from "@/types";

interface BurgerListProps {
  burgers: BurgerType[];
}

const BurgetListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: rgb(0, 0, 1);
  .burger_item_wrapper {
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function BurgerList({ burgers }: BurgerListProps) {
  return (
    <BurgetListWrapper>
      {burgers &&
        burgers.map((burgerItem) => (
          <div key={burgerItem.id}>
            <Link href={`/burgers/${burgerItem.id}`}>
              <BurgerItem burger={burgerItem} />
            </Link>
          </div>
        ))}
    </BurgetListWrapper>
  );
}
