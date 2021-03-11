<template>
    <div parent>
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
<style scoped>
.parent {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
