import { useState } from "react";
import "./styles/style.scss";
import { products } from "./products.jsx";
import { Card } from "./Card.jsx";
import { Cart } from "./Cart.jsx";
import { ConfirmationModal } from "./confirmationModal";
import emptyCart from "./assets/images/illustration-empty-cart.svg";

function App() {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const [isOpen, setIsOpen] = useState(false);

  const handleAdd = (currentItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === currentItem.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === currentItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevItems, { ...currentItem, quantity: 1 }];
      }
    });
  };

  const handleRemove = (currentItem) => {
    setCartItems((prevItems) => {
      const targetItem = prevItems.find((item) => item.id === currentItem.id);

      if (!targetItem) return prevItems;

      return targetItem.quantity === 1
        ? prevItems.filter((item) => item.id !== currentItem.id)
        : prevItems.map((item) =>
            item.id === currentItem.id
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          );
    });

    // setCartItems((prevItems) =>
    //   currentItem.quantity === 1
    //     ? prevItems.filter((item) => item.id !== currentItem.id)
    //     : prevItems.map((item) =>
    //         item.id === currentItem.id
    //           ? { ...item, quantity: item.quantity - 1 }
    //           : item,
    //       ),
    // );
  };

  const handleDelete = (currentItem) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== currentItem.id),
    );
    console.log(cartItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleNewOrder = () => {
    setCartItems([]);
    setIsOpen(false);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const itemTotals = cartItems.map((item) => item.price * item.quantity);
  const totalPrice = itemTotals.reduce((acc, item) => acc + item, 0);

  return (
    <>
      <div className="l-container">
        <div className="l-productsArea">
          <h1>Desserts</h1>
          <div className="p-products">
            <ul id="product-list" className="p-products__list">
              {products.map((product) => {
                const cartItem = cartItems.find(
                  (item) => item.id === product.id,
                );
                return (
                  <Card
                    key={product.id}
                    product={product}
                    onAdd={handleAdd}
                    onRemove={handleRemove}
                    quantity={cartItem?.quantity ?? 0}
                  ></Card>
                );
              })}
            </ul>
          </div>
        </div>

        <div id="cart" className="p-cart">
          <h2>Your Cart ({totalItems})</h2>
          {cartItems.length === 0 && (
            <>
              <div className="p-cart__emptyPlaceholder">
                <img src={emptyCart} />
                <p>Your added items will appear here</p>
              </div>
            </>
          )}

          <Cart cartItems={cartItems} onDelete={handleDelete}></Cart>
          {cartItems.length > 0 && (
            <>
              <p className="p-cart__totalPrice">
                Order Total<span className="">${totalPrice}</span>
              </p>
              <p className="p-cart__deliveryInfo">
                <span>
                  This is a <span className="u-fw600">carbon-natural </span>
                  delivery
                </span>
              </p>
              <div id="confirmButtonArea" className="p-cart__confirmButtonArea">
                <form action="" onSubmit={handleSubmit}>
                  <button
                    className="p-cart__confirmButton  c-buttonPrimary c-buttonPrimary--rev"
                    type="submit"
                  >
                    Confirm Order
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
      <ConfirmationModal
        cartItems={cartItems}
        totalPrice={totalPrice}
        isOpen={isOpen}
        newOrder={handleNewOrder}
      ></ConfirmationModal>
    </>
  );
}

export default App;
