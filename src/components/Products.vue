<script setup>
import Item from './Item.vue';
const props = defineProps({
    productsData: {
        required: true,
        type: Array
    }
})
</script>
<template>
    <div class="is-flex is-flex-wrap-wrap">
        <Item v-for="product, idx of productsData" :key="idx" :itemData="product"/>
    </div>
</template>
<style lang="scss" scoped>
.is-flex {
    row-gap: 30px;
    column-gap: 10px;
}
</style>