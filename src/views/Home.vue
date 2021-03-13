<template>
      
      <div class="parent">
      <div class="logo">
        <h2 >イキツケ</h2>
        <h1 >SHARE</h1>
      </div>
      <HeaderMenu />
      <Item :want_pref_id1="want_pref_id2"></Item>
      <Serch @want_pref_id1 = "getPref"></Serch>
      </div>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu";
import Item from "../components/Item";
export default {
  method:{
   getPref(want_pref_id1){
  this.want_pref_id = want_pref_id1;
   }
  },
  components: {
    HeaderMenu,
    Item
  }
};

</script>
<style scoped>

.logo{
  margin-top:50px;
  margin-bottom:50px;
  text-align: center;
  width:400px;
   display        : inline-block;
  color          : #ffffff;            /* 文字の色 */
  font-size      : 36pt;               /* 文字のサイズ */
  letter-spacing : 4px;                /* 文字間 */
  text-shadow    : 1px 1px 1px black /* 文字の影 */
}
.parent {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>


