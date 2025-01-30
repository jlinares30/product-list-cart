import styles from '../styles/ListCart.module.css';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

function ListCart() {
  const {cart, removeAllFromCart, toggleCheckoutModal, totalPrice } = useContext(CartContext);


  const toggleRemove = (id) => {
    removeAllFromCart(id);
  }

  return (
    <div className={styles.cartListContainer}>
      <h2 className={styles.quantityTitle}>Your Cart ({cart.length})</h2>
      {cart.length !== 0 ?(
      <>
      <ul className={styles.cartList}>
        {cart.map((product) => (
          <li className={styles.cartItem}>
            <div>
                <p className={styles.nameProduct}>{product.name}</p>
                <div className={styles.infoContainer}>
                    <div className={styles.quantity}>{product.quantity}x</div>
                    <div className={styles.priceUnid}>@ ${product.price.toFixed(2)}</div>
                    <div className={styles.price}>${(product.quantity*product.price).toFixed(2)}</div>
                </div>
            </div>
            <div className={styles.removeBtn} onClick={()=>toggleRemove(product.id)}>
                <img className={styles.svgRemove} src="src/images/icon-remove-item.svg" alt="icon remove" />
            </div>
            <hr className={styles.divider} /> 
          </li>
        ))}
      </ul>
      <div className={styles.totalContainer}>
        <p className={styles.orderTotal}>Order Total</p>
        <p className={styles.totalPrice}>${totalPrice.toFixed(2)}</p>
      </div>
      <button className={styles.confirmBtn} onClick={toggleCheckoutModal}>Confirm Order</button>
      </>) :
        (<div className={styles.emptyCart}>
          <img className={styles.imageEmptyCart} src="src/images/illustration-empty-cart.svg" alt="empty cart image" />
          <h3 className={styles.emptyTitle}>Your added items will appear here</h3>
        </div>)}
    
    </div>
  );
}

export default ListCart;