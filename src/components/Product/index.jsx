import "./product.css";
const Product = ({ item, handleClick }) => {
  return (
    <div className="Card">
      <div className="img-Card">
        <img src={item.img}></img>
      </div>
      <div className="info-Card">
        <h3>{item.name}</h3>
        <p>{item.category}</p>
        <h4> R$ {item.price}</h4>
        <button
          onClick={() => {
            handleClick(item);
          }}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};
export default Product;
