/**
 * Use TestUtils getRenderOutput method to test type.
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import { RenderLink, RenderListItem } from './renderElement';

describe('RenderElement', () => {

    describe('element types', () => {

        function testElementType(componentItem) {
            const domLink = 'a';
            const domListItem = 'li';
            const Component = componentItem;
            const renderer = TestUtils.createRenderer();
            renderer.render(<Component />);

            return renderer.getRenderOutput().type; // use type to get element type
        }

        it('should be a link', () => {
            expect(testElementType(RenderLink)).toEqual(domLink);
        });

        it('should be a list item', () => {
            expect(testElementType(RenderListItem)).toEqual(domListItem);
        });

    });

});