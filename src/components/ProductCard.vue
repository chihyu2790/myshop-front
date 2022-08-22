<template>
    <router-link :to="'/product/' + product._id">
        <q-card square flat class="product-card q-pt-sm q-pb-xl q-px-md">
            <q-img :src="product.image[0]" class="objectFit" :ratio="8 / 9"></q-img>
            <!-- style="max-height: 250px" -->

            <div class="q-my-sm">
                <q-avatar class="q-mr-xs drop-shadow" size="xs" v-for="(color, idx) in product.color" :color="color"
                    :key="idx" />
            </div>

            <!-- <div>
                    <span v-for="(size,idx) in product.size" :key="idx">
                        {{size}}
                    </span>
                </div> -->
            <!-- <q-chip v-for='(chip,ipx) in product.classify' :key='ipx'>{{chip}}</q-chip> -->
            <div class="text-h6 text-weight-regular q-mb-sm">{{ product.name }}</div>
            <div class="text-h6 text-weight-bold">NT${{ product.price }}</div>

        </q-card>
    </router-link>
</template>

<script setup>
/*eslint-disable */
import { useUserStore } from '../stores/example-store'
const user = useUserStore()
defineProps(['product'])
</script>
