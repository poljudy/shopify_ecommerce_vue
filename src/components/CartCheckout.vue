<script setup>
import { priceFormat } from '../utils';
const props = defineProps({
    totalPrice: {
        type: Number,
        required: true
    }
})
</script>
<template>
    <div class="box">
        <div class="content">
            <p class="title is-4 m-0">Your total price is: {{ priceFormat(totalPrice) }}</p>
            <hr class="">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="e.g Alex Smith">
                </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                        <ion-icon name="mail-sharp"></ion-icon>
                    </span>
                </p>
            </div>
            <div class="field">
                <label class="label">Number</label>
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                        <ion-icon name="call-sharp"></ion-icon>
                    </span>
                </p>
            </div>
        </div>
        <div class="content">
            <div class="button-group-checkout is-flex">
                <button class="button cod">
                    <p class="title is-6">Pay using COD</p>
                </button>
                <button class="button card">
                    <p class="title is-6">Pay using Credit-Card</p>
                </button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.content {

    .is-flex {
        gap: 5px;

        button {
            text-transform: uppercase;
            font-weight: bold;
            width: 100%;
            height: 40px;
            border-radius: 5px;
            border: none;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 5px 0px;
            transition: all 0.3s ease-in-out;

            p {
                color: #fff;
            }
        }

        .cod {

            background: #485def;
        }

        .card {
            background: #1384dc;
        }
    }

}
</style>