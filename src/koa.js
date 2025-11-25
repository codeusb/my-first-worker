import Koa from 'koa';
import { httpServerHandler } from 'cloudflare:node';

const app = new Koa();

app.use(async (ctx) => {
	ctx.body = 'Hello World Koa';
});

app.listen(8080);

export default httpServerHandler({ port: 8080 });
