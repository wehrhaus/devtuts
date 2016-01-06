/**
 * Non-Functional Example
 */

import { store } from './store';
import expect from 'expect';

describe('store', () => {

   it('should initialize', () => {
        const actual = store.getState();
        const expected = {
            quotes: [],
            theme: {
                color: '#8AD855'
            }
        };

        expect(actual).toEqual(expected);
    });

});