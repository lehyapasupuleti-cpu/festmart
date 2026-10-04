import ProductCard from "./ProductCard";

export default function ProductList({ products, cart, favs, onAdd, onFav, onShop, empty = "No items found. Try another filter!" }) {
  if (!products.length) return <p className="mut">{empty}</p>;
  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} qty={cart[p.id]} fav={favs.includes(p.id)}
          onAdd={() => onAdd(p.id, 1)} onFav={() => onFav(p.id)} onShop={onShop} />
      ))}
    </div>
  );
}
