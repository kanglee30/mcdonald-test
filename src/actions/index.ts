"use server";

import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
import axios from "axios";

export async function fetchBurgers() {
  try {
    const burgerList = await axios.get(
      "https://burgerhub00.github.io/data/products.json"
    );

    return burgerList.data.products;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchCart() {
  try {
    const cartList = await axios.get("http://localhost:3003/cart");
    return cartList.data;
  } catch (err) {
    console.error(err);
  }
}

export async function addItemCart(burger: {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  calorie: number;
}) {
  try {
    await axios.post("http://localhost:3003/cart", {
      burger,
    });
  } catch (err) {
    console.error(err);
  }
  revalidatePath("/");
}

export async function deleteItemCart(id: string) {
  try {
    await axios.delete(`http://localhost:3003/cart/${id}`);
  } catch (err) {
    console.error(err);
  }
  revalidatePath("/");
}
