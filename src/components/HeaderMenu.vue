<template>
  <div class="share">
    <p class="form_title"><span id="char">店舗名</span></p>
    <input class="form" type="text" v-model="shop">
    <p class="form_title"><span id="char">所在地</span></p>
<select class="form" name="pref_name" v-model="pref_id">
<option value="" selected>都道府県</option>
<option value="北海道">北海道</option>
<option value="青森県">青森県</option>
<option value="岩手県">岩手県</option>
<option value="宮城県">宮城県</option>
<option value="秋田県">秋田県</option>
<option value="山形県">山形県</option>
<option value="福島県">福島県</option>
<option value="茨城県">茨城県</option>
<option value="栃木県">栃木県</option>
<option value="群馬県">群馬県</option>
<option value="埼玉県">埼玉県</option>
<option value="千葉県">千葉県</option>
<option value="東京都">東京都</option>
<option value="神奈川県">神奈川県</option>
<option value="新潟県">新潟県</option>
<option value="富山県">富山県</option>
<option value="石川県">石川県</option>
<option value="福井県">福井県</option>
<option value="山梨県">山梨県</option>
<option value="長野県">長野県</option>
<option value="岐阜県">岐阜県</option>
<option value="静岡県">静岡県</option>
<option value="愛知県">愛知県</option>
<option value="三重県">三重県</option>
<option value="滋賀県">滋賀県</option>
<option value="京都府">京都府</option>
<option value="大阪府">大阪府</option>
<option value="兵庫県">兵庫県</option>
<option value="奈良県">奈良県</option>
<option value="和歌山県">和歌山県</option>
<option value="鳥取県">鳥取県</option>
<option value="島根県">島根県</option>
<option value="岡山県">岡山県</option>
<option value="広島県">広島県</option>
<option value="山口県">山口県</option>
<option value="徳島県">徳島県</option>
<option value="香川県">香川県</option>
<option value="愛媛県">愛媛県</option>
<option value="高知県">高知県</option>
<option value="福岡県">福岡県</option>
<option value="佐賀県">佐賀県</option>
<option value="長崎県">長崎県</option>
<option value="熊本県">熊本県</option>
<option value="大分県">大分県</option>
<option value="宮崎県">宮崎県</option>
<option value="鹿児島県">鹿児島県</option>
<option value="沖縄県">沖縄県</option>
</select>
    <p class="form_title"><span id="char">クチコミ</span></p>
    <textarea class="form" v-model="share"></textarea>
    <p class="form_title"><span id="char">参考URL</span></p>
    <input class ="form" type="text" v-model="url">
    <div @click="send">
      <button>お店をシェア</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      share: "",
      shop:"",
      pref_id:"",
      url:""
    };
  },
  methods: {
    
    send() {
      if (this.share === "") {
        alert("シェアする内容を入力してください");
      } else {
        axios
          .post("https://desolate-chamber-25914.herokuapp.com/api/shares", {
            user_id: this.$store.state.user.id,
            share: this.share,
            shop:this.shop,
            pref_id:this.pref_id,
            url:this.url

          })
          .then((response) => {
            console.log(response);
            alert("シェアしました");
            this.share = "";
            this.$router.go({
              path: this.$router.currentRoute.path,
              force: true,
            });
          });
      }
    },
  },
};
</script>

<style scoped>
.form{
  width:300px;
  display: flex;
  flex-direction: column;
  background-color:rgb(255, 255, 255);
  color:rgb(0, 0, 0);
  margin-bottom:10px;
}
#char{
  width:300px;
  border-color:rgb(255, 255, 255);
  background-color:rgb(0, 0, 0);
  color:white;
}
</style>
