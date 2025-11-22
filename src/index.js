/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		const corsHeaders = {
			'Access-Control-Allow-Origin': '*',
		};
		const url = new URL(request.url);

		switch (url.pathname) {
			case '/':
				return new Response('Hello World!', {
					headers: {
						...corsHeaders,
					},
				});

			case '/hello':
				return new Response('Hello Sexxion!', {
					headers: {
						...corsHeaders,
					},
				});
		}
	},
};
