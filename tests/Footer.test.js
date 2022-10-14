import { mount } from '@vue/test-utils'
import { test, expect, describe } from 'vitest';
import AppFooter from '../src/components/layouts/Footer.vue';

describe('Footer Tests', () => {
    test('renders title', () => {
        expect(AppFooter).toBeTruthy();
        const wrapper = mount(AppFooter);
        expect(wrapper.text()).toContain('Periwinkle');
    })
})