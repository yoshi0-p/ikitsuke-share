<template>
      
      <div class="parent">
      <divclass="logo">
        <h2>イキツケ</h2>
        <h1>SHARE</h1>
      </div>
      <HeaderMenu />
     
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

.logo{
  width:400px;
   display        : inline-block;
  color          : #ffffff;            /* 文字の色 */
  font-size      : 36pt;               /* 文字のサイズ */
  letter-spacing : 4px;                /* 文字間 */
  text-shadow    : 
       2px  2px 1px #003366,
      -2px  2px 1px #003366,
       2px -2px 1px #003366,
      -2px -2px 1px #003366,
       2px  0px 1px #003366,
       0px  2px 1px #003366,
      -2px  0px 1px #003366,
       0px -2px 1px #003366;        /* 文字の影 */
}
}
.parent {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
