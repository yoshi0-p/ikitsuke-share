<template>
<div> 
      <Header2></Header2>
      <Share></Share>
      </div>
</template>

<script>
import Share from "../components/Share";
import Header2 from "../components/Header2"
export default {
  method:{
  
  },
  components: {
    Share,
    Header2
  }
};

</script>
<style scoped>
.image{
  background: url(../assets/sara.png) no-repeat;
  background-size: contain;
  background-position: center;
  height:100px;
}

.catch{
  width: 100%;
  text-align: center;
  color:black;
}
.parent {
  display: flex;
  justify-content: center;
  /*flex-wrap: wrap;*/
}
.field{
  margin:1vw;
  width:48vw;
  padding:20px;
}
.post{
  background-color: rgb(224, 141, 141);
}
.serch{
  background-color: rgb(141, 187, 224);
}
.action{
  text-align: center;
  color:white;
  font-size: 24px;
}


@media screen and (max-width: 720px) {
  .parent {
   flex-wrap: wrap;
}
.field{
  margin-bottom:2.5vw;
  width:100vw;
  padding-bottom:20px;
}
}
</style>



