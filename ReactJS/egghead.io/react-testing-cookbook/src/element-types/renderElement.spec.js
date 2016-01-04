/**
 * Use TestUtils getRenderOutput method to test type.
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import { RenderLink, RenderListItem } from './renderElement';

describe('Element Types', () => {

    function testElementType(componentItem) {
        const Component = componentItem;
        const renderer = TestUtils.createRenderer();
        renderer.render(<Component />);

        return renderer.getRenderOutput().type; // use type to get element type
    }

    it('should be a link', () => {
        expect(testElementType(RenderLink)).toEqual('a');
    });

    it('should be a list item', () => {
        expect(testElementType(RenderListItem)).toEqual('li');
    });

});