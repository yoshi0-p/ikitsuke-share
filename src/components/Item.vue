<template>
<div>
   <p class="form_title"><span id="char">所在地</span></p>
<select class="form" name="pref_name" v-model="want_pref_id">
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
  <div @click="serch" class="serch">
   <button id="btn">お店を絞る</button>
  </div>


 <div class="cover">
    <div v-for="(value,index) in shares" :key="index">
      <div class="message" v-if= "value.item.pref_id_j">
        <div class="flex">
        </div>
        <div class="title">
        <p class="text">{{ value.item.shop }}</p>
        <p class="text pref"> {{ value.item.pref_id }} </p>
          <p class="icon" @click="del(index)" alt  v-if = "auth">[×]</p>
      
        
        </div>
              
        <p class="text">{{ value.item.share }}</p>
        <p class="text">参考：{{value.item.url}}</p>
        <p class="name">Recommeded by:{{ value.name }}</p>
        
      </div>
     <!-- <div class="ad" v-if="index%5==0">
        <p>5回に一回</p>
        </div> -->
    </div>
  </div>

</div>
  
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      shares: [],
      auth:false,
      want_pref_id:"",
    };
  },

  methods: {

  serch(){
    for(let i = 0; i < this.shares.length; i++){
    if(this.shares[i].item.pref_id != this.want_pref_id){
       this.shares[i].item.pref_id_j = false;
    }
    }
  },
  
  check(){
  
   if(this.$store.state.user.id == 4){
           this.auth = true;
       }
  },
  /*  send(index) {
      axios
        .post("https://desolate-chamber-25914.herokuapp.com/api/comment", {
          share_id: this.shares[index].item.id,
          user_id: this.$store.state.user.id,
          content: this.content,
        })
        .then((response) => {
          console.log(response);
          this.content = "";
          this.$router.go({
            path: this.$router.currentRoute.path,
            force: true,
          });
        });
    }, 
  
    fav(index) {
      const result = this.shares[index].like.some((value) => {
        return value.user_id == this.$store.state.user.id;
      });
      if (result) {
        this.shares[index].like.forEach((element) => {
          if (element.user_id == this.$store.state.user.id) {
            axios({
              method: "delete",
              url: "https://desolate-chamber-25914.herokuapp.com/api/like",
              data: {
                share_id: this.shares[index].item.id,
                user_id: this.$store.state.user.id,
              },
            }).then((response) => {
              console.log(response);
              this.$router.go({
                path: this.$router.currentRoute.path,
                force: true,
              });
            });
          }
        });
      } else {
        axios
          .post("https://desolate-chamber-25914.herokuapp.com/api/like", {
            share_id: this.shares[index].item.id,
            user_id: this.$store.state.user.id,
          })
          .then((response) => {
            console.log(response);
            this.$router.go({
              path: this.$router.currentRoute.path,
              force: true,
            });
          });
      }
    },*/
    del(index) {
      axios
        .delete(
          "https://desolate-chamber-25914.herokuapp.com/api/shares/" +
            this.shares[index].item.id
        )
        .then((response) => {
          console.log(response);
          this.$router.go({
            path: this.$router.currentRoute.path,
            force: true,
          });
        });
    },
    async getShares() {
      let data = [];
      const shares = await axios.get(
        "https://desolate-chamber-25914.herokuapp.com/api/shares"
      );
      console.log(shares);
      for (let i = 0; i < shares.data.data.length; i++) {
        await axios
          .get(
            "https://desolate-chamber-25914.herokuapp.com/api/shares/" +
              shares.data.data[i].id
          )
          .then((response) => {
            
              data.unshift(response.data);

          });
      }
      this.shares = data;
      console.log(this.shares);
    },


  },
  created() {
    this.check(); 
    this.getShares();
    
  },
};
</script>

<style scoped>
.title{
  display: flex;
  justify-content: flex-start;
}

.pref{
  background-color: black;
  color: white;
  margin-left:5px;
  margin-right:5px;
}
.message{
  border:1px black;
  padding:10px;
  margin:10px;
  border: solid 3px #000000;
  width:300px;
  
}
.cover{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
