import styles from '../styles/CardProduct.module.css';

function CardProduct() {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.productImgContainer}>
          <img className={styles.productImage} src="src/images/image-waffle-desktop.jpg" alt="Product"/>
          <button className={styles.addCartBtn}>
            <img className={styles.svgCart} src="src/images/icon-add-to-cart.svg" alt="Product"/>
            <p>Add to Cart</p>
            {/* <div className={styles.svgUpDown}>
              <img src="src/images/minus.png" alt="Add to Cart"/>
            </div>
            <p>1</p>
            <div className={styles.svgUpDown}>
              <img src="src/images/add.png" alt="Add to Cart"/>
            </div> */}
          </button>
        </div>
        <div className={styles.category}>Waffle</div>
        <div className={styles.nameProduct}>Waffle with Berries</div>
        <div className={`${styles.price} text-[var(--Red)]`}>$6.50</div>
    </div>
  );
}

export default CardProduct;