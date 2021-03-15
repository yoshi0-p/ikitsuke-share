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
  
  color: white;
  background-color: black;
  height:50px;
  
}
h2{
  color:white;
  line-height: 50px;
}
.image{
  background: url(../assets/mise.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}
.cover{
  height:200px;
}
.catch{
  text-align: center;
  margin:100px;
  color:white;
  background-color: black;

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



