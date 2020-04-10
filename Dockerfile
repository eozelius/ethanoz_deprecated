# Frontend
FROM node:12.16.1-alpine3.9 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ethanoz/package.json /app/package.json
COPY ethanoz/yarn.lock /app/yarn.lock
RUN yarn install
RUN yarn global add @vue/cli@4.2.3
COPY ./ethanoz /app
RUN yarn build
RUN pwd
RUN ls -lah ./dist
# COPY ./dist/index.html ./ethanoz-frontend/
# RUN ls -lah ./ethanoz-frontend

# nginx
FROM nginx:1.16.0-alpine
COPY production.conf /etc/nginx/conf.d/default.conf
RUN cat /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html
# RUN ls -lah /ethanoz-frontend
RUN ls -lah /usr/share/nginx/html

COPY dh-param/dhparam-2048.pem /etc/ssl/certs/dhparam-2048.pem
RUN ls -lah /etc/ssl/certs/dhparam-2048.pem

COPY letsencrypt/fullchain.pem /etc/letsencrypt/live/ethanoz.com/fullchain.pem
RUN ls -lah /etc/letsencrypt/live/ethanoz.com/fullchain.pem

COPY letsencrypt/privkey.pem /etc/letsencrypt/live/ethanoz.com/privkey.pem
RUN ls -lah /etc/letsencrypt/live/ethanoz.com/privkey.pem

EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
