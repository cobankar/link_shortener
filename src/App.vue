<script setup lang="ts">
  import Logo from './components/Logo.vue';
  import Shortener from './components/Shortener.vue';
</script>

<template>
    <header>
      <Logo />
    </header>

    <main>
      <Shortener />
    </main>
</template>

<style scoped>

header {
  line-height: 1.5;
  margin-left: auto;
  margin-right: auto;
}

main {
  width: fit-content;
}

@media (min-width: 1024px) {

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}

</style>
