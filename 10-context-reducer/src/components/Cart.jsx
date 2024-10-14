import { useContext } from 'react'
import { CartContext } from '../store/shopping-cart-context.jsx'
export default function Cart() {
    const { items, updateCartItemQuantity } = useContext(CartContext)

    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )
    const formattedTotalPrice = `$${totalPrice.toFixed(2)}`

    const addItemButton = (item) => (
        <button onClick={() => updateCartItemQuantity(item.id, 1)}>+</button>
    )
    const subtractItemButton = (item) => (
        <button onClick={() => updateCartItemQuantity(item.id, -1)}>-</button>
    )

    const renderItemsList = items.map((item) => {
        const formattedPrice = `$${item.price.toFixed(2)}`

        return (
            <li key={item.id}>
                <div>
                    <span>{item.name}</span>
                    <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                    {subtractItemButton(item)}
                    <span>{item.quantity}</span>
                    {addItemButton(item)}
                </div>
            </li>
        )
    })
    return (
        <div id="cart">
            {items.length > 0 ? (
                <ul id="cart-items">{renderItemsList}</ul>
            ) : (
                <p>No items in cart!</p>
            )}
            <p id="cart-total-price">
                Cart Total: <strong>{formattedTotalPrice}</strong>
            </p>
        </div>
    )
}
