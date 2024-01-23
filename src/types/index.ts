export interface BurgerType {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  calorie: number;
}

export interface CartType {
  id: string;
  burger: BurgerType;
}
