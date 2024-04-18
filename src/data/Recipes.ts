export interface Recipe {
  image: { src: string; alt: string; width: number; height: number };
  title: string;
  servings: number;
  ingredients: { amount?: number; unit?: string; description: string; extras?: string }[];
  instructions: string;
}

export const Recipes: Recipe[] = [
  {
    image: {
      src: '/fed23d-grafiska-verktyg-olympia/sourdough.webp',
      alt: 'Sourdough bread cut in two pieces',
      width: 300,
      height: 300,
    },
    title: 'Classic Sourdough Bread',
    servings: 1,
    ingredients: [
      { amount: 1, unit: 'cup', description: 'sourdough starter' },
      { amount: 1.5, unit: 'cup', description: 'warm water' },
      { amount: 3.5, unit: 'cup', description: 'bread flour' },
      { amount: 2, unit: 'tsp', description: 'salt' },
      {
        amount: 0.25,
        unit: 'tsp',
        description: 'active dry yeast (optional, for a boost)',
        extras: 'Cornmeal for dusting',
      },
    ],
    instructions:
      'Begin by whispering your culinary intentions to the sourdough starter; it’s said to appreciate the encouragement. Combine it with warm water in a large bowl, stirring gently to blend. Whisk together the flour, salt, and yeast, if using, then add to the wet ingredients. Mix until a shaggy dough forms, the first step in its transformative journey. Cover the bowl with a damp cloth and let the dough rest, allowing time and yeast to work their magic, for about 12 to 18 hours. Once the dough has doubled in size and is dotted with bubbles, turn it out onto a floured surface. Fold it over itself a few times with care, then shape it into a round loaf. Sprinkle cornmeal on a baking sheet or parchment paper, place the dough atop, cover lightly, and let it rise again until puffy, about 2 hours. Preheat your oven to its highest setting, place a Dutch oven inside to heat as well. Carefully transfer the dough into the hot Dutch oven, cover, and bake for 30 minutes. Then, unveil and continue baking until golden and hollow-sounding when tapped, about 15 to 20 minutes more. Cool on a wire rack before slicing, revealing the alchemy of flour, water, and time.',
  },
  {
    image: {
      src: '/fed23d-grafiska-verktyg-olympia/focaccia.webp',
      alt: 'three pieces of focaccia with different toppings',
      width: 300,
      height: 300,
    },
    title: 'Quick Olive Oil & Rosemary Focaccia',
    servings: 1,
    ingredients: [
      { amount: 2.75, unit: 'cup', description: 'all-purpose flour' },
      { amount: 1, unit: 'tsp', description: 'sugar' },
      { amount: 2, unit: 'tsp', description: 'salt' },
      { amount: 1, unit: 'tbsp', description: 'fresh rosemary, chopped' },
      { amount: 1, unit: 'packet', description: 'instant yeast' },
      { amount: 1, unit: 'cup', description: 'warm water' },
      { amount: 0.25, unit: 'cup', description: 'olive oil (plus more for drizzling)' },
    ],
    instructions:
      'In a realm where time is of the essence, this focaccia is a loyal companion. In a large bowl, whisk together flour, sugar, salt, rosemary, and instant yeast. Stir in warm water and olive oil until the mixture becomes a sticky, unified mass. Cover with a warm, damp cloth and let it sit in a cozy corner of your kitchen to rise, about 1 hour. Once risen, coax the dough onto an oiled baking sheet, spreading it out to about ½ inch thick. Let it rest under a cloth for another 20 minutes as it puffs slightly. Meanwhile, preheat your oven to 400°F (200°C). With gentle fingers, dimple the surface of the dough, then anoint it with a generous drizzle of olive oil and a whisper of salt. Bake until golden and proud, about 20 minutes. Cool slightly, then cut into pieces as you savor the aromas of rosemary and olive oil dancing through your kitchen.',
  },
  {
    image: {
      src: '/fed23d-grafiska-verktyg-olympia/wholewheat2.webp',
      alt: 'whole wheat bread laid out on a baking towel',
      width: 300,
      height: 300,
    },
    title: 'Hearty Whole Wheat Bread',
    servings: 1,
    ingredients: [
      { amount: 2, unit: 'cup', description: 'whole wheat flour' },
      { amount: 1, unit: 'cup', description: 'all-purpose flour' },
      { amount: 0.25, unit: 'cup', description: 'honey' },
      { amount: 1, unit: 'packet', description: 'instant yeast' },
      { amount: 1.5, unit: 'cup', description: 'warm water' },
      { amount: 1, unit: 'tsp', description: 'salt' },
    ],
    instructions:
      'In the dance of health and flavor, this whole wheat bread is a graceful performer. Whisk together both flours, yeast, and salt in a large bowl. Warm the honey slightly, then stir it into the warm water. Add this sweet elixir to the flour mixture, stirring until a sticky dough forms. Transfer the dough to a floured surface and knead with love for about 10 minutes, until smooth and elastic. Place it in a greased bowl, cover, and let it rise in a warm spot until doubled, about 1 hour. Punch down the risen dough to release any fairy tales it might have dreamed up, then shape it into a loaf. Place it in a greased loaf pan, cover, and let it rise again until it has proudly crowned the rim of the pan, about 30 to 40 minutes. Preheat your oven to 375°F (190°C). Bake the loaf until it sings a golden tune when tapped on the bottom, about 35 minutes. Cool on a wire rack before slicing, revealing a heart of gold.',
  },
  {
    image: { src: '/fed23d-grafiska-verktyg-olympia/bagels.webp', alt: 'Bagels in a basket', width: 300, height: 300 },
    title: 'Sunrise Bagels',
    servings: 1,
    ingredients: [
      { amount: 4, unit: 'cup', description: 'bread flour' },
      { amount: 1, unit: 'tbsp', description: 'sugar' },
      { amount: 2, unit: 'tsp', description: 'salt' },
      { amount: 1, unit: 'packet', description: 'instant yeast' },
      { amount: 1.25, unit: 'cup', description: 'warm water' },
      {
        amount: 1,
        unit: 'tbsp',
        description: 'malt syrup or honey (for boiling water)',
        extras: 'Poppy seeds or sesame seeds for topping',
      },
    ],
    instructions:
      'In the quest for the perfect breakfast companion, these bagels shine like the morning sun. Start by combining flour, sugar, salt, and yeast in a large mixing bowl. Gradually add warm water, stirring until a stiff dough forms. Turn this promising beginning onto a floured surface and knead with dedication until smooth and elastic, about 10 minutes. Divide your dough into 8 equal pieces, shaping each into a smooth ball. Press a thumb through the center of each ball to form a ring, then gently stretch the dough until the hole is about 2 inches wide. Place these nascent sunrises on a lightly oiled baking sheet, cover, and let them rest for about 10 minutes, just enough time for them to puff slightly but not rise. Meanwhile, bring a large pot of water to a boil and add the malt syrup or honey. Boil each bagel for 1 minute on each side, which gives them their characteristic chewy texture. Return them to the baking sheet, now sprinkled with cornmeal if you have it, and adorn each bagel with your chosen seeds. Preheat your oven to 425°F (220°C). Bake the bagels until they are golden brown and beautiful, about 20-25 minutes. Let them cool on a wire rack before slicing. Serve with a generous spread of cream cheese and a sprinkle of joy, starting your day with a touch of homemade happiness.',
  },
  {
    image: {
      src: '/fed23d-grafiska-verktyg-olympia/bagette.webp',
      alt: 'Pieces of baguettes in a paper bag',
      width: 300,
      height: 300,
    },
    title: 'Baguettes',
    servings: 1,
    ingredients: [
      { amount: 4, unit: 'cup', description: 'bread flour' },
      { amount: 1.5, unit: 'tsp', description: 'salt' },
      { amount: 1, unit: 'tsp', description: 'sugar' },
      { amount: 1, unit: 'packet', description: 'active dry yeast' },
      { amount: 1.25, unit: 'cup', description: 'warm water', extras: 'Cornmeal for dusting' },
    ],
    instructions:
      'The baguette, a symbol of simplicity and elegance, begins with whisking flour, salt, sugar, and yeast in a large bowl. Gradually add warm water, mixing until a dough forms. Knead on a lightly floured surface until smooth and elastic, about 10 minutes. Place the dough in a greased bowl, cover, and let rise in a warm, draft-free area until doubled, about 1 hour. Gently deflate the dough, then divide into two pieces. Roll each into a long, slender loaf, reminiscent of a Parisian afternoon. Place the loaves on a baking sheet dusted with cornmeal, cover lightly, and let them rise again until puffy, about 30 minutes. With a sharp knife, make diagonal slashes along the tops of the loaves for that classic baguette look. Preheat your oven to 450°F (230°C). Bake the loaves until golden and crispy, about 25 minutes, listening for the crackle of the crust as they cool. Slice and serve as the perfect accompaniment to any meal, transporting you to the heart of France with every bite.',
  },
  {
    image: {
      src: '/fed23d-grafiska-verktyg-olympia/raisinbread.webp',
      alt: 'Sliced Cinnamon Raisin Bread on a cutting board',
      width: 300,
      height: 300,
    },
    title: 'Cinnamon Raisin Bread',
    servings: 1,
    ingredients: [
      { amount: 3, unit: 'cup', description: 'all-purpose flour' },
      { amount: 1, unit: 'packet', description: 'active dry yeast' },
      { amount: 1, unit: 'cup', description: 'warm milk' },
      { amount: 0.25, unit: 'cup', description: 'sugar' },
      { amount: 1, unit: 'tsp', description: 'salt' },
      { amount: 1, unit: 'cup', description: 'raisins' },
      { amount: 2, unit: 'tsp', description: 'ground cinnamon' },
    ],
    instructions:
      'For those mornings when only something sweet will do, cinnamon raisin bread offers comfort and joy. Start by dissolving yeast in warm milk, then add sugar, salt, and flour, stirring to form a soft dough. Knead on a floured surface, incorporating raisins and cinnamon as you fold the dough over itself, until everything is well mixed and the dough is smooth. Place the dough in a greased bowl, covering it with a clean kitchen towel, and let it rise in a warm spot until it has doubled in size, about 1 hour. Punch down the dough, then shape it into a loaf. Place it in a greased loaf pan, cover, and let it rise again until puffy, about 45 minutes. Preheat your oven to 350°F (175°C). Bake the bread until it’s golden and a toothpick inserted into the center comes out clean, about 30 to 35 minutes. Cool in the pan for a few minutes, then transfer to a wire rack to cool completely. Slice to reveal the swirls of cinnamon and raisins, a sweet start to any day.',
  },
];

export function adjustIngredientAmounts(recipe: Recipe, servings: number): Recipe {
  const newIngredientAmount = servings / recipe.servings;
  const adjustedIngredients = recipe.ingredients.map(ingredient => ({
    ...ingredient,
    amount: ingredient.amount ? ingredient.amount * newIngredientAmount : undefined,
  }));

  return { ...recipe, servings, ingredients: adjustedIngredients };
}
