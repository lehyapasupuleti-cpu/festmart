import { useState } from "react";
import { FESTIVALS, PRODUCTS, WHATSAPP, finalPrice } from "./data/products";
import useLocalStorage from "./useLocalStorage";
import useDealTimer from "./useDealTimer";
import Header from "./components/Header";
import FestivalSwitcher from "./components/FestivalSwitcher";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ShopFilter from "./components/ShopFilter";
import TodayDeal from "./components/TodayDeal";
import ProductList from "./components/ProductList";
import ShopList from "./components/ShopList";
import ShopPage from "./components/ShopPage";
import Cart from "./components/Cart";
import OrderDone from "./components/OrderDone";

export default function App() {
  const [fest, setFest] = useState("Diwali");
  const [cat, setCat] = useState("All");
  const [shop, setShop] = useState("All shops");
  const [search, setSearch] = useState("");
  const [screen, setScreen] = useState("home");
  const [openShop, setOpenShop] = useState(null);
  const [cart, setCart] = useLocalStorage("fm-cart", {});
  const [favs, setFavs] = useLocalStorage("fm-favs", []);
  const [info, setInfo] = useState({ name: "", phone: "" });
  const [order, setOrder] = useState(null);
  const timer = useDealTimer();

  const deal = PRODUCTS.find(p => p.deal && p.fest.includes(fest));
  const home = PRODUCTS.filter(p =>
    (p.fest.includes("all") || p.fest.includes(fest)) &&
    (cat === "All" || p.cat === cat) &&
    (shop === "All shops" || p.shop === shop) &&
    p.name.toLowerCase().includes(search.toLowerCase()));
  const lines = PRODUCTS.filter(p => cart[p.id]);
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const total = lines.reduce((s, p) => s + finalPrice(p) * cart[p.id], 0);

  const change = (id, d) => setCart(c => {
    const n = { ...c, [id]: (c[id] || 0) + d };
    if (n[id] <= 0) delete n[id];
    return n;
  });
  const toggleFav = id => setFavs(f => f.includes(id) ? f.filter(x => x !== id) : [...f, id]);
  const open = name => { setOpenShop(name); setScreen("shop"); };

  const byShop = [...new Set(lines.map(p => p.shop))];
  const waText = encodeURIComponent("Hello! I want to order from FestMart:\n" +
    byShop.map(s => `\n🏪 ${s}\n` + lines.filter(p => p.shop === s).map(p => `• ${p.name} x${cart[p.id]} = ₹${finalPrice(p) * cart[p.id]}`).join("\n")).join("\n") +
    `\n\nTotal: ₹${total}\nName: ${info.name}\nPhone: ${info.phone}`);
  const place = () => {
    if (!info.name || !info.phone) return alert("Please enter your name and phone.");
    setOrder({ id: "FM" + Date.now().toString().slice(-6), total });
    setCart({}); setScreen("done");
  };
  const list = { cart, favs, onAdd: change, onFav: toggleFav, onShop: open };

  return (
    <div className="app" style={{ "--g": FESTIVALS[fest].grad }}>
      <Header screen={screen} setScreen={setScreen} cartCount={count} favCount={favs.length} />
      {screen === "home" && (
        <>
          <FestivalSwitcher fest={fest} onChange={setFest} />
          <TodayDeal deal={deal} timer={timer} onBuy={() => { change(deal.id, 1); setScreen("cart"); }} />
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter value={cat} onChange={setCat} />
          <ShopFilter value={shop} onChange={setShop} />
          <ProductList products={home} {...list} />
        </>
      )}
      {screen === "shops" && <ShopList onOpen={open} />}
      {screen === "shop" && <ShopPage name={openShop} products={PRODUCTS.filter(p => p.shop === openShop)} onBack={() => setScreen("shops")} {...list} />}
      {screen === "favs" && (
        <>
          <h2>❤️ Favorites</h2>
          <ProductList products={PRODUCTS.filter(p => favs.includes(p.id))} empty="No favorites yet. Tap 🤍 on any product." {...list} />
        </>
      )}
      {screen === "cart" && <Cart lines={lines} cart={cart} change={change} info={info} setInfo={setInfo} total={total} onPlace={place} waLink={`https://wa.me/${WHATSAPP}?text=${waText}`} />}
      {screen === "done" && order && <OrderDone order={order} onContinue={() => setScreen("home")} />}
    </div>
  );
}
