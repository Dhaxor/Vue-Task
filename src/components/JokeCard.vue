<template>
  <div class="col">
    <div class="card__collection">
      <div class="card">
        <div class="card__title">
          <img src="../assets/green-light-copy.png" alt /> LAWYER JOKE
        </div>
        <div
          class="card__body"
        >A lawyer dies and goes to Heaven. "There must be some mistake," the lawyer argues. "I'm too young to die. I'm only 55." "Fifty-five?" says Saint Peter. "No, according to out calculations, you're 82." "How'd you get that?" the lawyer asks. Answers St. Peter, "We added up your time sheets."</div>
        <div class="card__footer">
          SEE STATS
          <img src="../assets/arrow.png" alt />
        </div>
      </div>
      <div class="card">
        <div class="card__title">
          <img src="../assets/green-light-copy.png" alt /> DOCTOR JOKE
        </div>
        <div class="card__body">
          I’d never had surgery, and I was nervous. “This is a very simple, noninvasive procedure,” the anesthesiologist reassured me. I felt better, until … “Heck,” he continued, “you have a better chance of dying from the
          anesthesia than the surgery itself.”
        </div>
        <div class="card__footer">
          SEE STATS
          <img src="../assets/arrow.png" alt />
        </div>
      </div>

      <div class="card">
        <div class="card__title">
          <img src="../assets/green-light-copy.png" alt /> BUSINESS JOKE
        </div>
        <div class="card__body">
          I went to my boss at work and said, "I need a raise. Three other companies are after me."
          He said, "Really? Which other companies are after you?"
          I said, "The electric company, the gas company and the phone company.
        </div>
        <div class="card__footer">
          SEE STATS
          <img src="../assets/arrow.png" alt />
        </div>
      </div>

      <div class="card">
        <div class="card__title">
          <img src="../assets/green-light-copy.png" alt /> POLICE JOKE
        </div>
        <div class="card__body">
          An officer conducting speed enforcement stops a young man for traveling in excess of 40 mph over the speed limit. The officer approaches the driver and says, "Well, 40 over...I been waiting for you to come along all day."
          Without pause, the young man replies, "I got here as fast as I could!"
        </div>
        <div class="card__footer">
          SEE STATS
          <img src="../assets/arrow.png" alt />
        </div>
      </div>

      <div class="card">
        <div class="card__title">
          <img src="../assets/green-light-copy.png" alt /> DOCTOR JOKE
        </div>
        <div class="card__body">
          An officer observes a woman standing in the middle of the street. He approaches her and asks, "Are you okay?"
          The woman replies, "Yes, but how do I get to the hospital?"
          The officer replies, "Just keep standing there."
        </div>
        <div class="card__footer">
          SEE STATS
          <img src="../assets/arrow.png" alt />
        </div>
      </div>

      <div class="card">
        <div class="card__title">
          <img src="../assets/green-light-copy.png" alt /> BOSS JOKE
        </div>
        <div
          class="card__body"
        >My boss asked me to put a joke on the first slide of the presentation…apparently a picture of my pay slip wasn’t what he was looking for.</div>
        <div class="card__footer">
          SEE STATS
          <img src="../assets/arrow.png" alt />
        </div>
      </div>
    </div>

    <div class="btn">
      
      <button class="btn__list__view">View More <img src="../assets/arrow-down.png" alt="arrow_down" class="arr-down"/> </button>
    </div>
  </div>
</template>

<script>
export default {};
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
//   position: relative;
  height: 30vh;

  & img{
       margin-right: 0;
       display: block;
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
        // position: relative;
        
    }


</style>