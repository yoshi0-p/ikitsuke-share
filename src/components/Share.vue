<template>
<div class="board">
  <p class ="waiting" v-if= "shares==''">読み込み中です</p>
   <div class="cards" v-for="(value,index) in shares" :key="index">
      <div class = "side card">
       <img class="photo" v-bind:src= "value.extended_entities.media[0].media_url"
        v-if= "value.extended_entities">
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
  
    async getShares() {
      let url = "https://murmuring-woodland-15417.herokuapp.com/api/";
      switch(this.$store.state.area){
        case "福岡":url = url +"fukuoka";break;
        case "東京":url = url +"tokyo";break;
        case "大阪":url = url +"osaka";break;
        default:url = "https://murmuring-woodland-15417.herokuapp.com/api/twitter";
        console.log(`Sorry, we have no data yet.`);
      } 
      console.log(url);
      const shares = await axios.get(
        url
      );
      for (let i = 0; i < shares.data.data.length; i++) {
        this.shares.push(shares.data.data[i]);
      }
    console.log(this.shares); 
    },


  },
  created() {
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
.waiting{
  margin:20px;
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
  object-fit: contain;
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
  .cards{
    width:100%;
  }
  .text{
    padding:1px;
  }
  .user{
    padding:1px;
  }
}

</style>