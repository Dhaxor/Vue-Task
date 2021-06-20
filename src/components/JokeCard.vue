<template>
  <div class="col">
    <div class="card__collection">
      <!-- <div>{{getJokes}}</div> -->
      <div class="card" v-for="(data,index) in getJokes" :key="index">
        <div class="card__title">
          <img src="../assets/green-light-copy.png" alt /> {{data.categories}}
        </div>
        <div
          class="card__body"
        >{{data.value}}</div>
        <div class="card__footer">
          SEE STATS
          <img src="../assets/arrow.png" alt />
        </div>
      </div>
    </div>

    <div class="btn">
      
      <div class="btn__list__view"> View More <img src="../assets/arrow-down.png" alt="arrow_down" class="arr-down"/> </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
     computed: {
        getJokes(){
          return this.$store.state.jokes.slice(0,6);
        },
     },

    mounted() {
      return this.$store.dispatch("getCategories");
    },
    
};
</script>


<style lang="scss" scoped>
.col {
  background-color: #f9f9f9;
  & .card__collection {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: 20px 20px;
    padding-top: 40px;
    padding-left: 15%;
    padding-right: 15%;
    // margin: auto;

    & .card {
      background-color: #fff;
      padding: 20px;
      max-width: 350px;
      height: 290px;
      border: 1px solid #ecebe9;
      position: relative;

      & .card__title {
        font-weight: bold;
        padding-bottom: 9px;
      }
      & .card__body {
        line-height: 1.57;
        font-stretch: normal;
        font-style: normal;
        font-size: 1.1vw;
        color: #303030;
        font-family: "Montserrat", sans-serif;
      }
      & .card__footer {
        padding-top: 10px;
        color: #cfb995;
        font-weight: bold;
        // font-size: 1.5vw;
        position: absolute;
        font-family: "Montserrat", sans-serif;
        right: 15px;
        bottom: 5px;
      }
    }
  }
}
.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

//   position: relative;
  height: 30vh;

  & img{
       margin-right: 0;
       position: abolute;
       right: 0;
   
  }
   
}

.btn__list__view{
        background-color: #fff;
        height: 50px;
        width: 200px;
        color: #d1bb91;
        border: 1px solid #d1bb91;
        font-family: 'Montserrat', sans-serif;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-around;
        align-items: center;
        padding-left: 20px;
        // text-align: center;
        // position: relative;
        
    }


</style>