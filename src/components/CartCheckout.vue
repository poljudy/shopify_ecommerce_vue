<script setup>
import { priceFormat } from '../utils';
const props = defineProps({
    totalPrice: {
        type: Number,
        required: true
    }
})

const handleCheckout = () => {
    Swal.fire({
        title: 'Confirm checkout!',
        text: "Are you sure you want to proceed?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title:'Success!',
                text:'Thank you for buying!',
                icon:'success',
                showConfirmButton: false,
                timer: 2000
            })
        }
    })
}
</script>
<template>
    <form @submit.prevent="handleCheckout">
        <div class="box">
            <div class="content">
                <p class="title is-4 m-0">Your total price is: {{ priceFormat(totalPrice) }}</p>
                <hr class="">
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input required class="input" type="text" placeholder="e.g Alex Smith">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Email</label>
                    <p class="control has-icons-left has-icons-right">
                        <input required class="input" type="email" placeholder="Email">
                        <span class="icon is-small is-left">
                            <ion-icon name="mail-sharp"></ion-icon>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label">Number</label>
                    <p class="control has-icons-left has-icons-right">
                        <input required class="input" type="text" placeholder="Number">
                        <span class="icon is-small is-left">
                            <ion-icon name="call-sharp"></ion-icon>
                        </span>
                    </p>
                </div>
            </div>
            <div class="content">
                <div class="button-group-checkout is-flex">
                    <button type="submit" class="button cod">
                        <p class="title is-6">Pay using COD</p>
                    </button>
                    <button type="button" class="button card">
                        <p class="title is-6">Pay using Credit-Card</p>
                    </button>
                </div>
            </div>
        </div>
    </form>
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