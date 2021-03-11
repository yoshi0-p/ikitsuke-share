<template>
    <div>
      <div id="navi"><HeaderMenu /></div>
     
      <Item />
      </div>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu";
import Item from "../components/Item";
export default {
  components: {
    HeaderMenu,
    Item
  }
};
</script>
