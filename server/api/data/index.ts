import {products} from '~~/db.json'

export default defineEventHandler((event) => {
  return {
    products: products || [],
    date: new Date().toISOString() || '',
  }
})
