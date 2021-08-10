import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { allProducts } from "./redux/actions/products";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <div>
      <h3 className="text-center">E-Commerce App</h3>
    </div>
  );
};

export default App;
