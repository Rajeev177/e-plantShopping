import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    removeItem,
    updateQuantity,
    addItem,
} from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
    const CartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    // Calculate total amount of all products in the cart
    const calculateTotalAmount = () => {
        return CartItems.reduce((total, item) => {
            const cost = parseFloat(item.cost.substring(1));
            return total + cost * item.quantity;
        }, 0);
    };

    // Calculate subtotal for one product
    const calculateTotalCost = (item) => {
        const cost = parseFloat(item.cost.substring(1));
        return cost * item.quantity;
    };

    // Continue shopping
    const handleContinueShopping = (e) => {
        onContinueShopping(e);
    };

    // Checkout
    const handleCheckoutShopping = (e) => {
        alert('Functionality to be added for future reference');
    };

    // Increase quantity
    const handleIncrement = (item) => {
        dispatch(
            updateQuantity({
                name: item.name,
                quantity: item.quantity + 1,
            })
        );
    };

    // Decrease quantity
    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(
                updateQuantity({
                    name: item.name,
                    quantity: item.quantity - 1,
                })
            );
        } else {
            dispatch(removeItem(item.name));
        }
    };

    // Remove item completely
    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>

            {CartItems.length === 0 ? (
                <div className="empty-cart">
                    <h2>Your cart is empty</h2>

                    <button
                        className="continue-shopping"
                        onClick={handleContinueShopping}
                    >
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {CartItems.map((item) => (
                            <div
                                className="cart-item"
                                key={item.name}
                            >
                                <img
                                    className="cart-item-image"
                                    src={item.image}
                                    alt={item.name}
                                />

                                <div className="cart-item-details">
                                    <h2>{item.name}</h2>

                                    <p>{item.cost}</p>

                                    <div className="quantity-controls">
                                        <button
                                            onClick={() =>
                                                handleDecrement(item)
                                            }
                                        >
                                            -
                                        </button>

                                        <span>
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                handleIncrement(item)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>

                                    <p>
                                        Subtotal: $
                                        {calculateTotalCost(item).toFixed(2)}
                                    </p>

                                    <button
                                        className="remove-button"
                                        onClick={() =>
                                            handleRemove(item)
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>
                            Total: $
                            {calculateTotalAmount().toFixed(2)}
                        </h2>

                        <button
                            className="continue-shopping"
                            onClick={handleContinueShopping}
                        >
                            Continue Shopping
                        </button>

                        <button
                            className="checkout-button"
                            onClick={handleCheckoutShopping}
                        >
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartItem;