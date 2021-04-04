<template>
<div>
<select class="form" name="pref_name" v-model="area">
<option value="" selected>エリアを選択</option>
<option value="札幌">札幌</option>
<option value="東京">東京</option>
<option value="横浜">横浜</option>
<option value="名古屋">名古屋</option>
<option value="仙台">仙台</option>
<option value="奈良">奈良</option>
<option value="神戸">神戸</option>
<option value="大阪">大阪</option>
<option value="広島">広島</option>
<option value="福岡">福岡</option>
</select>
<button @click="serch" id="btn">エリア選択</button>
</div>
  
</template>

<script>

export default {
  data() {
     return {
      area:"",
    }; 
  },
  methods: {
  serch() {
      this.$store.dispatch('changeArea', {
        area: this.area,
      });
      this.$router.go({path:this.$router.currentRoute.path,forece:true});
      console.log(this.area);
      console.log(this.$store.state.area);
    },
  }
}
</script>

<style scoped>
.form{
  width:100%;
  margin-bottom:10px;
  resize:none;
}
#btn{
  width:50%;
  margin-top:10px;
  margin-left:25%;
  margin-right:25%;
  background-color: rgb(112, 171, 219); 
  border-radius: 20px;
}
</style>