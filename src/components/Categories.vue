<template>
   <div style="background-color: #f9f9f9;">
       <!-- <div>{{data}}</div> -->

    <div class="categories">
        <button class="btn__list__adult" v-for="(color,index) in colors" :key="index" :style="{ 'background-color': color,'border': `1px solid ${color}`}"  @click="Currentcategory(index,getCategories[index])" :class="{yourActiveClass: currentIndex === index, yourInactiveClass: currentIndex !== index}"  >{{getCategories[index]}}</button>
        <button class="btn__list__view">VIEW ALL</button>
    </div>
    <div class="line"> </div>
    <div class="category__tag">{{currentCategoryName}}</div>
    </div>

</template>

<script>
export default {
    name:'Categories',
    data () {
        return {
            colors: ['#ff5b5b','#ff915b','#ffbe5b','#ffdf5b',
                     '#8fe360','#57e690'],
            currentName:''
        }
    },

    computed: {
        getCategories(){
          return this.$store.state.data;
        },
         currentIndex(){
            return this.$store.state.currentIndex
        },
        currentCategoryName(){
            return this.$store.state.currentCategoryName
        },
    },
    mounted() {
      return this.$store.dispatch("getJoke");
    },
    methods:{
        Currentcategory(index,em) {
            // this.currentName = e.target.name
            console.log(em)
            return this.$store.dispatch("get__current__category",index)
            
        }
    }

    
}
</script>


<style lang="scss" scoped>

.categories{
    background-color: #f9f9f9;
    height: 30vh;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    align-items: center;
    grid-gap: 10px 20px;
    // width: 80%;
    padding-top: 40px;
    padding-left: 15%;
    padding-right: 15%;
    margin: auto;
    font-family: 'Montserrat', sans-serif;

    & .btn__list__adult{
        background-color: #ff5b5b;
        height: 50px;
        color: #fff;
        border: 1px solid #ff5b5b;
        font-family: 'Montserrat', sans-serif;
    }

     & .btn__list__dad{
        background-color: #ff915b;
        height: 50px;
        color: #fff;
        border: 1px solid #ff915b;
        font-family: 'Montserrat', sans-serif;
    }

    & .btn__list__christmas{
        background-color: #ffbe5b;
        height: 50px;
        color: #fff;
        border: 1px solid #ffbe5b;
        font-family: 'Montserrat', sans-serif;
    }

    & .btn__list__job{
        background-color: #ffdf5b;
        height: 50px;
        color: #fff;
        border: 1px solid #ffdf5b;
        font-family: 'Montserrat', sans-serif;
    }

    & .btn__list__birthday{
        background-color: #8fe360;
        height: 50px;
        color: #fff;
        border: 1px solid #8fe360;
        font-family: 'Montserrat', sans-serif;
    }

    & .btn__list__social{
        background-color: #57e690;
        height: 50px;
        color: #fff;
        border: 1px solid #57e690;
        font-family: 'Montserrat', sans-serif;
    }
    & .btn__list__pun{
        background-color: #57dbe6;
        height: 50px;
        color: #fff;
        border: 1px solid #57dbe6;
        font-family: 'Montserrat', sans-serif;
    }
    & .btn__list__view{
        background-color: #fff;
        height: 50px;
        color: #d1bb91;
        border: 1px solid #d1bb91;
        font-family: 'Montserrat', sans-serif;
    }
}

.yourActiveClass{
    border: 3px solid #000 !important;
}

.line{
    margin-top: 30px;
    margin-left: 15%;
    margin-right: 15%;
    border-top: 1px solid #ecebe9;

}
.category__tag{
    height: 30px;
    border-radius: 20px;
    background-color: #57e690;
    width: 10%;
    margin-left: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 10px;

}
</style>