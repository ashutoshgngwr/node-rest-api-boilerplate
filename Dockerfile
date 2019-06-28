FROM node:11-alpine

ENV NODE_ENV production
WORKDIR /opt/app

COPY index.js package.json yarn.lock ./
RUN yarn && yarn cache clean

COPY api api
COPY src src

EXPOSE 8080

CMD yarn start
