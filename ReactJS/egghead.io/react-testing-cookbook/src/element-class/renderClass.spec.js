/**
 * Use TestUtils getRenderOutput method to test props.
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import RenderClass from './renderClass';

describe('RenderClass', () => {

    it('should have the class passed via the props class', () => {
        const testClassName = 'foo';
        const renderer = TestUtils.createRenderer();
        renderer.render(<RenderClass class={ testClassName } />);

        console.log(renderer.getRenderOutput().props);

        const actual = renderer.getRenderOutput().props.className.includes(testClassName);
        const expected = true;

        expect(actual).toEqual(expected);
    });

});