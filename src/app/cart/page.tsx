import * as actions from "@/actions";
import BurgerCartList from "@/components/BurgerCartList";

export default async function CartPage() {
  const burgersCart = await actions.fetchCart();

  return (
    <div>
      <BurgerCartList burgersCart={burgersCart} />
    </div>
  );
}
