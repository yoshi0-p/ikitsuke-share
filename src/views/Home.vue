<template>
      
      <div class="parent">
      <div class="logo">
        <h2 >イキツケ</h2>
        <h1 >SHARE</h1>
      </div>
      <HeaderMenu />
      <Serch ></Serch>
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

</style>


