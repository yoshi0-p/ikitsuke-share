<template>
  <div class="cover">
    <div v-for="(value,index) in shares" :key="index">
      <div class="message">
        <div class="flex">
          <p class="name">{{ value.name }}</p>
          <p class="icon" @click="fav(index)" >[★]</p>
          <p class="number">{{ value.like.length }}</p>
          <p
            class="icon"
            @click="del(index)"
            alt
          >[×]</p>

           <div class="comment-box">
         <input v-model="content" type="text" />
        <div @click="send(index)">
          <button>追加</button>
        </div> 
        </div>

        </div>
        <p class="text">{{ value.item.shop }}</p>
        <p class="text">{{ value.item.pref_id }}</p>
        <p class="text">{{ value.item.share }}</p>
        <p class="text">{{ value.item.user_id }}</p>
        <a href="{value.item.url }">{{value.item.url}}</a>
      
       
       
  
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
      path: true,
      profile: true,
    };
  },

  methods: {
     

    send(index) {
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
      let data = [];
      const shares = await axios.get(
        "https://desolate-chamber-25914.herokuapp.com/api/shares"
      );
      console.log(shares);
      for (let i = 0; i < shares.length; i++) {
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
    this.getShares();
  },
};
</script>

<style scoped>

.cover{
  width:100%;
   display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.flex {
  display: flex;
}
.comment-box{
  display:flex;
}

.icon {
  width: 25px;
  height: 25px;
}
.detail {
  margin-left: 50px;
}
.message {
  margin: 20px;
  padding:10px;
  background-color:rgb(255, 144, 231);
  width:400px;
  border-bottom: solid 1px red;
  border-left: solid 1px red;

}
.name {
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
}
.text {
  margin-top: 10px;
}
.number {
  margin-left: 10px;
  margin-right: 10px;
}
.comment {
  margin: 10px;
  padding:10px;
  background-color:rgb(144, 229, 255);
  width:400px;
  border-bottom: solid 1px aquamarine;
  border-left: solid 1px aquamarine;

}
</style>
