<template>
<div>  
  <Header />
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
import Header from "../components/Header";
import HeaderMenu from "../components/HeaderMenu";
import Item from "../components/Item";
import Serch from "../components/Serch";
export default {
  method:{
  
  },
  components: {
    HeaderMenu,
    Item,
    Serch,
    Header
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
  height:100px;
  line-height:100px;
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
  margin:2.5vw;
  width:100vw;
  padding:20px;
}
}
</style>



