import art from '@/assets/devotional-art.png.asset.json';
import treats from '@/assets/pencil-treats.png.asset.json';
import festive from '@/assets/festive-hamper.png.asset.json';
import accessories from '@/assets/accessory-arrangements.png.asset.json';
import boxes from '@/assets/personalized-gift-boxes.png.asset.json';
import memory from '@/assets/photo-memory-book.png.asset.json';
import cups from '@/assets/scrunchie-cups.png.asset.json';
import cards from '@/assets/chocolate-message-cards.png.asset.json';
import bouquet from '@/assets/gift-bouquet.png.asset.json';
export const categories = ['All Creations', 'Art & Paintings', 'Handmade Cards', 'Gift Hampers', 'Memory Gifts', 'Customized Gifts', 'Accessories'] as const;
export type Category = typeof categories[number];
export type Product = { id: string; name: string; category: Category; description: string; image: string; price: number; demoPrice: true; customizable: boolean; featured: boolean; occasions: string[] };
export const products: Product[] = [
 { id: 'gift-bouquet', name: 'A Little Joy Bouquet', category: 'Gift Hampers', description: 'A thoughtfully arranged bouquet of chocolates, photographs and accessories.', image: bouquet.url, price: 999, demoPrice: true, customizable: true, featured: true, occasions: ['Birthdays','Anniversaries',"Valentine’s Day",'Just Because'] },
 { id: 'gift-boxes', name: 'Personalized Accessory Gift Box', category: 'Customized Gifts', description: 'Colourful gift boxes featuring scrunchies and a selection of accessories.', image: boxes.url, price: 799, demoPrice: true, customizable: true, featured: true, occasions: ['Birthdays','Milestones','Just Because'] },
 { id: 'memory-book', name: 'The Photo-Dump Memory Book', category: 'Memory Gifts', description: 'A handmade photo collage that brings favourite memories together.', image: memory.url, price: 999, demoPrice: true, customizable: true, featured: true, occasions: ['Birthdays','Anniversaries','Milestones'] },
 { id: 'devotional-art', name: 'Hand-Painted Devotional Artwork', category: 'Art & Paintings', description: 'A vibrant devotional painting with intricate decorative details.', image: art.url, price: 1499, demoPrice: true, customizable: true, featured: true, occasions: ['Festivals','Milestones'] },
 { id: 'message-cards', name: 'Sweet Little Message Cards', category: 'Handmade Cards', description: 'Handwritten messages paired with chocolates for a personal surprise.', image: cards.url, price: 499, demoPrice: true, customizable: true, featured: true, occasions: ['Birthdays','Anniversaries',"Valentine’s Day",'Just Because'] },
 { id: 'festive-hamper', name: 'A Festive Treat Hamper', category: 'Gift Hampers', description: 'A snack and chocolate arrangement finished with a festive greeting.', image: festive.url, price: 299, demoPrice: true, customizable: true, featured: true, occasions: ['Festivals'] },
 { id: 'pencil-treats', name: 'Little Pencil-Shaped Treats', category: 'Customized Gifts', description: 'Playful pencil-shaped gifts with chocolates, colourful pens and message tags.', image: treats.url, price: 299, demoPrice: true, customizable: true, featured: false, occasions: ['Birthdays','Just Because'] },
 { id: 'accessories', name: 'Scrunchie & Accessory Arrangements', category: 'Accessories', description: 'A colourful selection of scrunchies, clips and small hair accessories.', image: accessories.url, price: 499, demoPrice: true, customizable: true, featured: false, occasions: ['Birthdays','Just Because'] },
 { id: 'scrunchie-cups', name: 'Colourful Scrunchie Gift Cups', category: 'Accessories', description: 'An assortment of colourful scrunchies presented in clear gift cups.', image: cups.url, price: 299, demoPrice: true, customizable: true, featured: false, occasions: ['Birthdays','Just Because'] },
];
export const instagram = 'https://www.instagram.com/akarshan.creations/';
export const whatsapp = (message = "Hi Akarshan Creations! I visited your website and would like to know more about your creations.") => `https://wa.me/919084666012?text=${encodeURIComponent(message)}`;
export const customMessage = "Hi Akarshan Creations! I'd like to discuss a customized creation. I can share what I'd like to create, the occasion, preferred theme, budget, required delivery date and reference images. Please guide me through the options and pricing.";
export const productMessage = (product: Product) => `Hi Akarshan Creations! I'm interested in the ${product.name}. Could you please share the available options, final price, customization possibilities, and delivery details? I'd also like to discuss personalization.`;
export const pageHead = (title: string, description: string) => ({ meta: [{ title: `${title} | Akarshan Creations` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Akarshan Creations` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] });
