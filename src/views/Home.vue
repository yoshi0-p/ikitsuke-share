<template>
      
      <div class="parent">
      <div class="logo">
        <h2 ><span class="red">イ</span>キツケ<span class="blue">S</span>HARE</h2>
      </div>
      <p class="catch">誰かのイキツケはきっといい店だ。</p>
      <div class="post">
        <p>オススメのお店を投稿する</p>
        <HeaderMenu />
      </div>
      <div class="serch">
        <p>自分の街のオススメ店を見る</p>
        <Serch ></Serch>
        <Item ></Item>
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
h2{
  color:white;
}
.logo{
  color: white;
  background-color: black;
  height:50px;
  line-height: 50px;
}
.post{
  background-color: rgb(224, 141, 141);
  color:white;
}
.serch{
  background-color: rgb(141, 187, 224);
  color:white;
}
.red{
  color:red;
}
.blue{
  color:blue;
}
</style>



