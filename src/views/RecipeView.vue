<script setup lang="ts">
  import RecipeCard from '@/components/RecipeCard.vue';
  import AppLayout from '@/components/AppLayout.vue';
</script>

<template>
  <AppLayout>
    <RecipeCard :id="<string>$route.params.id" />
  </AppLayout>
</template>
