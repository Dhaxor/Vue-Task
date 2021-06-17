<template>
  <div class="home">
    <Header />
    <Section />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/includes/Header.vue';
import Section from '@/components/includes/Section.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Section
  }
}
</script>
