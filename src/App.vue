<script setup>
import Recipe from './components/Recipe.vue';

const recipe = {
  image: {
    name: 'image-omelette.jpeg',
    alt: 'Omelette on a plate',
  },
  title: 'Simple Omelette Recipe',
  intro:
    'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
  callout: {
    title: 'Preparation time',
    items: [
      {
        title: 'Total',
        value: 'Approximately 10 minutes',
      },
      {
        title: 'Preparation',
        value: '5 minutes',
      },
      {
        title: 'Cooking',
        value: '5 minutes',
      },
    ],
  },
  ingredients: [
    '2-3 large eggs',
    'Salt, to taste',
    'Pepper, to taste',
    '1 tablespoon of butter or oil',
    'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
  ],
  intructions: [
    {
      title: 'Beat the eggs',
      value:
        'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
    },
    {
      title: 'Heat the pan',
      value:
        'Place a non-stick frying pan over medium heat and add butter or oil.',
    },
    {
      title: 'Cook the omelette',
      value:
        'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
    },
    {
      title: 'Add fillings (optional)',
      value:
        'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
    },
    {
      title: 'Fold and serve',
      value:
        'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
    },
    {
      title: 'Enjoy',
      value: 'Serve hot, with additional salt and pepper if needed.',
    },
  ],
  nutrition: {
    description:
      'The table below shows nutritional values per serving without the additional fillings.',
    items: [
      {
        title: 'Calories',
        value: '277kcal',
      },
      {
        title: 'Carbs',
        value: '0g',
      },
      {
        title: 'Protein',
        value: '20g',
      },
      {
        title: 'Fat',
        value: '22g',
      },
    ],
  },
};
</script>

<template>
  <div class="container">
    <Recipe :recipe="recipe" />
  </div>
</template>

<style scoped></style>
