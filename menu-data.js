// ==================================================================
// == THIS IS YOUR NEW MENU CONTROL PANEL ==
// ==================================================================
// To add, remove, or edit a menu item, change the content below.
//
// - id: A unique name for the item (no spaces).
// - image: The path to the item's picture. Use a placeholder for now if you don't have one.
// - originalPrice: The normal price of the item.
// - discountEuros: The discount in euros. Set to 0 for no discount.
// - name: The item's name in English (en) and French (fr).
// - description: The item's description in English (en) and French (fr).
// - category: 'food' for items that can have discounts, 'drink' for others.
//
// ==================================================================

const menuData = [
  // === STARTERS ===
  {
    id: 'imperial-rolls',
    image: 'https://placehold.co/400x300/f97316/FFFFFF?text=Bient%C3%B4t',
    originalPrice: 4.50,
    discountEuros: 0,
    name: {
      en: 'Imperial Rolls (4pcs)',
      fr: 'Rouleaux Impériaux (4Pcs)'
    },
    description: {
      en: 'Similar to nems with a samosa wrapper. Choice of Chicken (ginger, galangal, lemongrass) or Pork (5 spices).',
      fr: 'Similaires aux nems avec une galette à samossas. Choix: Poulet (gingembre, galanga, citronnelle) ou Porc (5 épices).'
    },
    category: 'food'
  },
  {
    id: 'spring-rolls',
    image: 'assets/img/nems.png',
    originalPrice: 4.50,
    discountEuros: 0,
    name: {
      en: 'Spring Rolls (2pcs)',
      fr: 'Rouleaux de Printemps (2Pcs)'
    },
    description: {
      en: 'Rice paper, rice vermicelli, bean sprouts, carrot, mint-coriander, shrimp, and marinated chicken fillet.',
      fr: 'Galette de riz, vermicelles de riz, pousses de soja, carotte, menthe-coriandre, crevettes, filet de poulet mariné.'
    },
    category: 'food'
  },
  {
    id: 'cabbage-salad',
    image: 'https://placehold.co/400x300/f97316/FFFFFF?text=Bient%C3%B4t',
    originalPrice: 2.50,
    discountEuros: 0,
    name: {
      en: 'Cabbage Salad',
      fr: 'Salade de Chou'
    },
    description: {
      en: 'White cabbage and minced red onions seasoned with rice vinegar, sesame oil, and mayonnaise.',
      fr: 'Chou blanc et oignons rouges émincés assaisonnés au vinaigre de riz, huile de sésame et mayonnaise.'
    },
    category: 'food'
  },
  {
    id: 'prawn-crackers',
    image: 'https://placehold.co/400x300/f97316/FFFFFF?text=Bient%C3%B4t',
    originalPrice: 1.00,
    discountEuros: 0,
    name: {
      en: 'Prawn Crackers',
      fr: 'Chips de Crevettes'
    },
    description: {
      en: 'Crispy crackers with a shrimp flavor.',
      fr: 'Chips croustillantes au goût de crevette.'
    },
    category: 'food'
  },
  {
    id: 'katsu-box',
    image: 'assets/img/box katsu.png',
    originalPrice: 5.50,
    discountEuros: 0,
    name: {
      en: 'Katsu Box (5pcs)',
      fr: 'Box Katsu (5Pcs)'
    },
    description: {
      en: 'Box of 5 pieces of marinated panko-fried chicken. Served with your choice of spicy or sweet sauce.',
      fr: 'Boite de 5 morceaux de poulet mariné frits panko. Servis avec au choix sauce spicy ou douce.'
    },
    category: 'food'
  },
  // === MAIN DISHES ===
  {
    id: 'gua-bao-saigok',
    image: 'assets/img/gua_bao_saigok.jpg', // <-- YOUR NEW IMAGE
    originalPrice: 10.00,
    discountEuros: 2.00, // Example discount
    name: {
      en: 'Gua Bao - Saï Gok',
      fr: 'Gua Bao - Saï Gok'
    },
    description: {
      en: 'Fluffy steamed bao bun with sliced lemongrass pork sausage, assorted vegetables, and choice of sweet or spicy sauce.',
      fr: 'Bao bun moelleux vapeur, saucisse de porc à la citronnelle tranchée, assortiment de légumes et sauces au choix douce ou spicy.'
    },
    category: 'food'
  },
  {
    id: 'gua-bao-veggie',
    image: 'https://placehold.co/400x300/f97316/FFFFFF?text=Bient%C3%B4t',
    originalPrice: 9.50,
    discountEuros: 0,
    name: {
      en: 'Gua Bao - Veggie',
      fr: 'Gua Bao - Veggie'
    },
    description: {
      en: 'Fluffy steamed bao bun with Japanese Shimeji mushrooms in a seasoned panko batter, assorted vegetables, and choice of sweet or spicy sauce.',
      fr: 'Bao bun moelleux vapeur, champignons japonais Shimeji avec une pâte à frire assaisonnée et panure panko, assortiment de légumes et sauces au choix douce ou spicy.'
    },
    category: 'food'
  },
  {
    id: 'gua-bao-katsu',
    image: 'https://placehold.co/400x300/f97316/FFFFFF?text=Bient%C3%B4t',
    originalPrice: 9.50,
    discountEuros: 0,
    name: {
      en: 'Gua Bao - Katsu',
      fr: 'Gua Bao - Katsu'
    },
    description: {
      en: 'Fluffy steamed bao bun with pieces of marinated panko-fried chicken, assorted vegetables, and choice of sweet or spicy sauce.',
      fr: 'Bao bun moelleux vapeur, morceaux de poulet mariné frits panko, assortiment de légumes et sauces au choix douce ou spicy.'
    },
    category: 'food'
  },
  {
    id: 'chicken-katsu-bowl',
    image: 'assets/img/poke_bowl_katsu.jpg', // <-- YOUR NEW IMAGE
    originalPrice: 10.50,
    discountEuros: 1.50, // Example discount
    name: {
      en: 'Chicken Katsu Bowl',
      fr: 'Katsudon'
    },
    description: {
      en: 'Marinated panko-fried chicken pieces served on a bowl of rice with marinated and fresh vegetables and sauce.',
      fr: 'Morceaux de poulet marinés panés panko et frits servis sur un bol de riz accompagnés de légumes marinés et frais et sauce.'
    },
    category: 'food'
  },
  {
    id: 'nasi-goreng',
    image: 'assets/img/nasi goreng.png',
    originalPrice: 9.50,
    discountEuros: 0,
    name: {
      en: 'Nasi Goreng (Chicken/Shrimp)',
      fr: 'Nasi Goreng (Poulet/Crevettes)'
    },
    description: {
      en: 'Indonesian marinated rice stir-fried with minced chicken and shrimp, kecap manis, spices, and vegetables.',
      fr: 'Riz indonésien mariné sauté avec un émincé de poulet et crevettes, du kecap manis, épices et légumes.'
    },
    category: 'food'
  },
  {
    id: 'bo-bun',
    image: 'assets/img/bo bun.png',
    originalPrice: 9.00,
    discountEuros: 0,
    name: {
      en: 'Bò Bún',
      fr: 'Bò Bún'
    },
    description: {
      en: 'Fresh rice vermicelli salad seasoned with spring roll sauce, with fresh/marinated vegetables, and served with pieces of imperial rolls.',
      fr: 'Salade fraiche à base de vermicelles de riz assaisonnée avec de la sauce nem, accompagnée de légumes frais et marinés, servis avec des rouleaux impériaux en morceaux.'
    },
    category: 'food'
  },
  // === DEALS & DRINKS ===
  {
    id: 'bao-mao-deal',
    image: 'https://placehold.co/400x300/f97316/FFFFFF?text=Formule%20Midi',
    originalPrice: 12.00,
    discountEuros: 0,
    name: {
      en: 'Bao-Mao Deal',
      fr: 'Formule Bao-Mao'
    },
    description: {
      en: 'A Gua Bao of your choice + Prawn Crackers + a Drink.',
      fr: 'Un Gua bao au choix + Chips de crevettes + une Boisson.'
    },
    category: 'food'
  },
  {
    id: 'drinks',
    image: 'https://placehold.co/400x300/cccccc/FFFFFF?text=Boissons',
    name: {
      en: 'Drinks',
      fr: 'Boissons'
    },
    description: {
      en: `Coca-Cola (33cl): €2.50<br>
           Orangina (33cl): €2.50<br>
           Ice Tea (33cl): €2.50<br>
           Juice (25cl): €2.50<br>
           Oasis (33cl): €2.50<br>
           Perrier (33cl): €2.00`,
      fr: `Coca-Cola (33cl): 2.50€<br>
           Orangina (33cl): 2.50€<br>
           Ice Tea (33cl): 2.50€<br>
           Jus (25cl): 2.50€<br>
           Oasis (33cl): 2.50€<br>
           Perrier (33cl): 2.00€`
    },
    category: 'drink'
  }
];
