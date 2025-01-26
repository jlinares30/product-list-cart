import styles from '../styles/ModalOrderCard.module.css';

function ModalOrderCard(){
    return (
        <div className={styles.modalContainer}>
            <img className={styles.svgSuccess} src="src/images/icon-order-confirmed.svg" alt="icon confirmed" />
            <h1 className={styles.confirmTitle}>Order Confirmed</h1>
            <p className={styles.descriptionConfirm}>We hope you enjoy it!</p>
            <div className={styles.listContainer}>
                <ul className={styles.cartList}>
                    <li className={styles.cartItem}>
                        <div className={styles.productContainer}>
                            <img className={styles.imageProduct} src="src/images/image-waffle-thumbnail.jpg" alt="image product" />
                            <div>
                                <p className={styles.nameProduct}>Classic Tiramisu</p>
                                <div className={styles.infoContainer}>
                                    <div className={styles.quantity}>4x</div>
                                    <div className={styles.priceUnid}>@ $7.00</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.price}>$28.00</div>
                        <hr className={styles.divider} />
                    </li>
                </ul>
                <div className={styles.totalContainer}>
                    <p className={styles.orderTotal}>Order Total</p>
                    <p className={styles.totalPrice}>$46.50</p>
                </div>
            </div>
            <button className={styles.confirmBtn}>Start New Order</button>
        </div>
    )
}

export default ModalOrderCard;