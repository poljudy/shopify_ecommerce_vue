<script setup>
import { useRouter } from 'vue-router';
import store from '../store';

const props = defineProps({
    itemData: {
        required: true,
        type: Object
    }
})
const { itemData } = props
const router = useRouter()
const viewProductDetails = () => {
    router.push({
        name: 'ProductDetails',
        params: {
            id: itemData.id
        }
    })
}

const handleAddToCart = (itemId) => {
    store.dispatch('addProductToCart', {id: itemId})
    Swal.fire({
        title: 'Awesome!',
        text: 'Item added to cart',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
    })
}
</script>
<template>
    <div class="item">
        <div class="card">
            <div @click="viewProductDetails">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img :src="itemData.thumbnail" :alt="itemData.title">
                    </figure>
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{{ itemData.title }}</p>
                            <p class="subtitle is-6">${{ itemData.price }}</p>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    {{ itemData.description }}
                </div>
            </div>
            <button @click="handleAddToCart(itemData.id)" class="is-capitalized has-text-weight-bold">add to cart</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item {
    cursor: pointer;
    width: 280px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 5px 0px;

    .card {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 100%;

        .card-image {
            .media {
                padding: 10px;
            }
        }

        .card-content {
            padding: 0px 10px;
        }

        button {
            margin-top: 10px;
            width: 100%;
            height: 40px;
            border-radius: 5px;
            border: none;
            color: #485def;
            background: transparent;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 5px 0px;
            transition: all 0.3s ease-in-out;
            cursor: pointer;

            &:hover {
                background: linear-gradient(to left, #485fed, rgba(255, 44, 118, .25)), #485fed;
                color: #fff;
            }
        }
    }

}
</style>