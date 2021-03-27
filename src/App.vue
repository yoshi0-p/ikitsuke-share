<template>
 <div id="app">
   <router-view />
 </div>
</template>

<style>
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

/* change colours to suit your needs */
ins {
    background-color:rgb(255, 255, 255);
    color:rgb(255, 251, 217);
    text-decoration:none;
}

/* change colours to suit your needs */
mark {
    background-color:rgb(255, 255, 255);
    color:#000;
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;  
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}

html {
  background-color: #ffffff;
}
* {
  color: rgb(0, 0, 0);
  font-family: "Noto Sans JP";
}
h1{
  color:rgb(255, 255, 255);
  font-size:36px;
  text-shadow:2px 2px 2px black;
  padding:10px;
}
</style>
<script>

export default {
    methods : {
  	createPageTitle : function(to){
		 // タイトルを設定
		if(to.meta.title){
			var setTitle = to.meta.title;
			document.title = setTitle;
		} else {
			document.title = 'ikituke-share'
		}

		// メタタグdescription設定
		if(to.meta.desc){
			var setDesc = to.meta.desc;
			document.querySelector("meta[name='description']").setAttribute('content', setDesc)
		} else {
			document.querySelector("meta[name='description']").setAttribute('content','-')
		}
  	} 
  },
  mounted : function(){
      var to = this.$route;
      this.createPageTitle(to);
  },
  watch: { 
      '$route' (to, from) {
          this.createPageTitle(to);
      }
  }
}
</script>
