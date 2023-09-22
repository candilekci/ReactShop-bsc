import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Star from "../../assets/Icons/Star.svg";
import "./detail.css";
const ProductDetail = () => {
  const productId = useParams();
  const products = useSelector((state) => state.products.products);
  const [product, setProduct] = useState(null);

  const [counter, setCounter] = useState(1);

  const counterHandler = (e) => {
    if (e.target.innerText === "+") {
      setCounter(counter + 1);
    } else if (e.target.innerText === "-") {
      setCounter(counter - 1);
    }
  };
  useEffect(() => {
    const FindProduct = async () => {
      try {
        const foundProduct = products.find(
          (product) => product.id === parseInt(productId.productId)
        );
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error("Ürün bulunamadı.");
        }
      } catch (error) {
        console.error("Ürünü getirirken bir hata oluştu:", error);
      }
    };

    FindProduct();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="product-container">
        <img src={product.image} alt="productImage" className="product-img" />
        <div className="product-detail-info">
          <div>
            <p className="product-title">{product.title}</p>
            <p className="product-category">
              {product.category.charAt(0).toUpperCase() +
                product.category.slice(1)}
            </p>

            <div className="price-rate  row-container">
              <p className="product-detail-price">{product.price} TL</p>
              <div className="  row-container">
                <p className="product-rate">{product.rating.rate}</p>
                <img src={Star} alt="star" className="product-rate-icon" />
              </div>
            </div>
            <p className="product-count">
              {product.rating.count} Değerlendirme
            </p>
            <p className="product-description">{product.description}</p>
          </div>
          <div className="add-container">
            <div className="counter-container">
              <button
                onClick={counterHandler}
                disabled={counter === 1}
                className="counter-button"
              >
                -
              </button>
              <input
                type="text"
                className="add-product-input"
                value={counter}
                onChange={(e) => setCounter(e.target.value)}
              />
              <button onClick={counterHandler} className="counter-button">
                +
              </button>
            </div>
            <button className="add-product-btn">Sepete Ekle</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
