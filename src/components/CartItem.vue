<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import store from '../store';
import { computed, onBeforeUpdate, onUpdated, ref, watch } from 'vue';
import { getProductQuantity } from '../store/getters'

const props = defineProps({
    itemData: {
        type: Object,
        required: true
    }
})
const { itemData } = props

const productQuantity = computed(() => getProductQuantity(store.state)(itemData))
const addItemQty = (itemId) => {
    store.dispatch('addProductToCart', {id: itemId})
}
const removeItemQty = (itemId) => {
    store.dispatch('removeProductToCart', itemId)
}

</script>
<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-128x128">
                        <img :src="itemData.thumbnail">
                    </figure>
                </div>
                <div class="media-content py-2">
                    <p class="title is-4">{{ itemData.title }}</p>
                    <p class="subtitle is-6">{{ itemData.price }}</p>
                    <div class="quantity">
                        <button @click="removeItemQty(itemData.id)" class="button is-small">
                            <ion-icon name="remove-sharp"></ion-icon>
                        </button>
                        <div class="control">
                            <input :value="productQuantity.quantity" readonly class="input is-small" type="text" placeholder="Enter quantity">
                        </div>
                        <button @click="addItemQty(itemData.id)" class="button is-small">
                            <ion-icon name="add-sharp"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.quantity {
    display: flex;
}
</style>