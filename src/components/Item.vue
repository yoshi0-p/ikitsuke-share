<template>
<div>
  <div class="pre" v-if = "$store.state.wanted_pref_id && $store.state.wanted_type" >
      <p class="menu">{{$store.state.wanted_pref_id}}の「{{$store.state.wanted_type}}」イキツケ一覧
      </p>
   </div>
 <div class="cover">
   <p v-if= "shares.length == 0">読み込み中です</p>
    <div v-for="(value,index) in shares" :key="index">
      <div class="message" v-if= "(value.pref_id == $store.state.wanted_pref_id) && (value.type == $store.state.wanted_type)">
        <div class="title">
        <p class="text">{{ value.shop }}</p>
        <p class="text pref"> {{ value.pref_id }} </p>
          <p class="icon" @click="del(index)" alt  v-if = "auth">[×]</p>
        </div>
        <div class="line"></div>
        <p class="text">{{ value.share }}</p>
        <a :href = "value.url" class="text url" target="_blank" rel="noopener">参考：{{value.url}}</a>
        
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
    };
  },
  
  methods: {
  
  check(){
  
   if(this.$store.state.user.id == 4){
           this.auth = true;
       }
  },
    
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
      const shares = await axios.get(
        "https://desolate-chamber-25914.herokuapp.com/api/shares"
      );
      /*
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
      }*/
      for (let i = 0; i < shares.data.data.length; i++) {
        this.shares.unshift(shares.data.data[i]);
      }
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
.pre{
  text-align: center;
  font-size:32px;
  padding-bottom:10px;
}
.cover {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
}
.message{
  width:300px;
  background-color:rgb(255, 212, 155);
  border:solid;
  border-color: #ffc851;
  padding:10px;
  margin:10px;
}
.cover{
  display: flex;
  justify-content: center;
}
.url{
   word-break : break-all;
   text-decoration: none;
   background-color:#fdb720;
   margin-top:5px;
   
}
.title{
  display:flex;
  justify-content: space-between;
  
}
.pref{
  background-color:black;
  color:white;
}
.line{
   border-top: 1px solid rgb(0, 0, 0);
   margin-bottom:5px;
}

</style>
