import React, { useState ,useContext} from 'react';
import CartContext from '../../context/CartContext';

import AdjustItem from '../AdjustItem';
import CurrencyFormatter from '../CurrencyFormatter';
import Drawer from '../Drawer';
import RemoveItem from '../RemoveItem';
import QuickView from '../QuickView';

import * as styles from './CartItem.module.css';
import { navigate } from 'gatsby';

const CartItem = ({ id, image, name, price, color, sizeOptions,quantity, typeOptions }) => {

  const { dispatch } = useContext(CartContext);

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: { name } });
  };

  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        role={'presentation'}
        onClick={() => navigate('/product/sample')}
      >
        <img src={image} ></img>
      </div>
      <div className={styles.itemContainer}>
        <span className={styles.name}>{name}</span>
        <div className={styles.metaContainer}>
          <span>Size: {sizeOptions}</span>
          <span>Quantity: {quantity}</span>
          <span>Type: {typeOptions}</span>

        </div>
       
      </div>
      <div className={styles.priceContainer}>
        <CurrencyFormatter amount={price} appendZero />
      </div>
      <div className={styles.removeContainer}>
      <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
