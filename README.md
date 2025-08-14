# Homerun Assessment - Shopping Cart App

## Overview
This is a modern React + Vite application featuring a shopping cart system. It uses Tailwind CSS for styling and React Context for global state management. Users can browse products, add them to a cart, and see the cart count in the header.

---

## Features
- **Product Listing**: Displays a set of products with images, names, and prices.
- **Add to Cart**: Each product card has an 'Add' button that turns into a quantity counter (with increment/decrement and max 20 per item).
- **Cart Context**: Global cart state using React Context (`CartContext.jsx`).
- **Header Cart Icon**: Shows the number of items in the cart.
- **Responsive UI**: Built with Tailwind CSS for a clean, modern look.

---

## File Structure & Key Files

```
├── index.html                # Main HTML file
├── package.json              # Project metadata and dependencies
├── vite.config.js            # Vite configuration (React + Tailwind)
├── src/
│   ├── main.jsx              # App entry point, wraps App in CartProvider
│   ├── index.css             # Global styles (Tailwind + Roboto font)
│   ├── Components/
│   │   ├── Header.jsx        # Header with cart icon and count
│   │   ├── Body.jsx          # Renders product cards
│   │   └── Cards.jsx         # Product card with cart counter
│   └── utils/
│       └── CartContext.jsx   # React Context for cart state
```

---

## Component Documentation

### `src/Components/Header.jsx`
- Displays the app title and a cart icon.
- Shows the number of items in the cart using `CartContext`.

### `src/Components/Body.jsx`
- Contains the product list (`Products` array).
- Maps each product to a `Cards` component.

### `src/Components/Cards.jsx`
- Displays product details (image, name, price).
- 'Add' button turns into a counter (max 20 per item).
- Uses `addToCart` from `CartContext` to update cart.
- Shows error if user tries to exceed 20 items.

### `src/utils/CartContext.jsx`
- Provides global cart state and functions:
  - `cart`: Array of cart items.
  - `addToCart(product, quantity)`: Adds/updates item in cart.

### `src/main.jsx`
- Wraps the app in `CartProvider` for global cart access.

### `src/index.css`
- Imports Tailwind CSS and Roboto font.
- Sets global font family.

### `vite.config.js`
- Configures Vite for React and Tailwind CSS.

### `package.json`
- Lists dependencies: React, React DOM, Tailwind CSS, React Icons, Vite, ESLint.

### `index.html`
- Loads the React app at `#root`.

---

## How to Run

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start development server**:
   ```bash
   npm run dev
   ```
3. **Open** [http://localhost:5173](http://localhost:5173) in your browser.

---

## Customization & Extending
- Add more products in `Body.jsx`.
- Extend cart features in `CartContext.jsx` (remove, clear, etc).
- Style components further with Tailwind CSS.

---

## License
This project is for assessment/demo purposes.
