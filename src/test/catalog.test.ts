import {describe,it,expect} from 'vitest';
import {products,whatsapp,productMessage,categories} from '@/lib/catalog';
describe('Product collection and enquiries',()=>{
 it('uses nine real photos and valid categories',()=>{expect(products).toHaveLength(9);expect(new Set(products.map(p=>p.id)).size).toBe(9);for(const p of products){expect(p.image).toMatch(/^\/__l5e\/assets-v1\//);expect(categories).toContain(p.category);expect(p.demoPrice).toBe(true)}});
 it('encodes each product enquiry with the business number',()=>{for(const p of products){const url=new URL(whatsapp(productMessage(p)));expect(url.hostname).toBe('wa.me');expect(url.pathname).toBe('/919084666012');expect(url.searchParams.get('text')).toContain(p.name)}});
});
