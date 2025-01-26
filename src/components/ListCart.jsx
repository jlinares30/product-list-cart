import styles from '../styles/ListCart.module.css';

function ListCart() {
  return (
    <div className={styles.cartListContainer}>
      <h2 className={styles.quantityTitle}>Your Cart (4)</h2>
      <ul className={styles.cartList}>
        <li className={styles.cartItem}>
            <div>
                <p className={styles.nameProduct}>Classic Tiramisu</p>
                <div className={styles.infoContainer}>
                    <div className={styles.quantity}>4x</div>
                    <div className={styles.priceUnid}>@ $7.00</div>
                    <div className={styles.price}>$28.00</div>
                </div>
            </div>
            <div>
                <button>Remove</button>
            </div>
        </li>
      </ul>
      <div className={styles.totalContainer}>
        <p className={styles.orderTotal}>Order Total</p>
        <p className={styles.totalPrice}>$46.50</p>
      </div>
      <button className={styles.confirmBtn}>Confirm Order</button>
    </div>
  );
}

export default ListCart;