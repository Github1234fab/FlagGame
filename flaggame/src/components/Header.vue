<template>
    <div class="header_container">
    <div class="logo"><i class="fa-solid fa-flag"></i></div>
    <h1 class="title_header">The Flag Game</h1>
    <nav class="header_nav">
    <a href="/">Home</a>
    <a href="/game">Game</a>
    </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.header_container{
  height: 150px;
  width: 100%;
  background-color: cadetblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

.title_header{
    color: white;
    font-size: 18px;
    text-transform: uppercase;
}
.header_nav{
  display: flex;
  justify-content: space-around;
  width: 300px;
  font-size: 16px;
  margin-right: 50px;
}
a {
    font-family: poppins;
  text-decoration: none;
  color: white;
}
.logo {
  margin-left: 50px;
  color: white;
}

</style>