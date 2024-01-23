import { notFound } from "next/navigation";
import BurgetItem from "@/components/BurgerItem";
import * as actions from "@/actions";
import { BurgerType } from "@/types";

interface BurgerDetailPageProps {
  params: {
    id: string;
  };
}

export default async function BurgerDetailPage(props: BurgerDetailPageProps) {
  // Fetch Burger List
  const burgerList = await actions.fetchBurgers();

  const burger = burgerList.find(
    (burgerItem: BurgerType) => `${burgerItem.id}` === `${props.params.id}`
  );

  if (!burger) {
    return notFound();
  }

  return <div>{burger && <BurgetItem burger={burger} detailed />}</div>;
}

export async function generateStaticParams() {
  const burgerList = await actions.fetchBurgers();

  return burgerList.map((burgerItem: BurgerType) => {
    return {
      id: burgerItem.id,
    };
  });
}
