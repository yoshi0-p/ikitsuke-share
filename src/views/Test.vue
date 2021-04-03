<template>
<div>

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
      for (let i = 0; i < shares.length; i++) {
        this.shares.unshift(shares[i]);
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