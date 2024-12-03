export interface Recipe {
  id: number;
  image: {
    url: string;
    alt: string;
  };
  title: string;
  description: string;
  preparationTime: {
    title: string;
    value: string;
  }[];
  sections: {
    title: string;
    components: RecipeComponent[];
  }[];
}

type RecipeComponent = RecipeParagraph | RecipeList | RecipeTable;

interface RecipeParagraph {
  type: 'paragraph';
  content: string;
}

interface RecipeList {
  type: 'list';
  content: RecipeListItem[];
}

export type RecipeListItem = string | { title: string; value: string };

interface RecipeTable {
  type: 'table';
  content: RecipeTableRow[];
}

export type RecipeTableRow = { title: string; value: string };
