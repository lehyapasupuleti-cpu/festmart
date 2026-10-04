# FestMart – Smart Festival Shopping Marketplace (React + Vite)
One marketplace where local festival shops showcase products, customers discover deals, add items from different shops and send the full order on WhatsApp.

## Run
`npm install` then `npm run dev` · build: `npm run build`

## Edit
- `src/data/products.js`: WhatsApp number, festivals and dates, shops, products
- Cart and favorites are saved in localStorage

## Structure
- `src/components/`: Header, FestivalSwitcher, SearchBar, CategoryFilter, ShopFilter, TodayDeal, ProductCard, ProductList, ShopList, ShopPage, Cart, OrderForm, OrderDone, Chips
- `src/useLocalStorage.js`, `src/useDealTimer.js`: custom hooks
- `src/App.jsx`: state and screens

## Deploy
Push to GitHub, then import the repo in Vercel or Netlify (build `npm run build`, output `dist`).
