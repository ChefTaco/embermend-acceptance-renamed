/** Separate monorepo application; catalog scans must exclude it. */
export interface Note { id: string; ownerId: string }
export function visibleNote(notes: readonly Note[], id: string, ownerId: string): Note | undefined {
  return notes.find(note => note.id === id && note.ownerId === ownerId);
}
