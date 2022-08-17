<template>
    <router-link :to="'/product/' + product._id">
        <q-card square flat class="product-card q-pt-sm q-pb-xl q-px-md" >
            <q-img :src="product.image[0]"  class="objectFit" :ratio="5/4"></q-img>
            <!-- style="max-height: 250px" -->

                <div class="q-mt-sm">
                    <q-avatar class="q-mr-xxs" size="xs" v-for="(color,idx) in product.color" :color="color" :key="idx" />
                </div>

                <!-- <div>
                    <span v-for="(size,idx) in product.size" :key="idx">
                        {{size}}
                    </span>
                </div> -->
                <!-- <q-chip v-for='(chip,ipx) in product.classify' :key='ipx'>{{chip}}</q-chip> -->
                <div class="text-subtitle1">{{ product.name }}</div>
                <div class="text-subtitle2 text-weight-medium">NT${{ product.price }}</div>

        </q-card>
    </router-link>
</template>

<script setup>
/*eslint-disable */
import { useUserStore } from '../stores/example-store'
const user = useUserStore()
defineProps(['product'])
</script>
