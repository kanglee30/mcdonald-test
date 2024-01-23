"use client";

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { BurgerType, CartType } from "@/types";

interface NavBarProps {
  burgers: BurgerType[];
  cart: CartType[];
}

const NavBarWrapper = styled.section`
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  svg {
    fill: white;
  }
  .left_hand,
  .right_hand {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    h3 {
      color: green;
      padding-right: 20px;
    }
  }
  .right_hand {
    &__cart {
      position: relative;
      span {
        position: absolute;
        top: -7px;
        right: -15px;
        background-color: red;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
      }
    }
  }
`;

export default function NavBar({ burgers, cart }: NavBarProps) {
  return (
    <NavBarWrapper>
      <div className="left_hand">
        <h3>BURGER</h3>
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="35px"
            height="35px"
            viewBox="0 0 50 50"
          >
            <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
          </svg>
        </Link>
      </div>
      <div className="right_hand">
        <SearchBar burgers={burgers} />
        <div className="right_hand__cart">
          <span>{cart?.length}</span>
          <div className="cart_icon">
            <Link href="/cart">
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                width="35px"
                height="35px"
                viewBox="0 0 902.86 902.86"
              >
                <g>
                  <g>
                    <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z     M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z" />
                    <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717    c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744    c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742    C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744    c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z     M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742    S619.162,694.432,619.162,716.897z" />
                  </g>
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </NavBarWrapper>
  );
}
