<template>
    <div>
      <div class="logo">
        <h2 ><span class="red">イ</span>キツケ<span class="blue">S</span>HARE</h2>
      </div>
      <div class="image">
       <p class="catch">誰かのイキツケはきっといい店だ。</p>
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
  
  color: white;
  background-color: black;
  height:100px;
  
}
h2{
  color:white;
  font-size:32px;
  line-height: 100px;
  background-color: black;
}
.image{
  background: url(../assets/mise.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}
.catch{
  text-align: center;
  padding:50px;
}
.parent {
  display: flex;
  justify-content: center;
  /*flex-wrap: wrap;*/
}
.field{
  width:50vw;
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
</style>



