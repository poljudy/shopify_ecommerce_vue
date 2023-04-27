<script setup>
import { IonIcon } from '@ionic/vue';
import { useRouter } from 'vue-router'

const router = useRouter();
const goTo = (routeName) => {
    router.push({
        name: routeName
    });
};
</script>
<template>
    <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="columns">
                <div class="column is-one-quarter">
                    <div class="navbar-brand">
                        <a class="navbar-item" @click="goTo('Home')">
                            <span class="title is-2 is-capitalized">shopify</span>
                        </a>
                    </div>
                </div>
                <div class="column">
                    <div class="links">
                        <a class="navbar-item" @click="goTo('SearchedProducts')">
                            Search products
                        </a>

                        <a class="navbar-item" @click="goTo('ProductCategory')">
                            Product category
                        </a>
                    </div>
                </div>
                <div class="column is-one-third">
                    <button @click="goTo('Cart')" class="button navbar-item">
                        <span class="icon">
                            <ion-icon name="cart-sharp"></ion-icon>
                        </span>
                        <span>Cart</span>
                    </button>
                    <button class="button navbar-item">
                        <span class="icon">
                            <ion-icon name="log-in-sharp"></ion-icon>
                        </span>
                        <span>Login</span>
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>
<style lang='scss' scoped>
.navbar {
    justify-content: space-between;
    align-items: center;

    .columns {
        width: 100%;
        display: flex;
        align-items: center;

        .is-one-quarter {
            display: flex;
            align-items: center;
        }

        .is-one-quarter:nth-child(1) {
            span {
                color: #485def;
            }
        }

        .links {
            display: flex;
            justify-content: center;
        }

        .is-one-third {
            display: flex;
            gap: 5px;
            justify-content: flex-end;

            button {
                width: 7rem;
                height: 40px;
                border-radius: 5px;
                border: none;
                color: #485def;
                background: transparent;
                box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 5px 0px;
                transition: all 0.3s ease-in-out;

                &:hover {
                    background: linear-gradient(to left, #485fed, rgba(255, 44, 118, .25)), #485fed;
                    color: #fff;
                }
            }
        }
    }
}
</style>
