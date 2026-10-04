import Chips from "./Chips";

export default function Header({ screen, setScreen, cartCount, favCount }) {
  const labels = { home: "🏠 Home", shops: "🏪 Shops", favs: `❤️ Favorites${favCount ? ` (${favCount})` : ""}`, cart: `🛒 Cart${cartCount ? ` (${cartCount})` : ""}` };
  const active = screen === "shop" ? "shops" : screen === "done" ? "cart" : screen;
  return (
    <header>
      <h2>🪔 FestMart</h2>
      <Chips options={Object.keys(labels)} value={active} onChange={setScreen} label={k => labels[k]} />
    </header>
  );
}
