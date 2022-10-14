import { mount } from '@vue/test-utils'
import { test, expect, describe } from 'vitest';
import ProductCardActions from '../src/components/widgets/ProductCardActions.vue';

describe('ProductCardActions Tests', () => {
    test('if product is not in cart, renders add to cart btn', () => {
        expect(ProductCardActions).toBeTruthy();
        const wrapper = mount(
            ProductCardActions, 
            {
                props: {
                    isInCart: false,
                    isForSmallScreen: false,
                    quantity: 0,
                }
            }
        );
        expect(wrapper.find('[data-test="add-to-cart"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="plus-minus-quantity"]').exists()).toBe(false);
        expect(wrapper.find('[data-test="add-to-cart"]').text()).toBe('Add To Cart');
    })
    test('if product is in cart, renders plus and minus quantity btns', () => {
        expect(ProductCardActions).toBeTruthy();
        const wrapper = mount(
            ProductCardActions, 
            {
                props: {
                    isInCart: true,
                    isForSmallScreen: false,
                    quantity: 1,
                }
            }
        );
        expect(wrapper.find('[data-test="add-to-cart"]').exists()).toBe(false);
        expect(wrapper.find('[data-test="plus-minus-quantity"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="product-quantity"]').text()).toBe('1');
    })
    test('if on small screen, render small screen btn classes', () => {
        expect(ProductCardActions).toBeTruthy();
        const wrapper = mount(
            ProductCardActions, 
            {
                props: {
                    isInCart: false,
                    isForSmallScreen: true,
                    quantity: 0,
                }
            }
        );
        const expected = new Set(["btn", "btn-primary","d-md-none", "d-block", "w-100"]);
        const actual = new Set(wrapper.find('[data-test="add-to-cart"]').classes());
        expect(actual).toEqual(expected);
    })
})