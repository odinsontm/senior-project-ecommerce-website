import axios from 'axios';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import Rating from './Rating';

function Product(props) {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const [isShown, setIsShown] = useState(false);

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      class="productCard"
    >
      <div class="productCardTitle">
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            className="card-img-prod"
            alt={product.name}
          />
        </Link>
      </div>
      <div class="productCardBody">
        <Link to={`/product/${product.slug}`}>
          <p>
            <b>{product.name}</b>
          </p>
        </Link>
        <p>${product.price}</p>
        {isShown && (
          <p>
            <Rating rating={product.rating} numReviews={product.numReviews} />
          </p>
        )}
        {product.countInStock === 0 ? (
          <button disabled>Out of Stock</button>
        ) : (
          <button onClick={() => addToCartHandler(product)}>Add To Cart</button>
        )}
        {!isShown && <p className="starholder"></p>}
      </div>
    </div>
  );
}

export default Product;
