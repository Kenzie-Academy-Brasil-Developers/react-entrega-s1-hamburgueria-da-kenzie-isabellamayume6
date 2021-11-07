import { useState } from "react";
import "./App.css";
import MenuContainer from "./components/MenuContainer";
import ShoppingCart from "./components/shoppingCart";
import Header from "./components/Header";
import toast, { Toaster } from "react-hot-toast";
function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 13.99,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 15.99,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 17.99,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Milk-Shake",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [currentSale, setCurrentSale] = useState([]);
  const showProducts = (item) => {
    if (item === "") {
      setFilteredProducts([...products]);
    } else {
      setFilteredProducts(
        products.filter((filter) =>
          filter.name.toLowerCase().includes(item.toLowerCase())
        )
      );
    }
  };
  function removerTudo() {
    setCurrentSale([]);
  }

  const removerItem = (item) => {
    setCurrentSale(currentSale.filter((atual) => atual.name !== item));
  };
  const handleClick = (productId) => {
    const duplicate = currentSale.filter((item) => item.id === productId.id);
    duplicate.length === 0
      ? setCurrentSale([...currentSale, productId])
      : toast.error("Item duplicado!");
  };

  const totalDaCompra = currentSale.reduce((a, b) => a + b.price, 0).toFixed(2);
  return (
    <div className="App">
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <Header showProducts={showProducts} />
      <div className="box">
        <MenuContainer
          products={products}
          handleClick={handleClick}
          filteredProducts={filteredProducts}
        />
        <ShoppingCart
          products={products}
          currentSale={currentSale}
          totalDaCompra={totalDaCompra}
          removerTudo={removerTudo}
          removerItem={removerItem}
        />
      </div>
    </div>
  );
}

export default App;
