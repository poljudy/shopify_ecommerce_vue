<script setup>
import { IonIcon } from '@ionic/vue';
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { priceFormat } from '../utils';
import store from '../store';

const route = useRoute()
const productItemData = ref({})
const quantity = ref(0)

const handleQuantityButton = (type) => {
    if (type === '-') {
        quantity.value -= 1
    } else {
        quantity.value += 1
    }
}

const handleAddToCart = (itemId) => {
    store.dispatch('addProductToCart', {id: itemId, qty: quantity.value})
    Swal.fire({
        title: 'Awesome!',
        text: 'Item added to cart',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
    })
}

const itemData = computed(() => {
    return productItemData.value = { ...productItemData.value, price: priceFormat(productItemData.value.price) }
})
onMounted(async () => {
    try {
        const res = await axios.get(`https://dummyjson.com/products/${route.params.id}`)
        productItemData.value = res.data
    } catch (error) {
        console.error(`Error @productItemData: ${error}`)
    }
})
</script>
<template>
    <div class="container">
        <div class="card">
            <div class="card-content">
                <div class="content">
                    <div class="columns">
                        <div class="column is-half image-container">
                            <div class="main-image">
                                <img :src="itemData.thumbnail" :alt="itemData.title">
                            </div>
                            <div class="sub-image mt-5">
                                <div class="columns">
                                    <div v-for="image of itemData.images" class="column">
                                        <img :src="image" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-half info-container">
                            <p class="title is-3 mb-2 is-capitalized">{{ itemData.title }}</p>
                            <div class="columns pt-0 item-var">
                                <div class="column">
                                    <span class="icon" style="color: #5bc068
;">
                                        <ion-icon name="pricetag-sharp"></ion-icon>
                                    </span>
                                    <span class="icon-label subtitle is-6 has-text-weight-semibold">
                                        {{ itemData.price }}
                                    </span>
                                </div>
                                <div class="column">
                                    <span class="icon" style="color: #fcb92f
;">
                                        <ion-icon name="star"></ion-icon>
                                    </span>
                                    <span class="icon-label subtitle is-6 has-text-weight-semibold">
                                        {{ itemData.rating }}
                                    </span>
                                </div>
                                <div class="column">
                                    <span class="icon" style="color: #486def;">
                                        <ion-icon name="cube"></ion-icon>
                                    </span>
                                    <span class="icon-label subtitle is-6 has-text-weight-semibold">
                                        {{ itemData.stock }} <span class="subtitle is-7">Qty</span>
                                    </span>
                                </div>
                            </div>
                            <div class="content">
                                <p class="title mb-2 is-capitalized is-5">product description</p>
                                <div class="columns mb-0">
                                    <div class="column">
                                        <span class="has-text-weight-medium is-capitalized">brand: {{ itemData.brand
                                        }}</span>
                                    </div>
                                    <div class="column">
                                        <span class="has-text-weight-medium is-capitalized">category: {{ itemData.category
                                        }}</span>
                                    </div>
                                </div>
                                <p class="subtitle is-6">{{ itemData.description }}</p>
                            </div>
                            <div class="quantity">
                                <button @click="handleQuantityButton('-')" :disabled="quantity === 0 ? true : false"
                                    class="button">
                                    <ion-icon name="remove-sharp"></ion-icon>
                                </button>
                                <div class="control">
                                    <input v-model="quantity" class="input" type="text" placeholder="Enter quantity">
                                </div>
                                <button @click="handleQuantityButton('+')" class="button">
                                    <ion-icon name="add-sharp"></ion-icon>
                                </button>
                            </div>
                            <button @click="handleAddToCart(itemData.id)" :disabled="quantity === 0 ? true : false"
                                class="btn-cart">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    padding: 20px 0;

    .columns {
        .column {
            .main-image {
                border-bottom: 1px solid #eeee;
            }

            .sub-image {
                .column {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 3px;
                    border-right: 1px solid #eeee;
                }

                .column:nth-last-child(1) {
                    border: none;
                }
            }
        }

        .image-container {
            border-right: 1px solid #eeee;

            .main-image {
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    height: 250px;
                }
            }

            .sub-image {
                img {
                    height: 80px;
                }
            }
        }

        .info-container {
            .item-var {

                .column {
                    display: flex;
                    align-items: center;

                    .icon {
                        font-size: 20px;
                        margin-right: 3px;
                    }
                }

            }

            .quantity {
                display: flex;
            }

            .btn-cart {
                text-transform: uppercase;
                font-weight: bold;
                width: 100%;
                height: 40px;
                margin-top: 40px;
                border-radius: 5px;
                border: none;
                color: #fff;
                background: #485def;
                box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 5px 0px;
                transition: all 0.3s ease-in-out;

                &:hover {
                    background: linear-gradient(to left, #485fed, rgba(255, 44, 118, .25)), #485fed;
                }
            }

            button[disabled] {
                background: gray;
                cursor: not-allowed;

                &:hover {
                    background: gray;
                }
            }
        }
    }
}
</style>