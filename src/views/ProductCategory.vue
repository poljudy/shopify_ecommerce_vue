<script setup>
import { computed, watch } from 'vue';
import store from '../store';
import { useRoute, useRouter } from 'vue-router';
import Item from '../components/Item.vue';

const route = useRoute()
const router = useRouter()

const viewCategory = (category) => {
    router.push({
        name: 'ProductCategory',
        params: {
            category: category
        }
    })
}

const categories = [
    [{ title: 'electronic devices', links: ['smartphones', 'laptops'] }],
    [{ title: 'home & living', links: ['home-decoration', 'furniture', 'lighting'] }],
    [{ title: 'heath & beauty', links: ['fragrances', 'skincare'] }],
    [{ title: 'food & lifestyle', links: ['groceries'] }],
    [{ title: "women's fashion", links: ['tops', 'womens-dresses', 'womens-shoes', 'womens-watches', 'womens-bags', 'womens-jewellery', 'sunglasses'] }],
    [{ title: "mens's fashion", links: ['tops', 'mens-shirts', 'mens-shoes', 'mens-watches', 'sunglasses'] }],
    [{ title: 'automotive & motorcycles', links: ['automotive', 'motorcycle'] }],
]

const products = computed(() => store.state.categorizedProduct)
watch(() => route.params, () => {
    store.dispatch('searchProductsByCategory', route.params.category)
})
</script>
<template>
    <div class="container">
        <div class="mb-3">
            <span class="subtitle is-capitalized">products category</span>
        </div>
        <div class="is-flex is-justify-content-center category-link">
            <div v-for="(category, idx) in categories" :key="idx"
                class="navbar-item has-dropdown is-hoverable is-capitalized is-flex is-align-items-center">
                <p class="has-text-weight-semibold">
                    {{ category[0].title }}
                </p>
                <div class="navbar-dropdown">
                    <button @click="viewCategory(link)" v-for="(link, idx) in category[0].links" :key="idx"
                        class="button is-ghost is-capitalized">{{
                            link }}
                    </button>
                </div>
            </div>
        </div>
        <hr class="my-3">
        <div class="is-flex product-list" :class="products.length > 0 ? 'is-flex-wrap-wrap' : 'is-justify-content-center mt-6'">
            <div v-if="products.length === 0" class="box">
                <p class="subtitle is-size-6">Try hovering in our category 🤩</p>
            </div>
            <Item v-for="product, idx of products" :key="idx" :itemData="product" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    padding: 20px 0;

    .category-link {
        column-gap: 25px;
    }

    .product-list {
        row-gap: 30px;
        column-gap: 10px;
    }
}
</style>