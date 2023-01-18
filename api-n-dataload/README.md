# SvelteKit API Endpoints And Loading Data For Pages

```bash
npm create svelte@latest api-n-dataload
cd api-n-dataload/
npm i
git init && git add -A && git commit -m "Initial commit"
npm install -D @picocss/pico
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite
npm i -D @prisma/client
# create seed.ts and setup prisma.seed in package.json and run
npx prisma migrate dev --name init
npx prisma migrate reset
```
