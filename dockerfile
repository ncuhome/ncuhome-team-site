FROM node:16

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build:ssr

EXPOSE 8080

CMD [ "node", "./server.js" ]