import { SHOPS } from "../data/products";
import ProductList from "./ProductList";

export default function ShopPage({ name, products, onBack, ...rest }) {
  const shop = SHOPS.find(s => s.name === name);
  return (
    <>
      <button className="chip" onClick={onBack}>← All shops</button>
      <div className="card list">
        <h2>{shop.emoji} {shop.name}</h2>
        <p className="mut">{shop.about}</p><b>🎁 {shop.deal}</b>
      </div>
      <ProductList products={products} onShop={() => {}} {...rest} />
    </>
  );
}
