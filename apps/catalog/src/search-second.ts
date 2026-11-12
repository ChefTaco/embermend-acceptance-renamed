/** Deliberately unsafe syntax fixture; no live database is configured. */
export interface Database { query(sql: string): Promise<unknown[]> }
export function search(database: Database, term: string): Promise<unknown[]> {
  return database.query(`SELECT id, title FROM catalog WHERE title = '${term}'`);
}
