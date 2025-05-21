import { expect, test } from '../../fixtures/ui.fixtures/ui.data';

test.describe('MOCK tests', async () => {
  test('1+1', async () => {
    const sum = 1 + 1;

    expect(sum).toBe(2);
  });
});
