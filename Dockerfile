FROM node:14.15.5-stretch as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY src ./src
COPY public ./public
COPY tsconfig.json ./
RUN npm run build

# production environment
FROM nginx:1.15.2-alpine
COPY --from=build /app/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]