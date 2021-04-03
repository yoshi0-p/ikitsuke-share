<template>
<div class="board">
   <div class="cards" v-for="(value,index) in shares" :key="index">
      <div class = "side card" v-if= "value.extended_entities">
        <img class="photo" v-bind:src="value.extended_entities.media[0].media_url">
        <div>
        <img class="user" v-bind:src="value.user.profile_image_url" alt="">
        <p class="text">{{ value.user.name }}</p>
        <p class="text"> {{ value.text }} </p>
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

<style scoped>
.side{
  display: flex;
  justify-content: flex-start;
}
.cards{
  width:60vw;
}
.card{
    margin-top:1px;
    padding: 0.5em 1em;
    margin: 3px 0;
    color: #f0e5abfd;
    background: #faf175;/*背景色*/
    border-top: solid 6px #ffbe5d;
    box-shadow: 10px 10px 1px rgba(0, 0, 0, 0.32)
  
}
.user{
padding:10px;
}
.text{
color: black;
padding:10px;
}
.photo{
  width:25vw;
}
.board{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
@media screen and (max-width: 720px) {
  .photo{
  width:100%;
}
.side{
  display:block;
  }
  .card{
    width:100%;
  }
}

</style>