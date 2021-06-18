<template>
   <div style="background-color: #f9f9f9;">
    <div class="categories">
        <button class="btn__list__adult">ADULT JOKES</button>
        <button class="btn__list__dad">DAD JOKES</button>
        <button class="btn__list__christmas">CHRISTMAS JOKES</button>
        <button class="btn__list__job">JOB JOKES</button>
        <button class="btn__list__birthday">BIRTHDAY JOKES</button>
        <button class="btn__list__social">SOCIAL JOKES</button>
        <button class="btn__list__pun">PUN JOKES</button>
        <button class="btn__list__view">VIEW ALL</button>
    </div>
    <div class="line"> </div>
    <div class="category__tag">SOCIAL JOKES</div>
    </div>

</template>

<script>
export default {
    
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