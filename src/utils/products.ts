import product1 from '../assets/products/Burberry.jpg';
import product2 from '../assets/products/CalvinKlein.jpg';
import product3 from '../assets/products/CarolinaHerrera.jpg';
import product4 from '../assets/products/Chloe.jpg';
import product5 from '../assets/products/Dior.jpg';
import product6 from '../assets/products/GiorgioArmani.jpg';
import product7 from '../assets/products/Guerlain.jpg';
import product8 from '../assets/products/Hermes.jpg';
import product9 from '../assets/products/JeanPaulGaultier.jpg';
import product10 from '../assets/products/Mugler.jpg';
import product11 from '../assets/products/NewJeanPaulGaultier.jpg';
import product12 from '../assets/products/Paco Rabanne.jpg';
import product13 from '../assets/products/Prada-Milano.jpg';
import product14 from '../assets/products/Ubaya.jpg';
import product15 from '../assets/products/Valentino.jpg';
import product16 from '../assets/products/YvesSaintLaurent.jpg';
import product17 from '../assets/products/Zaina.jpg';
import product18 from '../assets/products/Ralph Lauren.jpg';

export interface ProductData {
  id: number;
  productName: string;
  type: string;
  price: number;
  productImage: string;
  descriptions: string;
  discount: number;
}

