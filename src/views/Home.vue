<template>
    <div>
      <div class="logo">
        <h2 ><span class="red">イ</span>キツケ<span class="blue">S</span>HARE</h2>
      </div>
      <div class="image">
        <div class="cover">
         <p class="catch">誰かのイキツケはきっといい店だ。</p>
        </div>
      </div>
      <div class="parent">
        <div class="post field">
        <p class="action">イキツケを紹介する</p>
        <HeaderMenu />
      </div>
      <div class="serch field">
        <p class="action">街のイキツケを見る</p>
        <Serch ></Serch>
      </div>
      </div>
       <Item ></Item>
      </div>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu";
import Item from "../components/Item";
import Serch from "../components/Serch";
export default {
  method:{
  
  },
  components: {
    HeaderMenu,
    Item,
    Serch
  }
};

</script>
<style scoped>

.logo{
  padding-left:20px;
  color: white;
  background-color: rgb(106, 247, 101);
  height:50px;
  
}
h2{
  color:white;
  line-height: 50px;
  text-shadow:1px 1px 0 rgb(0, 0, 0),-1px 1px 0 rgb(0, 0, 0),1px -1px 0 rgb(0, 0, 0),-1px -1px 0 rgb(0, 0, 0);
}
.image{
  background: url(../assets/sara.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}

.catch{
  text-align: center;
  padding-top:150px;
  padding-bottom:150px;
  color:black;

}
.parent {
  display: flex;
  justify-content: center;
  /*flex-wrap: wrap;*/
}
.field{
  margin:5vw;
  width:40vw;
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
.red{
  color:rgb(224, 141, 141);
}
.blue{
  color:rgb(141,187,224);
}

@media screen and (max-width: 480px) {
  .parent {
   flex-wrap: wrap;
}
}
</style>



