<template>
    <q-page>
        <div class="row lt-lg justify-center border-black bg-grey-2 q-py-xs">
            <q-tabs indicator-color="red" shrink>
                <q-route-tab exact name='/about' to='/about' label="關於我們" />
                <q-route-tab exact name='/problem' to='/problem' label="常見問題" />
                <q-route-tab exact name='/store' to='/store' label="店鋪一覽" />
            </q-tabs>
        </div>
        <section class="container">
            <div class="row q-mt-none q-mt-lg-xl">
                <div class="col-2 gt-lg col-lg-2">
                    <router-link :to="'/about'">
                        <div class="text-subtitle1 q-my-lg">關於我們</div>
                    </router-link>
                    <router-link :to="'/problem'">
                        <div class="text-subtitle1 q-my-lg">常見問題</div>
                    </router-link>
                    <router-link :to="'/store'">
                        <div class="text-subtitle1 q-my-lg">店鋪一覽</div>
                    </router-link>
                </div>
                <div class="col-12 col-lg-10">
                    <div class="flex items-center text-center q-mb-xl q-mb-lg-lg q-mt-lg q-mt-lg-none">
                        <div class="text-h4 text-weight-medium">關於我們</div>
                    </div>
                </div>
            </div>
        </section>
    </q-page>
</template>

<script setup>
</script>
