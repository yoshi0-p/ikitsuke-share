<template>
      <div class="logo">
        <a class = "none" href="/"> <h2 ><span class="red">イ</span>キツケ<span class="blue">S</span>HARE</h2></a> 
        <a class="how" href="/about">使い方</a>
      </div>
</template>
<style scoped>
.logo{
  padding-left:20px;
  color: white;
  background-color: rgb(255, 201, 100);
  height:50px;
  display: flex;
  justify-content: space-between;
}
.how{
  margin-top:10px;
  margin-bottom:10px;
  background-color:white;
  color:black;
  padding:10px;
  margin-right:50px;
  text-decoration:none;
.none{
  text-decoration: none;
}
}
h2{
  color:white;
  line-height: 50px;
  text-shadow:1px 1px 0 rgb(0, 0, 0),-1px 1px 0 rgb(0, 0, 0),1px -1px 0 rgb(0, 0, 0),-1px -1px 0 rgb(0, 0, 0);
}
.red{
  color:rgb(224, 141, 141);
}
.blue{
  color:rgb(141,187,224);
}
</style>