<template>
  <div class="about">
   <Header />
   <h3>使い方は「紹介する」と「探す」の２つ！</h3>
   <img src="../assets/howto.jpg" alt="">
   <h3>Q＆A</h3>
   <p class="q">一回しか行ったことがない店でも投稿して良いですか？</p>
   <p class="a">はい。ぜひシェアしてください。これからも行きたいと思えた良店を皆で共有するアプリとしてご活用ください！</p>
   <p class="q">自分の店を投稿しても良いですか？</p>
   <p class="a">はい。ぜひシェアしてください。但し明らかに同じ人が宣伝として何度も、あるいはシーズンごとキャンペーンごとに投稿し情報の質を下げていると判断した場合は投稿を削除させていただく場合があります。</p>
   <p class="q">イキツケの一覧が表示されないのですが？</p>
   <p class="a">申し訳ありませんが、そのエリアではまだ誰もイキツケをシェアされていないようです。ぜひオススメのお店を教えてください！</p>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
  components: {
    Header
  }
};
</script>
<style scoped>
img{
  width:100%;
}
.q{
  color:black;
  padding-top:10px;
}
.a{
  color:rgb(61, 61, 61);
  padding-bottom:10px;
}
</style>
