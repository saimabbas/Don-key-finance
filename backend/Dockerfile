FROM node:14.15.4-alpine

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

COPY prisma ./prisma

RUN yarn

COPY . ./

RUN npm run build

CMD [ "npm", "start" ]