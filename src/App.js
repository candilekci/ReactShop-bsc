import RouteApp from "./routes/routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/slice/productSlice";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Router>
      <RouteApp />
    </Router>
  );
}

export default App;
