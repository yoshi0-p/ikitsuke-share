<template>
<div>
  
   <div v-for="(value,index) in shares" :key="index">
      <div class="message" >
        <div class="title">
        <img v-bind:src="value.user.profile_image_url" alt="">
        <p class="text shop">{{ value.user.name }}</p>
        <p class="text pref"> {{ value.text }} </p>
        <!--  <img v-bind:src="value.extended_entities.media[0].url" alt=""> -->
         <p class="text pref" v-if= "value.entities.media[0].media_url"> {{value.entities.media[0].media_url}} </p>
        </div>        
      </div>
     <!-- <div class="ad" v-if="index%5==0">
        <p>5回に一回</p>
        </div> -->
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