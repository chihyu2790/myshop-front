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
            <div class="text-h4 text-weight-medium" >常見問題</div>
        </div>
        <div>
          <q-list bordered >
            <q-expansion-item
              label="分類搜索問題"
              header-class="text-h5 text-weight-medium bg-red q-py-lg"
              expand-icon-class="text-white"

            >
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              header-class="text-h5 text-weight-medium q-py-lg"
              label="網路商店訂單及相關問題"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              header-class="text-h5 text-weight-medium q-py-lg"
              label="實體門市位置及相關問題"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              header-class="text-h5 text-weight-medium"
              label="Drafts"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item label="Disabled">
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>

    </section>
  </q-page>
</template>

<script setup>
</script>
