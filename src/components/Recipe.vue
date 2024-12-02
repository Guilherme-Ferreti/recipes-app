<script setup>
import RecipeCallout from './RecipeCallout.vue';
import RecipeImage from './RecipeImage.vue';
import RecipeList from './RecipeList.vue';
import RecipeTable from './RecipeTable.vue';
defineProps({
  recipe: Object,
});
</script>

<template>
  <article class="recipe">
    <RecipeImage :name="recipe.image.name" :alt="recipe.image.alt" />

    <div class="recipe__content">
      <h1 class="recipe__title">{{ recipe.title }}</h1>

      <p class="recipe__intro">{{ recipe.intro }}</p>

      <RecipeCallout title="Preparation time">
        <RecipeList :items="recipe.callout.items" theme="secondary" />
      </RecipeCallout>

      <section class="recipe__section">
        <h2 class="recipe__section-title">Ingredients</h2>

        <RecipeList :items="recipe.ingredients" />
      </section>

      <hr class="recipe__divider" />

      <section class="recipe__section">
        <h2 class="recipe__section-title">Instructions</h2>

        <RecipeList :items="recipe.intructions" type="ol" />
      </section>

      <hr class="recipe__divider" />

      <section class="recipe__section">
        <h2 class="recipe__section-title">Nutrition</h2>
        <p>
          {{ recipe.nutrition.description }}
        </p>

        <RecipeTable :rows="recipe.nutrition.items" />
      </section>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.recipe {
  background-color: var(--rt-color-white);
  max-width: 44rem;

  @include for-tablet-portrait-up {
    border-radius: 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }

  &__title {
    font-family: var(--rt-font--secondary);
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--rt-color-stone-900);
    line-height: 3rem;
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__section-title {
    font-family: var(--rt-font--secondary);
    font-size: 1.75rem;
    font-weight: 400;
    color: var(--rt-color-brown-800);
  }

  &__divider {
    width: 100%;
    height: 1px;
    background-color: var(--rt-color-stone-150);
    border: 0;
  }
}
</style>
