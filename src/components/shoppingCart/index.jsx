import "./cart.css";
const ShoppingCart = ({
  totalDaCompra,
  currentSale,
  removerItem,
  removerTudo,
}) => {
  return (
    <div className="Cart">
      <div className="Cart-info">
        <h3>Carrinho de compras</h3>
      </div>
      {currentSale.map((item) => (
        <div className="content-cart">
          <img src={item.img} alt="" className="img-cart"></img>
          <div className="itens-cart">
            <div className="iten-bt">
              <h3>{item.name}</h3>
              <button
                onClick={() => {
                  removerItem(item.name);
                }}
              >
                Remover
              </button>
            </div>
            <h4>{item.category}</h4>
          </div>
        </div>
      ))}
      <div className="finish">
        <h3> R$ {totalDaCompra}</h3>
        <button onClick={removerTudo}>Esvaziar sacola</button>
      </div>
    </div>
  );
};
export default ShoppingCart;
