<template>
    <div class="nav">
        <div class="Nav__logo">
            <img src="../../assets/logo.png" alt="" >
        </div>
        <ul class="list__collection">
            <li class="list__item">SO FUNKTIONIERT’S</li>
            <li class="list__item">SONDERANGEBOTE</li>
        </ul>
         <div class="mein">
             <img src="../../assets/shape.png" alt="shape">
            <li class="list__item">MEIN BEREICH</li>
             <img src="../../assets/path.png" alt="shape">

        </div>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

 .nav{
     background-color: #303030;
     height:100px;
     display: flex;
     justify-content: space-around;
     align-items: center;

     li{
         color: white;
        //  margin-left: 50px;

     }
 }
 .list__collection{
     display: flex;
     list-style: none;
     width: 30%;
     justify-content: space-around;
     font-family: 'Montserrat', sans-serif;
     
     
 }
 .mein{
     background-color: #cfb995;
     padding: 20px;
     margin-left: -20%;
     display: flex;
     justify-content: space-between;
     align-items: center;

     li{
         list-style: none;
         padding-left:8px;
         padding-right:5px;
     }
     
 }
 @media screen and (max-width: 1000px) {
   .nav{
    //    background-color: red;
   }
   .list__collection{
       flex-direction: column;
   }
}

</style>