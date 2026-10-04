import Chips from "./Chips";
import { SHOPS } from "../data/products";

export default function ShopFilter({ value, onChange }) {
  return <Chips small options={["All shops", ...SHOPS.map(s => s.name)]} value={value} onChange={onChange} />;
}
