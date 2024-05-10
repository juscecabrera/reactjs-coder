import { Item } from "../Item/Item";
import "../../main.css";

export const ItemList = ({ productsList }) => {
  return (
    <div>
      {productsList?.map((elem) => {
        return <Item key={elem.id} {...elem} />;
      })}
    </div>
  );
};