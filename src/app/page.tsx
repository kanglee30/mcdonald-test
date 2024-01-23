import Link from "next/link";
import BurgerList from "@/components/BurgerList";
import * as actions from "@/actions";

export default async function Home() {
  // Fetch Burger List
  const burgerList = await actions.fetchBurgers();
  return (
    <div>
      <BurgerList burgers={burgerList} />
    </div>
  );
}
