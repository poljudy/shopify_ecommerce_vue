<script setup>
import { onMounted, reactive, toRefs } from 'vue';
import axios from 'axios'
import Products from '../components/Products.vue'


const state = reactive({
    products: []
})
const { products } = toRefs(state)
onMounted(async () => {
    try {
        const res = await axios.get('https://dummyjson.com/products')
        state.products = res.data.products
    } catch (error) {
        console.error(`Error: ${error}`)
    }
})
</script>
<template>
    <div class="container">
        <div class="mb-3">
            <span class="subtitle is-capitalized">featured products</span>
        </div>
        <Products :productsData="products" />
    </div>
</template>
<style lang="scss" scoped>
.container {
    padding: 20px 0;
}
</style>