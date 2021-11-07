import Product from "../Product";
import "./menu.css";
const MenuContainer = ({ products, handleClick, filteredProducts }) => {
  return (
    <div className="produtos">
      {filteredProducts.length > 0 
        && filteredProducts.map((item, i) => (
            <Product item={item} key={i} handleClick={handleClick} />
          ))}
    </div>
  );
};
export default MenuContainer;