export const PRODUCTS: ProductData[] = [
  {
    id: 1,
    productName: 'Burberry Goddess',
    type: 'Apa De Parfum ',
    price: 99.99,
    discount: 119.99,
    productImage: product1,
    descriptions:
      "Burberry Goddess Eau de Parfum is a delightful choice for lovers of gourmand and aromatic scents. This unique scent is driven by a powerful trio of vanillas, which add a sweet and sensual note. At the top, you'll feel an infusion of vanilla with woody undertones that add a warm and refined note. At the heart of the fragrance is a richly sweet vanilla caviar that adds a more intense aroma and tint. At the base, we find a vanilla absolute enriched with bright lavender for an intriguing and balanced combination. Burberry Goddess Eau de Parfum will captivate you with its captivating and refined vanilla aroma, giving you a special and authentic fragrance experience.",
  },
  {
    id: 2,
    productName: 'CalvinKlein',
    type: 'My Euphoria',
    price: 89.99,
    discount: 109.99,
    productImage: product2,
    descriptions:
      "My Euphoria is an eau de parfum that exudes femininity. Euphoria is a seductive and irresistible women's fragrance that brings the promise of unforgettable memories, awakens your zest for life and inspires you to gain new experiences.Calvin Klein fragrance is inspired by the simple yet elegant orchid. The scent opens with seductive persimmon fruit and pomegranate. The eau de parfum then unfolds in the heart in intense tones of lotus blossom and orchid, with a base of liquid amber and luxurious mahogany.",
  },
  {
    id: 3,
    productName: 'CarolinaHerrera',
    type: 'BAD BOY',
    price: 69.99,
    discount: 99.99,
    productImage: product3,

    descriptions:
      'Bold, mysterious, seductive and free. The new eau de parfum from Carolina Herrera is aimed at men who are not afraid to take risks. Bad Boy is confident and embodies all the contrasting sides of his masculine personality, a man who is brave yet vulnerable, strong yet sensitive. With seductive notes of grapefruit contrasted with notes of musk, sage and leather, Bad Boy is sophisticated and complex. Dare to create your own rules and attract attention like a lightning storm wherever you go!',
  },
  {
    id: 4,
    productName: 'Chloe',
    type: "Chloe L'eau de Parfum Lumineuse",
    price: 59.99,
    discount: 89.99,
    productImage: product4,

    descriptions:
      'The chords proposed by Chloé Eau de Parfum offer apparent contrasts that finally intertwine in a poetry of aromas, in a composition that enchants with elegance and boldness. The very versatile scent is intended for everyday use, being more than suitable and becoming your signature fragrance. With a light and fresh, yet rewarding and captivating fragrance Chloé, launched in 2008, departs from its timid predecessor. Following the bold, free-spirited designer line, this fragrance is feminine, but in an untraditional way.',
  },
  {
    id: 5,
    productName: 'Dior',
    type: "J'adore",
    price: 109.99,
    discount: 119.99,
    productImage: product5,

    descriptions:
      "A living legend of the perfume world, J'Adore is a symbol of classic femininity and absolute beauty over which time has no say. Deeply floral, elegant and sophisticated, J'Adore eau de toilette has a luminous composition in which sensual citrus notes of mandarin and orange blossom, orchid, rose, amaranth, blackberry and musk are sensually blended. For those moments when you want to experience what it's like to be a true goddess.",
  },
  {
    id: 6,
    productName: 'GiorgioArmani',
    type: 'Si Refillable Eau De Parfum Intense',
    price: 89.99,
    discount: 109.99,
    productImage: product6,
    descriptions:
      'The new Sì Eau de Parfum Intense bottle is designed like a jewel, being for the first time refillable. Made with a unique savoir-faire of bottle making, the emblematic shape of the Si bottle is now embraced by the perfume logo in a striking, engraved gold. It makes a powerful statement in inviting every woman to say Yes.',
  },
  {
    id: 7,
    productName: 'Guerlain',
    type: 'Aqua Allegoria Oud Yuzu Forte',
    price: 119.99,
    discount: 139.99,
    productImage: product7,
    descriptions:
      'The Aqua Allegoria fragrance collection celebrates the wonders of the world. Each creation pays homage to the beauty of nature and leads us to the discovery of exceptional raw materials and notes, enhanced by our explorer perfumers. Discover Oud Yuzu Forte, the unexpected contrast between the sacred swirls of oud wood and the raucous tartness of yuzu. Wood and citrus meet to deliver a fragrance that juggles light and shade. "Oud Yuzu Forte is the surprising illumination of sacred and mysterious oud wood, laced with the spicy freshness of yuzu." - Delphine Jelk, perfumer Guerlain Aqua Allegoria Forte, the intense collection, is a warm and invaluable journey into the heart of the wonders of the world: Eaux de Parfum celebrating the intense beauty of nature, revealed by the golden rays of the setting sun. A powerful symbol of Guerlain \'s commitment to the planet, Aqua Allegoria Forte fragrances contain over 90% natural origin*. ',
  },
  {
    id: 8,
    productName: 'Hermes',
    type: "TWILLY D'HERMES",
    price: 99.99,
    discount: 110.99,
    productImage: product8,
    descriptions:
      "Designed by Christine Nagel for the Hermès girls, Tutti Twilly d'Hermès eau de parfum is a tribute to their free spirit, their bold and relaxed attitude and their plurality. All different, they are all found in this fragrance. A floral and fruity eau de parfum with the generously blended character of sweet ginger blossom, soft lychee and enveloping musk. Designed by Florence Manlik, the iconic lantern bottle is square-shaped and decorated with a reverse shade of lychee red. The white cap is wrapped in a silk ribbon designed by Carine Brancowitz. Being hand-tied, each silk ribbon is unique. The name of the Twilly d'Hermès fragrance family evokes the House of Hermès' expertise in silk: twilly is a cheerful, multicoloured ribbon, a version of the House's square silk scarf.",
  },
  {
    id: 9,
    productName: 'JeanPaulGaultier',
    type: 'Divine',
    price: 87.99,
    discount: 96.99,
    productImage: product9,
    descriptions:
      'The bottle of the new Divine perfume preserves Jean Paul Gaultier\'s creative heritage, inspired by the sensual bottle in the shape of a female torso, present in all editions of the "Classique" fragrance. This bottle is complemented by another iconic symbol of the designer: the conical corset, a piece of clothing created by Jean Paul Gaultier for Madonna\'s "Blond Ambition" world tour. Divine opens with notes of lily, marshmallow, marine notes and white flowers. These notes combine harmoniously to create a fragrance full of refinement and elegance. The lily notes add a delicate and sophisticated floral note, while the marshmallow adds a subtle sweetness. Marine notes bring a refreshing freshness, and white flower adds a touch of femininity and elegance.',
  },
  {
    id: 10,
    productName: 'Mugler',
    type: 'Alien Goddess Supra Florale',
    price: 109.99,
    discount: 120.99,
    productImage: product10,
    descriptions:
      'Alien Goddess Supra Florale is a complex fragrance with multiple layers and olfactory nuances that aims to create a unique and memorable experience for the wearer. The eau de parfum evokes a unique combination of elements, from the life force of cactus blossoms to the succulent breeze of pears to the white flowers of jasmine and strawberry, with slightly salty nuances. It suggests a complex composition, with floral and fruity notes blending harmoniously. These aromas are underscored by final notes of amber and mineral moss, which add depth and persistence to the fragrance.',
  },
  {
    id: 11,
    productName: 'NewJeanPaulGaultier',
    type: 'Le Male Elixir Parfum',
    price: 49.99,
    discount: 79.99,
    productImage: product11,
    descriptions:
      "Le Male Elixir fragrance is an intense and sensual olfactory experience, perfect for men who want to enhance their sex appeal and attract attention in an irresistible way. The design of the bottle in the shape of a man's torso, decorated with elegant golden stripes, is an expression of masculinity and attractiveness. It is reminiscent of a sailor shirt and adds an element of originality and style to the bottle. The composition of this fragrance seems to be rich and varied. From tropical tonka bean aromas to notes of lavender, mint and bergamot, the fragrance promises an intriguing olfactory journey. Its complex composition and distinctive packaging make this fragrance a great option for those who want to feel irresistible and confident.",
  },
  {
    id: 12,
    productName: 'Paco Rabanne',
    type: 'Fame Parfum',
    price: 78.99,
    discount: 98.99,
    productImage: product12,
    descriptions:
      "Created with the utmost refinement, FAME Parfum de la Rabanne is responsibly formulated with the most precious, ethically sourced ingredients. Precious jasmine seduces you at first sight, and the scent of incense simply mesmerizes you. The final notes of mysterious musk intensify and entice you! Inspired by Rabanne's legendary Rabanne dress, the new Fame fragrance is an irresistible and daring new design piece. A precious, iconic jewel, a glossy black dress in keeping with the intensity of the perfume inside.",
  },
  {
    id: 13,
    productName: 'Prada-Milano',
    type: 'Paradoxe Intense',
    price: 67.99,
    discount: 89.99,
    productImage: product13,
    descriptions:
      "Prada Paradoxe Intense women's fragrance becomes your new addiction that you will never give up. It charms you from the very first moment and convinces you time and time again that it more than deserves its place on your dressing table.",
  },
  {
    id: 14,
    productName: 'Ubaya',
    type: 'Rain Breeze',
    price: 19.99,
    discount: 35.99,
    productImage: product14,
    descriptions:
      'Let your senses be awakened by RAIN BREEZE, a scent that will bring you the promise of rain, charged with deep sensations. An ode to a love story as rare as rain in the desert, as passionate as a storm, as intense as the connection between heaven and earth. Soar above the clouds in the thrilling adventure of your love story, with a blend of oud that melts into energizing cardamom and inhale the freshness-filled aura of the green blend built around notes of patchouli. UBAYA will deepen your passion for oriental fragrances with the new collection that will draw on your skin a fascinating story of the Hidden Oasis, the place that reveals itself only to those who truly feel, deeply and intensely. Dare to dream with Ubaya White Collection: Silk Shadows, Magnetic Shine and Rain Breeze.',
  },
  {
    id: 15,
    productName: 'Valentino',
    type: 'Born In Rome Coral Donna',
    price: 75.99,
    discount: 95.99,
    productImage: product15,
    descriptions:
      'Intense and bright, the fragrance begins with a juicy and refreshing kiwi accord, nuanced by orange essence. As it moves towards the heart of the fragrance, an infusion of jasmine flowers creates a modern bouquet that accentuates femininity. Finally, Ambrette seeds bring warmth and softness to the fragrance, complemented by the woody accord of musk. Inspired by the beautiful colours of the sunset, the fragrance bottle perfectly describes the way the sun falls on the streets of Rome at the most magical hour of the day.',
  },
  {
    id: 16,
    productName: 'YvesSaintLaurent',
    type: 'Libre',
    price: 40.99,
    discount: 59.99,
    productImage: product16,
    descriptions:
      'Yves Saint Laurent urges you to break down any barriers and live your life by your own rules. Libre is the scent of freedom, a floral fragrance that focuses on lavender, jasmine and orange blossom. These are enveloped by mandarin, blackcurrant, cedarwood, musk and Madagascar vanilla. The bottle containing the elixir of liberation is decorated with exquisite gold and black elements. Be brave and bold with the new Yves Saint Laurent Libre fragrance!',
  },
  {
    id: 17,
    productName: 'Stories Of Oud',
    type: 'Zaina',
    price: 39.99,
    discount: 59.99,
    productImage: product17,
    descriptions:
      'Zaina is a fragrance that will awaken the most seductive version of you, calling you into a world full of mystery and sensuality. The blend of oud and the sweetness of rose will captivate your senses, while the blend of bergamot and amber will draw you into a dance of passion and desire. Discover Stories of Oud, an opulent collection of oriental fragrances inspired by the rich culture and breathtaking landscapes of the Middle East. A series of stories united by the rare and precious scent of oud, with each fragrance representing a celebration of the emotions that make life truly extraordinary. Choose the story you want to live: Intisar (triumphant), Alaïa (sublime), Zaina (enchanting), Emaan (victorious), Amyr (noble).',
  },
  {
    id: 18,
    productName: 'Ralph Lauren',
    type: 'Polo Red Parfum',
    price: 109.99,
    discount: 99.99,
    productImage: product18,
    descriptions:
      "Polo Red eau de parfum is a seductive and vibrant fragrance, part of Ralph Lauren's Polo Red family. This fragrance is created from an enticing blend of rich, natural flavours, giving it a distinct and memorable character. The main notes include essences of tree, ginger and aromatic sage, and their combination exudes warm sensuality and pure sophistication. Together, these fragrances create a masculine and charming scent that imparts elegance and attracts the attention of others.",
  },
];
