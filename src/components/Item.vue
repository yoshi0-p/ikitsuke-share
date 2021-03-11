<template>
  <div class="cover">
    <div v-for="(value,index) in shares" :key="index">
      <div class="message">
        <div class="flex">
      <!--   <p class="icon" @click="fav(index)" >[★]</p> -->
      <!--    <p class="number">{{ value.like.length }}</p> -->
        </div>
        <div class="title">
        <p class="text">{{ value.item.shop }}</p>
        <p class="text pref"> {{ value.item.pref_id }} </p>
        <p class="icon" @click="del(index)" alt  v-if="auth">[×]</p>
        </div>
        
        <p class="text">{{ value.item.share }}</p>
        <a href="{value.item.url}">参考：{{value.item.url}}</a>
        <p class="name">Recommeded by:{{ value.name }}</p>

  
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
      auth:false
    };
  },

  methods: {
     
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
    if(this.$store.state.user.id === 4){
           this.auth = true;
       };
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

}
</style>
