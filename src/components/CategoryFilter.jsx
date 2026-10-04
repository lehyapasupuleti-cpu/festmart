import Chips from "./Chips";
import { CATS } from "../data/products";

export default function CategoryFilter({ value, onChange }) {
  return <Chips options={CATS} value={value} onChange={onChange} />;
}
