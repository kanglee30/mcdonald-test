"use client";

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { BurgerType } from "@/types";

interface SearchBarProps {
  burgers: BurgerType[];
}

const SearchBarWrapper = styled.div`
  position: relative;
  input {
    /* color: white; */
    background-color: rgb(129, 129, 129);
    padding: 7px 5px;
    border-radius: 5px;
    margin-right: 20px;
    &::-webkit-input-placeholder {
      color: white;
    }
  }
  ul {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgb(129, 129, 129);
    border-radius: 5px;
    li {
      list-style-type: none;
      padding: 5px;
      a {
        color: white;
      }
      &:hover {
        background-color: rgb(156, 156, 156);
      }
    }
  }
`;

export default function SearchBar({ burgers }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<BurgerType[]>([]);

  const handleSearch = (query: string) => {
    if (query !== "") {
      const filteredBurgers = burgers.filter((burger) =>
        burger.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredBurgers);
    } else {
      setSearchResults([]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);
    handleSearch(query);
  };

  const handleSelect = (burger: BurgerType) => {
    setSearchResults([]);
  };

  return (
    <SearchBarWrapper>
      <input
        type="text"
        placeholder="Search for burgers..."
        value={searchTerm}
        onChange={handleChange}
      />
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((burger, index) => (
            <li key={Math.random()} onClick={() => handleSelect(burger)}>
              <Link href={`/burgers/${burger.id}`}>{burger.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </SearchBarWrapper>
  );
}
