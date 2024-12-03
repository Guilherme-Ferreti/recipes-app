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
    components: {
      type: 'paragraph' | 'list' | 'table';
      content: string | string[] | RecipeListItem[];
    }[];
  }[];
}

export interface RecipeListItem {
  title: string;
  value: string;
}
