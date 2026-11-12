// Independent security invariant: expected to fail on the intentionally affected revision.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { visibleAccount } from '../apps/catalog/src/accounts.ts';
test('cross-owner records remain inaccessible while the real owner still works', () => {
  const records = [{ id: 'fixture-record', ownerId: 'alice', label: 'Fictional record' }];
  assert.equal(visibleAccount(records, 'fixture-record', 'alice')?.id, 'fixture-record');
  assert.equal(visibleAccount(records, 'fixture-record', 'bob'), undefined);
});
