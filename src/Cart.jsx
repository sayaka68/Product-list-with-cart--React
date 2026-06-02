export const Cart = ({ cartItems, onDelete }) => {
  return (
    <>
      <div>
        <ul className="p-cart__cartItemsArea">
          {cartItems.map((item) => {
            const total = item.quantity * item.price;
            if (item.quantity) {
              return (
                <li key={item.id} className="p-cart__item">
                  <div className="p-cart__itemDetails">
                    <p className="p-cart__itemName">{item.name}</p>
                    <span className="p-cart__itemQuantity">
                      {item.quantity}x
                    </span>
                    <span className="p-cart__itemPrice">
                      @ {item.price.toFixed(2)}
                    </span>
                    <span className="p-cart__itemTotal">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <div className="p-cart__removeButtonArea">
                    <button
                      className="p-cart__removeButton"
                      onClick={() => onDelete(item)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M10 1.25C5.125 1.25 1.25 5.125 1.25 10C1.25 14.875 5.125 18.75 10 18.75C14.875 18.75 18.75 14.875 18.75 10C18.75 5.125 14.875 1.25 10 1.25ZM10 17.5C5.875 17.5 2.5 14.125 2.5 10C2.5 5.875 5.875 2.5 10 2.5C14.125 2.5 17.5 5.875 17.5 10C17.5 14.125 14.125 17.5 10 17.5Z"
                          fill="currentColor"
                        />
                        <path
                          d="M13.375 14.375L10 11L6.625 14.375L5.625 13.375L9 10L5.625 6.625L6.625 5.625L10 9L13.375 5.625L14.375 6.625L11 10L14.375 13.375L13.375 14.375Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};
