<template>
  <div class="home">
    <Header />
    <Section />
    <Categories />
    <JokeCard />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/includes/Header.vue';
import Section from '@/components/includes/Section.vue';
import Categories from '@/components/Categories.vue';
import JokeCard from '@/components/JokeCard.vue';
import Footer from '@/components/includes/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Section,
    Categories,
    JokeCard,
    Footer
  }
}
</script>
