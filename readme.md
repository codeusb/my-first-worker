https://developers.cloudflare.com/workers/get-started/guide/

`pnpm create cloudflare@latest my-first-worker`

```
For What would you like to start with?, choose Hello World example.
For Which template would you like to use?, choose Worker only.
For Which language do you want to use?, choose JavaScript.
For Do you want to use git for version control?, choose Yes.
For Do you want to deploy your application?, choose No (we will be making some changes before deploying).
```

`cd my-first-worker`

`npx wrangler dev`

`npx wrangler deploy`

仅限开发模式：--port 参数只对 wrangler dev 有效。wrangler deploy 是将代码发布到 Cloudflare 的全球网络，那里不需要（也不能）指定端口。

https://blog.cloudflare.com/bringing-node-js-http-servers-to-cloudflare-workers/
https://developers.cloudflare.com/workers/runtime-apis/nodejs/
https://blog.cloudflare.com/nodejs-workers-2025/

更改 build 命令

Build-Build configuration-Deploy command

`npm run deploy:express` / `npx wrangler deploy src/express.js`
