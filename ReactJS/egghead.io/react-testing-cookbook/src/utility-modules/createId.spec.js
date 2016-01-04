/**
 * Simple example of testing a Utility Module
 */

import expect from 'expect';
import createId from './createId';

describe('createId', () => {

    it('should convert a descripton into a unique id', () => {
        const actual = createId(123, 'Kebab style unique ID');
        const expected = '123-kebab-style';

        expect(actual).toEqual(expected);
    });

});