/**
 * Use TestUtils getRenderOutput method to test type.
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import RenderLink from './renderLink';

describe('Element Types', () => {

    it('should be a link', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<RenderLink />);

        const actual = renderer.getRenderOutput().type; // use type to get element type
        const expected = 'a';

        expect(actual).toEqual(expected);
    });

});