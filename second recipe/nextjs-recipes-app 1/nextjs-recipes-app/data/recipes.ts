export interface Recipe {
  id: string;
  title: string;
  image: string;
  description: string;
  ingredients: string[];
  steps: string[];
  youtubeId: string;
  prepMinutes?: number;
  cookMinutes?: number;
  baseServings?: number;
}

const recipes: Recipe[] = [
  {
    id: "churros",
    title: "Churros",
    image: "/churros-1.webp",
    description: "Crispy fried dough coated in cinnamon sugar, perfect with chocolate sauce!",
    ingredients: ["1 cup water", "2 1/2 tbsp sugar", "1/2 tsp salt", "2 tbsp oil", "1 cup flour", "Oil for frying", "Cinnamon sugar"],
    steps: [
      "Mix the Dough: Combine flour, water, butter, and sugar in a bowl until smooth.",
      "Heat Oil: Heat oil in a pan to 180°C.",
      "Fry Churros: Pipe dough into hot oil and fry until golden brown.",
      "Add Vanilla & Egg: Add vanilla and egg to the flour mixture, then blend immediately.",
      "Blend the Mixture: Blend until smooth.",
      "Pipe the Dough: Transfer to a piping bag and pipe into oil.",
      "Fry Until Golden: Fry for 2 minutes per side.",
      "Drain Excess Oil: Remove excess oil with paper towels.",
      "Coat in Cinnamon Sugar: Roll fried churros in cinnamon sugar.",
      "Serve & Enjoy: Serve warm with chocolate sauce."
    ],
    youtubeId: "VYqoOiQsV0A",
    prepMinutes: 15,
    cookMinutes: 10,
    baseServings: 4,
  },
  {
    id: "pasta",
    title: "Creamy Garlic Pasta",
    image: "/pasta.jpg",
    description: "A rich and comforting pasta tossed in creamy garlic sauce with herbs and cheese.",
    ingredients: ["200g pasta", "2 cloves garlic", "2 tbsp butter", "100ml cream", "Parmesan cheese", "Parsley"],
    steps: [
      "Boil the Pasta: Cook pasta in salted boiling water until al dente. Drain and set aside.",
      "Sauté Garlic: Melt butter, add garlic, sauté until fragrant.",
      "Add Cream and Seasoning: Pour in cream, salt, pepper, and herbs. Mix well.",
      "Combine Pasta: Add boiled pasta to sauce and toss.",
      "Add Cheese: Sprinkle Parmesan and stir until melted.",
      "Serve Hot: Garnish with parsley and serve with garlic bread."
    ],
    youtubeId: "zSCTYKUeLQg",
    prepMinutes: 10,
    cookMinutes: 15,
    baseServings: 2,
  },
  {
    id: "chocolate-cake",
    title: "Chocolate Cake",
    image: "/cake.jpg",
    description: "A soft, moist, and rich chocolate cake that melts in your mouth.",
    ingredients: ["200g Flour", "200g Sugar", "50g Cocoa", "3 Eggs", "100g Butter", "Chocolate ganache"],
    steps: [
      "Prepare Dry Ingredients: Mix flour, cocoa powder, baking soda, and sugar.",
      "Combine Wet Ingredients: Whisk eggs, oil, buttermilk, and vanilla.",
      "Mix Batter: Combine wet and dry ingredients, add hot water.",
      "Bake: Pour batter into greased pan and bake 30-35 min.",
      "Make Ganache: Heat cream, pour over chopped chocolate, stir until smooth.",
      "Frost and Serve: Spread ganache over cooled cake and serve."
    ],
    youtubeId: "bT1Qnk1B8Oo",
    prepMinutes: 20,
    cookMinutes: 30,
    baseServings: 8,
  },
  {
    id: "pizza",
    title: "Margherita Pizza",
    image: "/pizza.jpg",
    description: "Classic Italian pizza with fresh mozzarella, basil, and tomato sauce.",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Fresh basil", "Olive oil", "Salt"],
    steps: [
      "Prepare Dough: Roll out pizza dough into a circle.",
      "Add Sauce: Spread tomato sauce evenly over the dough.",
      "Add Cheese: Place mozzarella slices on top of the sauce.",
      "Bake: Bake in a hot oven for 10-12 minutes until crust is golden.",
      "Add Basil: Top with fresh basil leaves after baking.",
      "Serve: Drizzle with olive oil and serve hot."
    ],
    youtubeId: "dQw4w9WgXcQ",
    prepMinutes: 30,
    cookMinutes: 12,
    baseServings: 4,
  },
  {
    id: "sushi",
    title: "California Roll",
    image: "/california.jpg",
    description: "Delicious sushi roll with crab, avocado, and cucumber.",
    ingredients: ["Sushi rice", "Nori sheets", "Crab meat", "Avocado", "Cucumber", "Sesame seeds"],
    steps: [
      "Cook Rice: Prepare sushi rice and season with rice vinegar.",
      "Prepare Fillings: Slice avocado and cucumber into strips.",
      "Roll Sushi: Place nori on bamboo mat, add rice and fillings.",
      "Roll Tightly: Roll the sushi tightly using the bamboo mat.",
      "Slice: Cut the roll into bite-sized pieces.",
      "Serve: Arrange on plate and sprinkle with sesame seeds."
    ],
    youtubeId: "dQw4w9WgXcQ",
    prepMinutes: 45,
    cookMinutes: 0,
    baseServings: 4,
  },
  {
    id: "burger",
    title: "Classic Burger",
    image: "/burger.jpg",
    description: "Juicy beef burger with all the classic toppings.",
    ingredients: ["Beef patty", "Burger buns", "Lettuce", "Tomato", "Onion", "Cheese", "Pickles"],
    steps: [
      "Shape Patties: Form ground beef into patties, season with salt and pepper.",
      "Cook Patties: Grill or pan-fry patties for 4-5 minutes per side.",
      "Toast Buns: Lightly toast the burger buns.",
      "Build Burger: Layer lettuce, tomato, onion, and pickles on bottom bun.",
      "Add Patty: Place cooked patty and cheese on top.",
      "Serve: Top with bun and serve with fries."
    ],
    youtubeId: "dQw4w9WgXcQ",
    prepMinutes: 15,
    cookMinutes: 10,
    baseServings: 4,
  },
];

export default recipes;
