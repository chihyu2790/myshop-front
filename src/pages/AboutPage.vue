<template>
    <q-page>
        <section class="container">
            <div class="row q-mt-xl">
                <div class="col-2" >
                    <router-link :to="'/about'"><div class="text-subtitle1 q-my-lg">關於我們</div></router-link>
                    <router-link :to="'/'"><div class="text-subtitle1 q-my-lg">常見問題</div></router-link>
                    <router-link :to="'/store'"><div class="text-subtitle1 q-my-lg">店鋪一覽</div></router-link>
                </div>
                <div class="col-10">
                    <div class="flex items-center text-center q-mb-lg">
                        <div class="text-h4 text-weight-medium" >關於我們</div>
                    </div>
                </div>
            </div>
        </section>
    </q-page>
</template>

<script setup>
</script>
