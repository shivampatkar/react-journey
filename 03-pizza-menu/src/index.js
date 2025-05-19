import React from "react";
import ReactDom from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return <div>
    <Header />
    <Menu />
    <Footer />
  </div>
}

function Header() {
  return <h1>Fast React Pizza Company</h1>
}

function Menu() {
  return (
   <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
   </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
else alert("Sorry we're closed");
  return (
    <div>
      

      <footer>We're Currently Open</footer>
    </div>
  );
}


function Pizza() {
  return (
    <div>
      <img src="pizzas/margherita.jpg" alt="margherita pizza" />
      <h2>Pizza Mozarella</h2>
      <p>Tomato and mozarella</p>
    </div>
  );
}

// React v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// React.render(<App />);

