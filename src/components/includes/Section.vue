<template>
  <div class="header__section">
    <div class="text">
      <div>
        <p class="text__primary">The Joke Bible</p>
        <p class="text__secondary">Daily Laughs for you and yours</p>
      </div>
      <div class="input">
        <img src="../../assets/search-copy.png" alt />
        <input type="text" class="form__input" placeholder="How can we make you laugh" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.header__section {
  background-image: url("../../assets/bitmap.png");
  height: 55vh;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  height: 100%;
}
.text__primary {
  color: #cfb995;
  font-size: 5vw;
}
.text__secondary {
  text-align: center;
  font-weight: bold;
  font-size: 1.9vw;
  margin-top: 10px;
}
.input {
  display: flex;
  flex-direction: column;
  width: 37%;
  position: relative;

  img {
    display: block;
    height: 30px;
    width: 30px;
    position: absolute;
    right: 10px;
    top: 10px;
    // left: -10px
  }
}
.form__input {
  height: 50px;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  font-size: 19px;
  padding-left: 20px;
}
</style>