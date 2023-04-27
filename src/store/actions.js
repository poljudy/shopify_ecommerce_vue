import axios from 'axios'

const searchProducts = async ({ commit }, keyword) => {
    if (keyword === '') return commit('setSearchedProducts', [])
    commit('setSearchedProducts', [])
    try {
        const res = await axios.get(`https://dummyjson.com/products/search?q=${keyword}`)
        const products = res.data.products
        commit('setSearchedProducts', products)
    } catch (error) {
        console.error(`Error @searchProducts: ${error}`)
    }
}

const searchProductsByCategory = async ({ commit }, category) => {
    commit('setCategorizedProducts', [])
    try {
        const res = await axios.get(`https://dummyjson.com/products/category/${category}`)
        const products = res.data.products
        commit('setCategorizedProducts', products)
    } catch (error) {
        console.error(`Error @searchProductsByCategory: ${error}`)
    }
}

const addProductToCart = async ({ commit }, {id, qty}) => {
    try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`)
        const product = res.data
        commit('addProductToCart', {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: qty ? qty : 1,
            thumbnail: product.thumbnail
        })
    } catch (error) {
        console.error(`Error @addProductToCart: ${error}`)
    }
}

const removeProductToCart = async ({ commit }, id, qty) => {
    try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`)
        const product = res.data
        commit('removeProductFromCart', product)
    } catch (error) {
        console.error(`Error @removeProductToCart: ${error}`)
    }
}

export {
    addProductToCart,
    removeProductToCart,
    searchProducts,
    searchProductsByCategory
}