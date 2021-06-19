<template>
    <div class="footer">
        <p>GOT JOKES? GET PAID<br> FOR SUBMITTING!</p>
        <P style="color:#cfb995">SUBMIT JOKE <img src="../../assets/arrow.png" alt="arr"></P>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.footer{
    background-image: url('../../assets/footer.png');
    height: 30vh;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    & p{
        color: #fff;
        padding-bottom: 30px;
        padding-left: 10%;
        line-height: 1.57;
        font-weight: bold;
        font-size: 1.6vw;
        font-family: "Montserrat", sans-serif;

   
    }
}
</style>