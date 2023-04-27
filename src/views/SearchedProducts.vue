<script setup>
import { IonIcon } from '@ionic/vue';
import { computed, onMounted, ref, watch } from 'vue';
import store from '../store'
import Item from '../components/Item.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const keyword = ref('')
const products = computed(() => store.state.searchedProducts)
const searchInput = () => {
    store.dispatch('searchProducts', keyword.value)
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) searchInput()
})
</script>
<template>
    <div class="container">
        <div class="mb-3">
            <span class="subtitle is-capitalized">search products</span>
            <p class="control has-icons-left">
                <input v-model="keyword" @change="searchInput" class="input" type="text"
                    placeholder="e.g. IPhone 15 ultra max">
                <span class="icon is-left">
                    <ion-icon name="search-sharp" aria-hidden="true"></ion-icon>
                </span>
            </p>
        </div>
        <div class="is-flex" :class="products.length > 0 ? 'is-flex-wrap-wrap' : 'is-justify-content-center mt-6'">
            <div v-if="products.length === 0" class="box">
                <p class="subtitle is-size-6">Search something... We got what you need 👌🏼</p>
            </div>
            <Item v-else v-for="product, idx of products" :key="idx" :itemData="product" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    padding: 20px 0;

    .is-flex {
        row-gap: 30px;
        column-gap: 10px;
    }
}
</style>