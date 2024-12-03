<script setup>
import { ref } from 'vue';
import RecipeCallout from './RecipeCallout.vue';
import RecipeList from './RecipeList.vue';
import RecipeTable from './RecipeTable.vue';
import api from '@/api';

const recipe = ref({});
const isLoading = ref(true);

async function getRecipe() {
  recipe.value = await api.recipeService.getRecipeById(1);

  isLoading.value = false;
}

getRecipe();
</script>

<template>
  <div v-if="isLoading">
    Loading...
  </div>
  <article
    v-else
    class="recipe"
  >
    <div class="recipe__image-wrapper">
      <img
        class="recipe__image"
        :src="'/assets/images/' + recipe.image.url"
        :alt="recipe.image.alt"
      >
    </div>

    <div class="recipe__content">
      <h1 class="recipe__title">
        {{ recipe.title }}
      </h1>

      <p class="recipe__description">
        {{ recipe.description }}
      </p>

      <RecipeCallout title="Preparation time">
        <RecipeList
          :items="recipe.preparationTime"
          theme="secondary"
        />
      </RecipeCallout>

      <section
        v-for="section, sectionIndex in recipe.sections"
        :key="sectionIndex"
        class="recipe__section"
      >
        <h2 class="recipe__section-title">
          {{ section.title }}
        </h2>

  
        <template
          v-for="component, componentIndex in section.components"
          :key="componentIndex"
        >
          <RecipeList
            v-if="component.type === 'list'"
            :items="component.content"
          />

          <p v-else-if="component.type === 'paragraph'">
            {{ component.content }}
          </p>

          <RecipeTable
            v-else-if="component.type === 'table'"
            :rows="component.content"
          />
        </template>

        <hr
          v-if="index < recipe.sections.length - 1"
          class="recipe__divider"
        >
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

  &__image-wrapper {
    @include for-tablet-portrait-up {
      padding: 2rem;
    }
  }

  &__image {
    @include for-tablet-portrait-up {
      border-radius: 15px;
    }
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
