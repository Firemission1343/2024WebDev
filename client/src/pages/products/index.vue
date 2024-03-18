<script setup lang="ts">
import { ref, computed } from 'vue'
import { type Product, getProducts } from "@/model/products"
import ProductCard from '@/components/ProductCard.vue';
import FlyOut from '@/components/FlyOut.vue';
import { addToCart, isOpen } from '@/viewModel/cart';
import ShoppingCart from '@/components/ShoppingCart.vue';

const products =ref([] as Product[]);

products.value = getProducts();

type CartItem = {
    product: Product;
    quantity: number;
};

const cart = ref([] as CartItem[]);

products.value = getProducts();


</script>

<template>

<div class="product-list">

    <ProductCard v-for="product in products" :key="product.id" 
                :product="product" @addToCart="addToCart"
                />
</div>

<FlyOut :isOpen="isOpen" >
    <ShoppingCart />
</FlyOut>

</template>

<style scoped>
.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card {
  flex-basis: 15rem;
  flex-grow: 1;
  margin: .5rem;
}
h3 {
   font-weight: bold;
}
.price {
    color: #00d1b2;
    font-weight: bold;
    font-size: xx-large;
    float: right;
}

.flyout{
    position: fixed;
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: -1px 0 5px rgba(0,0,0,0.1);
    z-index: 100;
    transform: translateX(80%);
    transition: transform 1s ease-in-out;
    padding: 1rem;
}

.flyout.open, .flyout:hover {
    transform: translateX(0);
}

.cart {
    list-style: none;
    padding: 0;
}

.cart img {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
}

</style>