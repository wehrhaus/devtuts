/**
 * Use the expect-jsx library to diff JSX results
 */

import React from 'react';
import RenderDollarValue from './renderDollarValue';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('RenderDollarValue', () => {

    it('should return a dollar value in the form of `$#.##`', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<RenderDollarValue dollarValue='6.00' />);

        // render method must be called before we can getRenderOutput()
        const actual = renderer.getRenderOutput();
        const expected = '$6.00';
        const unexpected = '$$6.00';

        expect(actual).toIncludeJSX(expected);
        expect(actual).toNotIncludeJSX(unexpected);
    });

});