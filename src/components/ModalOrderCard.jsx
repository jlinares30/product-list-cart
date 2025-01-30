import styles from '../styles/ModalOrderCard.module.css';
import { CartContext } from '../context/CartContext';
import { useState, useContext } from 'react';

function ModalOrderCard(){
    const {cart, toggleCheckoutModal, totalPrice} = useContext(CartContext);

    const handleOverlayClick = (event) => {
        if (event.target.classList.contains(styles.modalBG)) {
            toggleCheckoutModal();
        }
    };

    return (
        <div className={styles.modalBG} onClick={handleOverlayClick}>
            <div className={styles.modalContainer}>
                <img className={styles.svgSuccess} src="src/images/icon-order-confirmed.svg" alt="icon confirmed" />
                <h1 className={styles.confirmTitle}>Order Confirmed</h1>
                <p className={styles.descriptionConfirm}>We hope you enjoy it!</p>
                <div className={styles.listContainer}>
                    <ul className={styles.cartList}>
                        {cart.map((product)=>(
                            <li className={styles.cartItem}>
                                <div className={styles.productContainer}>
                                    <img className={styles.imageProduct} src={product.image.thumbnail} alt="image product" />
                                    <div>
                                        <p className={styles.nameProduct}>{product.name}</p>
                                        <div className={styles.infoContainer}>
                                            <div className={styles.quantity}>{product.quantity}x</div>
                                            <div className={styles.priceUnid}>@ ${product.price.toFixed(2)}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.price}>${(product.quantity*product.price).toFixed(2)}</div>
                                <hr className={styles.divider} />
                            </li>
                        ))}

                    </ul>
                    <div className={styles.totalContainer}>
                        <p className={styles.orderTotal}>Order Total</p>
                        <p className={styles.totalPrice}>${totalPrice.toFixed(2)}</p>
                    </div>
                </div>
                <button className={styles.confirmBtn}>Start New Order</button>
            </div>
        </div>
    )
}

export default ModalOrderCard;