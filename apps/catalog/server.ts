import { createServer } from 'node:http';
import { visibleAccount } from './src/accounts.ts';
const accounts = [{ id: 'fixture-account', ownerId: 'alice', label: 'Fictional record' }];
const port = Number(process.env['PORT'] ?? '8088');
if (!Number.isSafeInteger(port) || port < 1 || port > 65535) throw new Error('Valid PORT required');
createServer((request, response) => {
  const url = new URL(request.url ?? '/', 'http://localhost');
  response.setHeader('content-type', 'application/json');
  if (url.pathname === '/health') { response.end(JSON.stringify({ status: 'healthy', sourceRevision: process.env['SOURCE_REVISION'] ?? 'unrecorded' })); return; }
  if (url.pathname !== '/account') { response.writeHead(404).end('{}'); return; }
  const owner = request.headers['x-fixture-owner'];
  if (typeof owner !== 'string') { response.writeHead(401).end('{}'); return; }
  const account = visibleAccount(accounts, url.searchParams.get('id') ?? '', owner);
  if (!account) { response.writeHead(403).end('{}'); return; }
  response.end(JSON.stringify(account));
}).listen(port, process.env['BIND_ADDRESS'] ?? '127.0.0.1');
