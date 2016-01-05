/**
 * Non-Functional Example
 */

import { store } from './store';
import expect from 'expect';

describe('store', () => {

    it('should work with a series of actions', () => {
        const actions = [
            {
                type: 'ADD_QUOTE_BY_ID',
                payload: {
                    text: 'Some text',
                    author: 'Some author',
                    id: 1,
                    likeCount: 24
                }
            },
            {
                type: 'ADD_QUOTE_BY_ID',
                payload: {
                    text: 'Some other text',
                    author: 'Some other author',
                    id: 2,
                    likeCount: 0
                }
            },
            {
                type: 'REMOVE_QUOTE_BY_ID',
                payload: { id: 1 }
            },
            {
                type: 'LIKE_QUOTE_BY_ID',
                payload: { id: 2 }
            },
            {
                type: 'LIKE_QUOTE_BY_ID',
                payload: { id: 2 }
            }
        ];

        actions.forEach(action => store.dispatch(action));

        const actual = store.getState();
        const expected = {
            quotes: [
                {
                    text: 'Some other text',
                    author: 'Some other author',
                    id: 2,
                    likeCount: 2
                }
            ]
        };

        expect(actual).toEqual(expected);

    });

});