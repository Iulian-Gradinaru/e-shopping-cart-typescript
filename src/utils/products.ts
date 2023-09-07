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

export interface ProductData {
  id: number;
  productName: string;
  price: number;
  productImage: string;
  descriptions: string;
  discount: number;
}

export const PRODUCTS: ProductData[] = [
  {
    id: 1,
    productName: 'Burberry',
    price: 99.99,
    discount: 119.99,
    productImage: product1,
    descriptions:
      "Burberry Goddess Eau de Parfum is a delightful choice for lovers of gourmand and aromatic scents. This unique scent is driven by a powerful trio of vanillas, which add a sweet and sensual note. At the top, you'll feel an infusion of vanilla with woody undertones that add a warm and refined note. At the heart of the fragrance is a richly sweet vanilla caviar that adds a more intense aroma and tint. At the base, we find a vanilla absolute enriched with bright lavender for an intriguing and balanced combination. Burberry Goddess Eau de Parfum will captivate you with its captivating and refined vanilla aroma, giving you a special and authentic fragrance experience.",
  },
  {
    id: 2,
    productName: 'CalvinKlein',
    price: 89.99,
    discount: 109.99,
    productImage: product2,
    descriptions: 'Descriere pentru Calvin Klein...',
  },
  {
    id: 3,
    productName: 'CarolinaHerrera',
    price: 69.99,
    discount: 99.99,
    productImage: product3,

    descriptions: 'Descriere pentru Calvin Klein...',
  },
  {
    id: 4,
    productName: 'Chloe',
    price: 59.99,
    discount: 89.99,
    productImage: product4,

    descriptions: 'Descriere pentru Calvin Klein...',
  },
  {
    id: 5,
    productName: 'Dior',
    price: 109.99,
    discount: 119.99,
    productImage: product5,

    descriptions: 'Descriere pentru Calvin Klein...',
  },
  {
    id: 6,
    productName: 'GiorgioArmani',
    price: 89.99,
    discount: 109.99,
    productImage: product6,
    descriptions: 'Descriere pentru Calvin Klein...',
  },
  {
    id: 7,
    productName: 'Guerlain',
    price: 119.99,
    discount: 139.99,
    productImage: product7,
    descriptions: 'Descriere pentru Calvin Klein...',
  },
  {
    id: 8,
    productName: 'Hermes',
    price: 99.99,
    discount: 110.99,
    productImage: product8,
    descriptions: 'Descriere pentru Calvin Klein...',
  },
  {
    id: 9,
    productName: 'JeanPaulGaultier',
    price: 87.99,
    discount: 96.99,
    productImage: product9,
    descriptions: 'Descriere pentru Calvin Klein...',
  },
  {
    id: 10,
    productName: 'Mugler',
    price: 109.99,
    discount: 120.99,
    productImage: product10,
    descriptions: 'Descriere pentru Calvin Klein...',
  },
  {
    id: 11,
    productName: 'NewJeanPaulGaultier',
    price: 49.99,
    discount: 79.99,
    productImage: product11,
    descriptions: 'Descriere pentru Calvin Klein...',
  },
  {
    id: 12,
    productName: 'Paco Rabanne',
    price: 78.99,
    discount: 98.99,
    productImage: product12,
    descriptions: 'Descriere pentru Calvin Klein...',
  },
  {
    id: 13,
    productName: 'Prada-Milano',
    price: 67.99,
    discount: 89.99,
    productImage: product13,
    descriptions: 'Descriere pentru Calvin Klein...',
  },
  {
    id: 14,
    productName: 'Ubaya',
    price: 19.99,
    discount: 35.99,
    productImage: product14,
    descriptions: 'Descriere pentru Calvin Klein...',
  },
  {
    id: 15,
    productName: 'Valentino',
    price: 75.99,
    discount: 95.99,
    productImage: product15,
    descriptions: 'Descriere pentru Calvin Klein...',
  },
  {
    id: 16,
    productName: 'YvesSaintLaurent',
    price: 40.99,
    discount: 59.99,
    productImage: product16,
    descriptions: 'Descriere pentru Calvin Klein...',
  },
  {
    id: 17,
    productName: 'Zaina',
    price: 39.99,
    discount: 59.99,
    productImage: product17,
    descriptions: 'Descriere pentru Calvin Klein...',
  },
];
