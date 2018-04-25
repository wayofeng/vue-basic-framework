
export const navs = r => require.ensure([], () => r(require('@/page/navs.vue')), 'navs');
export const home = r => require.ensure([], () => r(require('@/page/home.vue')), 'home');
export const category = r => require.ensure([], () => r(require('@/page/category.vue')), 'category');
export const shoppingCar = r => require.ensure([], () => r(require('@/page/shopping-car.vue')), 'shoppingCar');
export const my = r => require.ensure([], () => r(require('@/page/my.vue')), 'my');

export const productList = r => require.ensure([], () => r(require('@/page/product-list')), 'product');
export const productDetail = r => require.ensure([], () => r(require('@/page/product-detail')), 'product');