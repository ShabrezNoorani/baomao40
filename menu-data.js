// ==================================================================
// == THIS IS YOUR NEW MENU CONTROL PANEL ==
// ==================================================================
// To add, remove, or edit a menu item, change the content below.
//
// - id: A unique name for the item (no spaces).
// - image: The path to the item's picture.
// - originalPrice: The normal price of the item.
// - discountEuros: The discount in euros. Set to 0 for no discount.
// - name: The item's name in English (en) and French (fr).
// - description: The item's description in English (en) and French (fr).
// - category: 'food' for items that can have discounts, 'drink' for others.
//
// ==================================================================

const menuData = [
  {
    id: 'onigiri-tamago',
    image: 'https://placehold.co/400x300/FFD700/FFFFFF?text=Onigiris+Tamago',
    originalPrice: 9.00,
    discountEuros: 0,
    name: {
      en: 'Onigiri Tamago (3pcs)',
      fr: 'Onigiris Tamago (3pcs)'
    },
    description: {
      en: 'Rice triangle sushi stuffed with egg mayonnaise and chives, Nori.',
      fr: 'Triangle de riz à sushi farci avec un appareil œuf mayonnaise et ciboulette, Nori.'
    },
    category: 'food'
  },
  {
    id: 'spring-rolls',
    image: 'assets/img/nems.png',
    originalPrice: 4.50,
    discountEuros: 1.00,
    name: {
      en: 'Spring Rolls (2pcs)',
      fr: 'Rouleaux de Printemps (2P)'
    },
    description: {
      en: 'Rice paper, rice vermicelli, bean sprouts, carrot, mint-coriander, shrimp, marinated chicken fillet, and peanuts.',
      fr: 'Galette de riz, vermicelles de riz, pousses de soja, carotte, menthe-coriandre, crevettes, filet de poulet mariné et cacahuètes.'
    },
    category: 'food'
  },
  {
    id: 'cabbage-salad',
    image: 'https://placehold.co/400x300/FFD700/FFFFFF?text=Salade+de+Chou',
    originalPrice: 2.50,
    discountEuros: 0,
    name: {
      en: 'Cabbage Salad',
      fr: 'Salade de Chou'
    },
    description: {
      en: 'White cabbage, sliced red onions, and carrots.',
      fr: 'Chou blanc, oignons rouges émincés et carottes.'
    },
    category: 'food'
  },
  {
    id: 'katsu-box',
    image: 'assets/img/box katsu.png',
    originalPrice: 8.00,
    discountEuros: 1.50,
    name: {
      en: 'Katsu Box',
      fr: 'Box Katsu'
    },
    description: {
      en: 'Box of 8 pieces of marinated panko-fried chicken. Served with your choice of spicy or sweet sauce.',
      fr: 'Boîte de 8 morceaux de poulet mariné frits panko. Servis avec au choix sauce spicy ou douce.'
    },
    category: 'food'
  },
  {
    id: 'nasi-goreng',
    image: 'assets/img/nasi goreng.png',
    originalPrice: 9.50,
    discountEuros: 0,
    name: {
      en: 'Nasi Goreng Chicken/Shrimp',
      fr: 'Nasi Goreng poulet/crevettes'
    },
    description: {
      en: 'Indonesian marinated rice stir-fried with minced chicken and shrimp, kecap manis, spices, and vegetables.',
      fr: 'Riz indonésien mariné sauté avec un émincé de poulet et crevettes, du kecap manis, épices et légumes.'
    },
    category: 'food'
  },
  {
    id: 'gua-bao-dongpo',
    image: 'assets/img/le porc dongpo.png',
    originalPrice: 10.00,
    discountEuros: 2.00,
    name: {
      en: 'Gua Bao - Pork Dongpo',
      fr: 'Gua Bao - Porc Dongpo'
    },
    description: {
      en: 'Fluffy steamed bao bun with slow-cooked pork belly.',
      fr: 'Bao bun moelleux vapeur, garni de poitrine de porc mijotée.'
    },
    category: 'food'
  },
  {
    id: 'gua-bao-sai-gok',
    image: 'assets/img/le sai gok.png',
    originalPrice: 10.00,
    discountEuros: 0,
    name: {
      en: 'Gua Bao - Sai Gok',
      fr: 'Gua Bao - Saï Gok'
    },
    description: {
      en: 'Fluffy steamed bao bun with sliced lemongrass pork sausage.',
      fr: 'Bao bun moelleux vapeur, garni de saucisse de porc à la citronnelle tranchée.'
    },
    category: 'food'
  },
  {
    id: 'gua-bao-veggie',
    image: 'https://placehold.co/400x300/FFD700/FFFFFF?text=Gua+Bao+Veggie',
    originalPrice: 10.00,
    discountEuros: 0,
    name: {
      en: 'Gua Bao - Veggie',
      fr: 'Gua Bao - Veggie'
    },
    description: {
      en: 'Fluffy steamed bao bun with Japanese Shimeji mushrooms, seasoned batter, and panko.',
      fr: 'Bao bun moelleux vapeur, garni de champignons japonais Shimeji avec une pâte à frire assaisonnée et panure panko.'
    },
    category: 'food'
  },
    {
    id: 'gua-bao-katsu',
    image: 'https://placehold.co/400x300/FFD700/FFFFFF?text=Gua+Bao+Katsu',
    originalPrice: 10.00,
    discountEuros: 0,
    name: {
      en: 'Gua Bao - Katsu',
      fr: 'Gua Bao - Katsu'
    },
    description: {
      en: 'Fluffy steamed bao bun with pieces of marinated panko-fried chicken.',
      fr: 'Bao bun moelleux vapeur, garni de morceaux de poulet mariné frits panko.'
    },
    category: 'food'
  },
  {
    id: 'chicken-poke',
    image: 'https://placehold.co/400x300/FFD700/FFFFFF?text=Chicken+Poke',
    originalPrice: 12.00,
    discountEuros: 0,
    name: {
      en: 'Chicken Poké',
      fr: 'Poké Poulet'
    },
    description: {
      en: 'Marinated panko-fried chicken pieces served on a bowl of sushi rice seasoned with ginger, with marinated and fresh vegetables, and sauce.',
      fr: 'Morceaux de poulet marinés panés panko et frits servis sur un bol de riz à sushi assaisonné au gingembre avec légumes marinés, frais et sauce.'
    },
    category: 'food'
  },
  {
    id: 'bo-bun',
    image: 'assets/img/bo bun.png',
    originalPrice: 11.00,
    discountEuros: 2.50,
    name: {
      en: 'Bò Bún',
      fr: 'Bò bún'
    },
    description: {
      en: 'Fresh rice vermicelli salad seasoned with spring roll sauce, accompanied by fresh and marinated vegetables, served with marinated beef.',
      fr: 'Salade fraîche à base de vermicelles de riz assaisonnée avec de la sauce nem, accompagnée de légumes frais et marinés, servis avec un émincé de bœuf mariné.'
    },
    category: 'food'
  },
  {
    id: 'dessert-of-moment',
    image: 'https://placehold.co/400x300/FFD700/FFFFFF?text=Dessert',
    originalPrice: 4.50,
    discountEuros: 0,
    name: {
      en: 'Dessert of the Moment',
      fr: 'Dessert du moment'
    },
    description: {
      en: "Ask our team for today's special sweet treat!",
      fr: 'Demandez à notre équipe notre douceur du jour !'
    },
    category: 'food'
  },
  {
    id: 'drinks',
    image: 'https://placehold.co/400x300/FFD700/FFFFFF?text=Boissons',
    name: {
      en: 'Drinks',
      fr: 'Boissons'
    },
    description: {
      en: `Soda: €2.50<br>
           Water (33cl): €1.00<br>
           Bubble Tea: €5.50<br>
           Homemade Iced Tea: €4.00<br>
           Coffee: €1.00`,
      fr: `Soda: €2.50<br>
           Eau (33cl): €1.00<br>
           Bubble Tea: €5.50<br>
           Thé Glacé maison: €4.00<br>
           Café: €1.00`
    },
    category: 'drink'
  }
];
