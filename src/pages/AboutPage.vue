<template>
    <q-page class="q-mb-xxxl">
        <!-- tabs -->
        <!-- tabs -->
        <!-- tabs -->
        <div class="row lt-lg justify-center border-black bg-grey-2 q-py-xs">
            <q-tabs indicator-color="red" shrink>
                <q-route-tab exact name='/about' to='/about' label="關於我們" />
                <q-route-tab exact name='/problem' to='/problem' label="常見問題" />
                <q-route-tab exact name='/store' to='/store' label="店鋪一覽" />
            </q-tabs>
        </div>
        <!-- tabs -->
        <!-- tabs -->
        <!-- tabs -->
        <section class="container">
            <div class="row q-mt-none q-mt-lg-xl">
                <div class="col-2 gt-md col-lg-2">
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
                    <q-card flat bordered class="q-pa-md  row justify-center">
                        <q-img class="q-mb-lg" src="https://i.imgur.com/RkEzWlx.jpg" :ratio="4 / 2">
                            <div
                                class="absolute-center text-white row items-center justify-center transparent-background">
                                <div class="text-h2 text-weight-medium ">STYING TAIWAN</div>
                            </div>
                        </q-img>
                        <div class="col-12 text-center">
                            <div class=" text-h4 text-weight-regular q-mt-sm">品牌介紹</div>
                            <q-separator class="q-my-lg" />
                            <div class="q-px-xl">
                                <div class="text-h6 q-px-xl text-weight-regular text-left q-mb-lg">
                                    提供人在生活中加上「STYLE」，創造出屬於自己風格的一種幸福感。</div>
                                <div class="text-h6 q-px-xl text-weight-regular text-left q-mb-lg">來自日本服飾集團旗下的品牌。以「THE
                                    LIFE
                                    FASHION」為概念，融合日常元素的簡約風格設計，提供適合各種場合的穿搭提案，滿足對時尚敏感的你。</div>
                                <div class="text-h6 q-px-xl text-weight-regular text-left q-mb-xl">
                                    在日常與時尚「相遇」，和自己的生活「互相結合」，每一刻都能享受時尚，愉快地挑選舒適且極具巧思的穿搭。</div>
                            </div>
                        </div>
                        <div class="col-12 row q-px-xl q-mb-lg">
                            <div class="col-8">
                                <q-img src="https://i.imgur.com/Nk6N08y.png" :ratio="5 / 3">
                                    <div class="absolute-center text-white  transparent-background">
                                        <!-- <q-btn class="text-h3 q-mt-lg text-weight-regular " unelevated outline
                                            label="D A I L Y L I F E" padding="xs" /> -->
                                        <!-- <div class="text-h4 text-weight-medium ">D A I L Y L I F E</div> -->
                                        <div class="circle-border border-white box-300 row items-center justify-center">
                                            <span class="text-h6 text-weight-medium">D A I L Y L I F E</span>

                                        </div>
                                    </div>
                                </q-img>
                            </div>
                            <div class="col-4 column justify-center q-pl-md">
                                <div class="text-body1 text-grey-6">Based on the concept of “THE LIFE
                                    FASHION” ,we expresses the
                                    idea of fashion life style and fun coordination, by adding personal touch into a
                                    wide range of chic garments and trendy accessories.</div>
                            </div>
                        </div>
                        <div class="col-12 text-center">
                            <div class=" text-h4 text-weight-regular q-mt-md">品牌介紹</div>
                            <div class="q-px-xl">
                                <q-separator class="q-my-lg" />
                                <div class="text-h6 q-px-xl text-weight-regular text-left q-mb-lg ">
                                    強調在休閒舒適的格局中，以平價商品為中心，將日常生活中的衣服，加上流行元素，以基本剪裁為重點要件。
                                </div>
                                <div class="text-h6 q-px-xl text-weight-regular text-left q-mb-lg">
                                    推出適時合宜的服飾，在時尚與價格中提供顧客最符合當今潮流的時尚穿搭。</div>
                                <div class="text-h6 q-px-xl text-weight-regular text-left q-mb-xl">
                                    我們所秉持的理念在於流行不僅屬於某一部份族群，而是要推廣到大眾的日常生活中，從時尚和自我創造的過程裡，獲得更大的滿足與快樂。</div>
                            </div>
                        </div>
                    </q-card>
                </div>
            </div>
        </section>
    </q-page>
</template>

<script setup>
</script>
