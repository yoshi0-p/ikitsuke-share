<template>
<div class="board">
  <div>
   <div  v-for="(value,index) in shares" :key="index">
      <div class="share" >
        <div class="title">
        <img v-bind:src="value.user.profile_image_url" alt="">
        <p class="text shop">{{ value.user.name }}</p>
        <p class="text pref"> {{ value.text }} </p>
         <div  class="mediabox" v-if= "value.entities">
           <div   v-for="(m,i) in value.entities.media" :key="i" >
            <img  class="media" v-bind:src= "m.media_url" > 
           </div>
         </div>
        </div>        
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
    async getShares() {
      const shares = await axios.get(
        "https://sleepy-reaches-02561.herokuapp.com/api/twitter"
      );
      for (let i = 0; i < shares.data.data.length; i++) {
        this.shares.push(shares.data.data[i]);
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
.board{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
}
.share{
  width:25%;
}
.media{
  width:100%;
}
</style>