import styles from '../styles/CardProduct.module.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';

function CardProduct({category, nameProduct, price, image, product}) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(product.quantity);
  const {addToCart, removeFromCart } = useContext(CartContext);
  
  const toggleAddToCart = () => {
    setIsAddedToCart(!isAddedToCart);
    addToCart(product);
    setQuantity(1);
  }
  useEffect(() => {
    console.log("Carrito actualizado:", quantity);
  }, [quantity]);


  const toggleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      removeFromCart(product.id);
  } else {
      setIsAddedToCart(false);
      removeFromCart(product.id);
  }
  }
  const togglePlus = () => {
    setQuantity(quantity + 1);
    addToCart(product);
    if (!isAddedToCart) {
      setIsAddedToCart(true);
  }
  }

  return (
    <div className={styles.cardContainer}>
        <div className={styles.productImgContainer}>
          <img className={styles.productImage} src={image} alt="Product"/>
          {!isAddedToCart ? 
          ( <button className={styles.addCartBtn} onClick={toggleAddToCart}>
            <img className={styles.svgCart} src="src/images/icon-add-to-cart.svg" alt="Product"/>
            <p>Add to Cart</p>
          </button> ) : ( 
          <button className={styles.cartUpDownBtn}>
            <div className={styles.svgUpDown} onClick={toggleMinus}>
              <img src="src/images/minus.png" alt="Add to Cart"/>
            </div>
            <p>{quantity}</p>
            <div className={styles.svgUpDown} onClick={togglePlus}>
              <img src="src/images/add.png" alt="Add to Cart"/>
            </div>
          </button>
          )}
        </div>
        <div className={styles.category}>{category}</div>
        <div className={styles.nameProduct}>{nameProduct}</div>
        <div className={`${styles.price}`}>${price.toFixed(2)}</div>
    </div>
  );
}

export default CardProduct;