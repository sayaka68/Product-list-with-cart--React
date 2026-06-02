export function ConfirmationModal({ cartItems, totalPrice, isOpen, newOrder }) {
  return (
    isOpen && (
      <>
        <div className="p-confirmationModal" id="confirmationModal">
          <div className="p-confirmationModal__messages">
            <h2>
              Order <br className="u-hiddenTb" />
              Confirmed
            </h2>
            <p>We hope you enjoy your food!</p>
          </div>
          <div className="p-confirmationModal__itemsArea">
            <ul id="product-list">
              {cartItems.map((item) => {
                return (
                  <li className="c-modalItem" key={item.id}>
                    <img
                      className="c-modalItem__img"
                      src={`${import.meta.env.BASE_URL}images/${item.imageTb}`}
                      alt={item.name}
                    ></img>
                    <div className="c-modalItem__itemDetails">
                      <p className="c-modalItem__itemName">{item.name}</p>
                      <span className="c-modalItem__itemQuantity">
                        {item.quantity}x
                      </span>
                      <span className="c-modalItem__itemPrice">
                        @ ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <span className="c-modalItem__itemTotal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="p-confirmationModal__totalPrice">
              Order Total: <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <div className="p-confirmationModal__newOderButtonArea">
            <button
              className="newOderButton c-buttonPrimary c-buttonPrimary--rev"
              onClick={newOrder}
            >
              Start New Order
            </button>
          </div>
        </div>
      </>
    )
  );
}
