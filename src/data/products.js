export const WHATSAPP = "919999999999"; // <- shop owner number (country code + number, no +)

export const FESTIVALS = {
  Dasara: { emoji: "🏹", date: "2026-10-20", grad: "linear-gradient(135deg,#e8590c,#c92a2a)", line: "Victory of good over evil – up to 40% OFF" },
  Diwali: { emoji: "🪔", date: "2026-11-08", grad: "linear-gradient(135deg,#f59f00,#d9480f)", line: "Festival of lights – up to 50% OFF" },
  Christmas: { emoji: "🎄", date: "2026-12-25", grad: "linear-gradient(135deg,#2b8a3e,#c92a2a)", line: "Merry deals for the whole family – up to 35% OFF" },
  Sankranti: { emoji: "🪁", date: "2027-01-14", grad: "linear-gradient(135deg,#1c7ed6,#f59f00)", line: "Kites, sweets and rangoli – up to 30% OFF" },
};
export const CATS = ["All", "Kids", "Women", "Men", "Flowers", "Crackers", "Sweets", "Gifts"];
export const SHOPS = [
  { name: "Lakshmi Crackers", emoji: "🎆", about: "Safe, branded crackers and combo packs.", deal: "Combo packs from ₹299" },
  { name: "Sri Gifts", emoji: "🎁", about: "Gift combos, diyas, decor and rangoli.", deal: "Free gift wrap on all combos" },
  { name: "Trendy Fashions", emoji: "👗", about: "Festive wear for women and men.", deal: "Flat 30% on festive wear" },
  { name: "Kids Kingdom", emoji: "🧸", about: "Toys and festive dresses for kids.", deal: "Free gift wrap on toys" },
  { name: "Sweet House", emoji: "🍬", about: "Fresh sweets, cakes and festival specials.", deal: "Free box on orders above ₹500" },
  { name: "Bloom Garden", emoji: "💐", about: "Fresh flowers, garlands and plants.", deal: "Free delivery above ₹500" },
];
const P = (id, name, cat, emoji, price, off, shop, fest, deal = false) => ({ id, name, cat, emoji, price, off, shop, fest, deal });
const FS = ["Dasara", "Diwali", "Sankranti"];
export const PRODUCTS = [
  P(1, "Silk Saree", "Women", "🥻", 2499, 30, "Trendy Fashions", FS),
  P(2, "Kurti Set", "Women", "👚", 899, 25, "Trendy Fashions", ["all"]),
  P(3, "Men's Kurta", "Men", "👔", 1299, 30, "Trendy Fashions", FS),
  P(4, "Party Blazer", "Men", "🧥", 2999, 25, "Trendy Fashions", ["Christmas"]),
  P(5, "Kids Ethnic Dress", "Kids", "👧", 799, 35, "Kids Kingdom", FS),
  P(6, "Toy Car Set", "Kids", "🚗", 499, 40, "Kids Kingdom", ["all"]),
  P(7, "Santa Costume", "Kids", "🎅", 699, 30, "Kids Kingdom", ["Christmas"]),
  P(8, "Kite Combo", "Kids", "🪁", 199, 25, "Kids Kingdom", ["Sankranti"]),
  P(9, "Marigold Garland", "Flowers", "🌼", 120, 15, "Bloom Garden", FS),
  P(10, "Rose Bouquet", "Flowers", "💐", 450, 20, "Bloom Garden", ["all"]),
  P(11, "Poinsettia Plant", "Flowers", "🌺", 350, 20, "Bloom Garden", ["Christmas"]),
  P(12, "Sparklers Pack", "Crackers", "✨", 199, 40, "Lakshmi Crackers", ["Diwali"]),
  P(13, "Flower Pots Combo", "Crackers", "🎇", 399, 50, "Lakshmi Crackers", ["Diwali"]),
  P(14, "Rockets Pack", "Crackers", "🚀", 349, 35, "Lakshmi Crackers", ["Diwali"]),
  P(15, "Diya Set (12)", "Gifts", "🪔", 249, 35, "Sri Gifts", ["Diwali", "Dasara"]),
  P(16, "Rangoli Colours", "Gifts", "🎨", 149, 20, "Sri Gifts", FS),
  P(17, "Christmas Tree", "Gifts", "🎄", 1199, 30, "Sri Gifts", ["Christmas"]),
  P(18, "Plum Cake Box", "Sweets", "🍰", 599, 25, "Sweet House", ["Christmas"]),
  P(19, "Mixed Sweets Box", "Sweets", "🍬", 699, 30, "Sweet House", FS),
  P(20, "Sankranti Sweets", "Sweets", "🍘", 349, 20, "Sweet House", ["Sankranti"]),
  P(21, "Diwali Gift Combo", "Gifts", "🎁", 1499, 30, "Sri Gifts", ["Diwali"], true),
  P(22, "Dasara Pooja Combo", "Gifts", "🪔", 999, 25, "Sri Gifts", ["Dasara"], true),
  P(23, "Sankranti Festive Combo", "Gifts", "🪁", 899, 30, "Sri Gifts", ["Sankranti"], true),
  P(24, "Christmas Gift Combo", "Gifts", "🎅", 1299, 30, "Sri Gifts", ["Christmas"], true),
];
export const finalPrice = p => Math.round(p.price * (100 - p.off) / 100);
export const daysLeft = d => Math.max(0, Math.ceil((new Date(d) - new Date()) / 864e5));
