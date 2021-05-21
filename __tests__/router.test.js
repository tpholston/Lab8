/**
 * @jest-environment jsdom
 */

import { pushToHistory } from "../scripts/router.js";

test('check length of history state and default state empty', () => {
    expect(pushToHistory('defaultTrigger', 1).state).toStrictEqual({});
    expect(pushToHistory('settings', 1).length).toStrictEqual(3);
})

test('check the state is properly set', () => {
    expect(pushToHistory('entry', 1).state.page).toBe("entry1");
})

