<template>
  <q-page id="problemPage" class="q-mb-xxxl">
    <div class="row lt-lg justify-center border-black bg-grey-2 q-py-xs">
      <q-tabs indicator-color="red" shrink>
        <q-route-tab exact name='/about' to='/about' label="關於我們" />
        <q-route-tab exact name='/problem' to='/problem' label="常見問題" />
        <q-route-tab exact name='/store' to='/store' label="店鋪一覽" />
      </q-tabs>
    </div>
    <section class="container">
      <div class="row q-mt-none q-mt-lg-xl">
        <div class="col-12 gt-md col-lg-2">
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
            <div class="text-h4 text-weight-medium">常見問題</div>
          </div>
          <div>
            <q-list bordered>
              <!-- <q-expansion-item label="分類搜索問題" header-class="text-h5 text-weight-medium bg-grey-2 q-py-lg"
                expand-icon-class="text-white">
              </q-expansion-item> -->
              <q-expansion-item expand-separator header-class="text-h5 text-weight-medium q-py-lg bg-grey-1"
                label="網路會員常見問題">
                <q-card>
                  <q-card-section class="text-grey-9 q-py-xl">
                    <div class="text-h6 text-weight-regular">Q1. 該如何加入會員呢？</div>
                    <div class="text-body1 text-weight-thin  ">
                      請您點選右上角會員圖示，進入後點選註冊按鈕，填寫必要資料後加入成為會員。
                    </div>
                    <q-separator class="q-my-xl" />
                    <div class="text-h6 text-weight-regular">Q2. 忘記登入的會員帳號？</div>
                    <div class="text-body1 text-weight-thin ">
                      煩請直接與客服中心聯繫。
                    </div>
                    <q-separator class="q-my-xl" />

                    <div class="text-h6 text-weight-regular">Q3. 該如何修改個人資料及信箱？</div>
                    <div class="text-body1 text-weight-thin ">
                      電腦版：請會員點選右上角會員圖示，並登入個人帳號，至「個人資料」即可進行變更個人資料及信箱。
                    </div>
                    <q-separator class="q-my-xl" />
                    <div class="text-h6 text-weight-regular">Q4. 如何透過「線上客服」聯繫？</div>
                    <div class="text-body1 text-weight-thin">
                      請於上班時間至網頁最底部，撥打「客服電話」即可進行諮詢。
                    </div>
                    <div class="text-body1 text-weight-thin ">
                      上班時間09:30-18:00(例假日暫不提供服務)
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item expand-separator header-class="text-h5 text-weight-medium q-py-lg bg-grey-2"
                label="購物常見問題">
                <q-card>
                  <q-card-section class="text-grey-9 q-py-xl">
                    <div class="text-h6 text-weight-regular">Q1. 購物流程說明</div>
                    <div class="text-body1 text-weight-thin">
                      提供您簡單的購物流程，親切易懂的指引式流程畫面，讓您充分享受便利的購物樂趣。
                    </div>
                    <div class="text-body1 text-weight-thin  ">
                      第一次購物：註冊帳號＞＞選擇商品＞＞加入購物車＞＞前往結帳＞＞填寫收件資訊＞＞完成購物
                    </div>
                    <q-separator class="q-my-xl" />
                    <div class="text-h6 text-weight-regular">Q2. 目前提供哪些送貨方式？</div>
                    <div class="text-body1 text-weight-thin">
                      1. 『超商取貨付款』
                    </div>
                    <div class="text-body1 text-weight-thin q-mb-sm">
                      2. 宅配貨到付款（限台灣本島）
                    </div>
                    <div class="text-body1 text-weight-regular text-red">
                      ※ 配合的宅配公司為：黑貓宅急便
                    </div>
                    <q-separator class="q-my-xl" />
                    <div class="text-h6 text-weight-regular">Q3. 如何查詢訂單的情況？</div>
                    <div class="text-body1 text-weight-thin ">
                      請您先「會員登入」後至「訂單查詢」，即可查詢訂單的狀態。
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item expand-separator header-class="text-h5 text-weight-medium q-py-lg bg-grey-1"
                label="配送取貨常見問題">
                <q-card>
                  <q-card-section class="text-grey-9 q-py-xl">
                    <div class="text-h6 text-weight-regular">Q1. 請問運費如何計算？</div>
                    <div class="text-body1 text-weight-thin">
                      以下為常態免運費標準，實際請依官網行銷活動公告為依據 (訂單金額無法合併計算)。
                    </div>
                    <div class="text-body1 text-weight-thin  ">
                      『超商取貨付款』，單筆購物滿1500元，即享有免運費優惠；未達免運條件，將酌收80元物流費。
                    </div>
                    <q-separator class="q-my-xl" />
                    <div class="text-h6 text-weight-regular">Q2. 台灣外島地區可以寄送嗎？</div>
                    <div class="text-body1 text-weight-thin ">
                      您可以選擇『超商取貨付款』；若您採信用卡方式付款，將以郵局海運配送，預計3-7日內配達，而送達時間會因天氣狀況、船隻班次而有變動的可能性。
                    </div>
                    <q-separator class="q-my-xl" />
                    <div class="text-h6 text-weight-regular">Q3. 訂購商品後需幾天的時間才可以收到商品呢？</div>
                    <div class="text-body1 text-weight-thin">
                      常態的出貨時間為：今天下單，明天取貨。
                    </div>
                    <div class="text-body1 text-weight-thin ">
                      但請務必注意：週日及例假日不出貨，超過每日截止時間的訂單要多等一天。
                    </div>
                    <q-separator class="q-my-xl" />
                    <div class="text-h6 text-weight-regular">Q4. 如何至門市取貨？</div>
                    <div class="text-body1 text-weight-thin">
                      待收到「貨到門市通知函」或簡訊後，請至您所指定之門市取貨並告知店員您的姓名且核對包裹姓名是否正確，並支付訂購商品金額即可，若您不克前往領取，建議您可請家人或朋友代領亦可。
                    </div>
                    <div class="text-body1 text-weight-thin ">
                      商品送達門市日起算7日內，請務必完成取件喔！(如：商品於10/1送達門市，請於10/8 23:59前完成取件，逾期則退回物流中心。)
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item expand-separator header-class="text-h5 text-weight-medium q-py-lg bg-grey-2"
                label="發票常見問題">
                <q-card>
                  <q-card-section class="text-grey-9 q-py-xl">
                    <div class="text-h6 text-weight-regular">Q1. 什麼是「電子發票」？商品收到了，發票怎麼沒一起附上？</div>
                    <div class="text-body1 text-weight-thin">
                      根據財政部令「電子發票實施作業要點」，於消費開立之「二聯電子發票」、「三聯電子發票」，不主動寄送，會將發票號碼上傳至政府平台。
                    </div>
                    <div class="text-body1 text-weight-thin  ">
                      目前消費開立之「三聯電子發票」為會員載具，尚未開放共通性載具選項。
                    </div>
                    <q-separator class="q-my-xl" />
                    <div class="text-h6 text-weight-regular">Q2. 使用電子發票，會有人通知我中獎嗎？電子發票如何兌領獎？</div>
                    <div class="text-body1 text-weight-thin">
                      「二聯式電子發票」每逢單月26日將由財政部自動對獎（已索取紙本／已捐贈／已作廢發票除外），並於單月28日產生中獎清冊供營業人下載索取。
                    </div>
                    <q-separator class="q-my-xl" />
                    <div class="text-h6 text-weight-regular">Q3. 發票可以指定日期或開立其它品名嗎？</div>
                    <div class="text-body1 text-weight-thin ">
                      因發票採用系統化自動開立，因此發票上的品名將依實際訂購的商品名稱開立，請恕無法指定開立其它品名或指定開立日期。
                    </div>
                    <q-separator class="q-my-xl" />
                    <div class="text-h6 text-weight-regular">Q4. 購物發票，是否可開立為多張發票？</div>
                    <div class="text-body1 text-weight-thin ">
                      因發票採用系統化自動開立，故一筆訂單對應一張發票，請恕無法分別開立多張。如有分別開立需求，請將商品分別下單。
                    </div>
                    <q-separator class="q-my-xl" />
                    <div class="text-h6 text-weight-regular">Q5. 沒有紙本發票，如何捐贈發票給受捐贈機關或團體？</div>
                    <div class="text-body1 text-weight-thin ">
                      將不定期更新發票捐贈之受捐贈機關或團體，並顯示於二聯式捐贈發票單位中，若下單時預設之受捐贈機關或團體非您欲捐贈發票的單位，您可至「財政部電子發票整合服務平台」申請手機條碼載具，若您已有手機條碼載具，請您於電子發票整合服務平台自行設定消費發票之捐贈的受捐贈機關或團體即可。
                    </div>
                    <div class="text-body1 text-weight-thin ">
                      提醒您，消費者一旦捐贈就不能撤回，其所有權即屬於受贈單位（同傳統紙本發票捐贈）。
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
              <q-expansion-item expand-separator header-class="text-h5 text-weight-medium q-py-lg bg-grey-1"
                label="海外會員訂購常見問題">
                <q-card>
                  <q-card-section class="text-grey-9 q-py-xl">
                    <div class="text-h6 text-weight-regular">Q1. 出貨時間與地區</div>
                    <div class="text-body1 text-weight-thin">
                      海外配送服務地區：
                    </div>
                    <div class="text-body1 text-weight-thin  ">
                      香港、澳門、馬來西亞、新加坡、菲律賓、越南、泰國、日本、美國及加拿大。
                    </div>
                    <q-separator class="q-my-xl" />
                    <div class="text-h6 text-weight-regular">Q2. 配送時效</div>
                    <div class="text-body1 text-weight-thin">
                      預計時效：依系統顯示出貨後開始計算，實際需依路況為主(不包含不可抗拒或各地節慶休假之因素等所造成延遲)。
                    </div>
                    <q-separator class="q-my-xl" />
                    <div class="text-h6 text-weight-regular">Q3. 海外運費計算</div>
                    <div class="text-body1 text-weight-thin ">
                      海外配送地區恕無享有滿額免運之優惠 (lativ 將不定期優惠活動，請依照官網公告為主)。
                    </div>
                    <div class="text-body1 text-weight-thin ">
                      如選購商品體積重>實際重量者，則以體積重費用計算。
                    </div>
                    <q-separator class="q-my-xl" />
                    <div class="text-h6 text-weight-regular">Q4. 海外訂單還需要付額外的費用嗎？關稅和稅款說明</div>
                    <div class="text-body1 text-weight-thin ">
                      因各地區關稅與稅款規範不同，國際包裹都可能需要繳納關稅和稅款，免稅包裹的限額由您當地的海關當局制定。
                    </div>
                    <div class="text-body1 text-weight-thin ">
                      配送後，所有當地關稅和稅款費用需由會員您承擔。
                    </div>
                    <div class="text-body1 text-weight-thin q-mb-sm">
                      若包裹因您無法支付費用，需進行退件，將扣除來回運費及產生關稅或稅款後退款。
                    </div>
                    <div class="text-body1 text-weight-regular text-red">
                      ※特別提醒：有關收取包裹之前可能產生的關稅及稅款等資訊，建議您可查看當地海關網站。
                    </div>
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
