import { handleAsNodeRequest } from 'cloudflare:node';
import { createServer } from 'node:http';

// Create a traditional Node.js HTTP server
const server = createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello from Node.js HTTP server! handleAsNodeRequest');
});

// Register the server (doesn't actually bind to port 8080)
server.listen(8080);

// Bridge from Workers fetch handler to Node.js server
export default {
	async fetch(request) {
		// You can add custom logic here before forwarding
		if (request.url.includes('/admin')) {
			return new Response('Admin access', { status: 403 });
		}

		// Forward to the Node.js server
		return handleAsNodeRequest(8080, request);
	},
	async queue(batch, env, ctx) {
		for (const msg of batch.messages) {
			msg.retry();
		}
	},
	async scheduled(controller, env, ctx) {
		ctx.waitUntil(doSomeTaskOnSchedule(controller));
	},
};
