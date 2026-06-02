// import { useState } from "react";

export function Card({ product, onAdd, onRemove, quantity = 0 }) {
  return (
    <li className="c-card">
      <div className="c-card__wrapper">
        <div
          className={`c-card__productImage ${quantity === 0 ? "" : "is-active"}`}
        >
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={`${import.meta.env.BASE_URL}images/${product.imagePc}`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${import.meta.env.BASE_URL}images/${product.imageTb}`}
            />
            <img
              src={`${import.meta.env.BASE_URL}images/${product.imageSp}`}
              alt={product.name}
            />
          </picture>
        </div>
        <div className="c-card__btnArea">
          {quantity === 0 ? (
            <button
              type="button"
              className="addToCartBtn c-buttonPrimary"
              onClick={() => onAdd(product)}
            >
              Add to Cart
            </button>
          ) : (
            <div className="quantityButton c-buttonPrimary c-buttonPrimary--rev ">
              <span
                className="c-minusIcon"
                onClick={() => onRemove(product)}
              ></span>
              <span className="itemQuantity">{quantity}</span>
              <span
                className="c-plusIcon"
                onClick={() => onAdd(product)}
              ></span>
            </div>
          )}
        </div>
      </div>

      <span className="c-card__productCat">{product.name}</span>
      <h2 className="c-card__productName">{product.name}</h2>
      <span className="c-card__productPrice">${product.price.toFixed(2)}</span>
    </li>
  );
}
