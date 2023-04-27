const getProductQuantity = state => product => {
    const findItem = state.cartItems.find(item => item.id === product.id)
    if (findItem) return findItem
    return null
}

const getCartItems = state => {
    if (state.cartItems.length) {
        return state.cartItems
    }
    return []
}

export {
    getProductQuantity,
    getCartItems
}