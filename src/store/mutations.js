const setSearchedProducts = (state, products) => {
    state.searchedProducts = products
}

const setCategorizedProducts = (state, products) => {
    state.categorizedProduct = products
}

const addProductToCart = (state, product) => {
    const storedCartItems = localStorage.getItem('cartItems')
    if (storedCartItems) {
        state.cartItems = JSON.parse(storedCartItems)
    }

    const findItem = state.cartItems.find(item => item.id === product.id)
    if (findItem) {
        findItem.quantity++
    } else {
        state.cartItems.push(product)
    }

    localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
}

const removeProductFromCart = (state, product) => {
    const findItem = state.cartItems.find(item => item.id === product.id)
    if (findItem) {
        if (findItem.quantity > 1) {
            findItem.quantity--
        } else {
            state.cartItems = state.cartItems.filter(item => item.id !== product.id)
        }
    }
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
}

export {
    addProductToCart,
    removeProductFromCart,
    setSearchedProducts,
    setCategorizedProducts
}