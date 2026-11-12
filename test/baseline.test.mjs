import { test } from 'node:test';
import assert from 'node:assert/strict';
import { visibleAccount } from '../apps/catalog/src/accounts.ts';
test('known owner can read its fictional record', () => {
  assert.equal(visibleAccount([{ id: 'record', ownerId: 'alice', label: 'Fixture' }], 'record', 'alice')?.id, 'record');
  assert.equal(visibleAccount([], 'missing', 'alice'), undefined);
});
