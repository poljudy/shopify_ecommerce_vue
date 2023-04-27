<script setup>
import { computed, onUpdated, ref, watch } from 'vue';
import CartItem from '../components/CartItem.vue'
import store from '../store';
import CartCheckout from '../components/CartCheckout.vue';
import { priceFormat } from '../utils';

const totalPrice = ref(0)
const cartItems = computed(() => {
    const storedCartItems = store.getters.getCartItems
    let calcPrice = 0
    const cartArray = []
    for (const storedItem of storedCartItems) {
        calcPrice += storedItem.price * storedItem.quantity
        cartArray.push({ ...storedItem, price: priceFormat(storedItem.price) })
    }
    totalPrice.value = calcPrice
    return cartArray
})

</script>
<template>
    <div class="container">
        <div class="mb-3">
            <span class="subtitle is-capitalized">shopping cart</span>
        </div>
        <div v-if="cartItems.length > 0" class="columns">
            <div class="column">
                <CartItem v-for="item, idx in cartItems" :key="idx" :itemData="item" />
            </div>
            <div class="column">
                <CartCheckout :totalPrice="totalPrice" />
            </div>
        </div>
        <div v-else class="empty-label is-flex is-justify-content-center mt-6">
            <div class="box">
                <p class="subtitle is-size-6">You have no items in the cart 😱</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    padding: 20px 0;
}
</style>