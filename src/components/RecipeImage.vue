<script setup>
defineProps({
  name: String,
  alt: String,
});
</script>

<template>
  <div class="recipe-image__wrapper">
    <img class="recipe-image__img" :src="'/assets/images/' + name" :alt="alt" />
  </div>
</template>

<style lang="scss" scoped>
@include for-tablet-portrait-up {
  .recipe-image__wrapper {
    padding: 2rem;
  }

  .recipe-image__img {
    border-radius: 15px;
  }
}
</style>
