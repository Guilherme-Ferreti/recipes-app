<script setup lang="ts">
  import RecipeCard from '@/components/RecipeCard.vue';
</script>

<template>
  <div class="container">
    <RecipeCard :id="<string>$route.params.id" />
  </div>
</template>
