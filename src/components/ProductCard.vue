<template>
    <router-link :to="'/product/' + product._id">
        <q-card flat class="product-card" >
            <q-img :src="product.image[0]" style="max-height: 250px" class="objectFit"></q-img>
            <q-card-section>
                <!-- <div class="colorbox" v-for="(color,idx) in product.color" :style="{background:color}" :key="idx">
                </div> -->
                <div>
                    <q-avatar class="q-ma-xxs" size="xs" v-for="(color,idx) in product.color" :color="color" :key="idx" />
                </div>

                <div>
                    <span v-for="(size,idx) in product.size" :key="idx">
                        {{size}}
                    </span>
                </div>
                <!-- <q-chip v-for='(chip,ipx) in product.classify' :key='ipx'>{{chip}}</q-chip> -->
                <div class="text-h6">{{ product.name }}</div>
                <div class="text-subtitle2">${{ product.price }}</div>
            </q-card-section>

            <!-- <q-card-section class="q-pt-none">
                {{ product.description }}
            </q-card-section> -->
        </q-card>
    </router-link>
</template>

<script setup>
/*eslint-disable */
import { useUserStore } from '../stores/example-store'
const user = useUserStore()
defineProps(['product'])
</script>
