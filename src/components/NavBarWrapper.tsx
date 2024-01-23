import Link from "next/link";
import * as actions from "@/actions";
import NavBar from "@/components/NavBar";

export default async function NavBarWrapper() {
  const burgerData = await actions.fetchBurgers();
  const cartData = await actions.fetchCart();

  return (
    <div>
      <NavBar burgers={burgerData} cart={cartData} />
    </div>
  );
}
