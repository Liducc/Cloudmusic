<template>
  <router-view/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "微软雅黑";
}
.icon{
  width: .5rem;
  height:.5rem;
}
   /* 渐变背景色 */
html{
  background:linear-gradient(top,rgb(232,235,242),rgb(255,255,255)) no-repeat ;
  background:-webkit-linear-gradient(top,rgb(232,235,242),rgb(255,255,255)) no-repeat;
}
a{
  color: black;
}
</style>
