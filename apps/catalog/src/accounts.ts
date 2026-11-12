/** Deliberately unsafe ownership fixture; fictional accounts only. */
export interface Account { id: string; ownerId: string; label: string }
export function visibleAccount(accounts: readonly Account[], requestedId: string, authenticatedOwnerId: string): Account | undefined {
  return accounts.find(account => account.id === requestedId && account.ownerId === authenticatedOwnerId);
}
