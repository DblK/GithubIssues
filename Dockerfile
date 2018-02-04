FROM node:carbon-alpine

ENV NODE_ENV=prod

# Copy app
RUN mkdir -p /opt/app/config
WORKDIR /opt/app
COPY ./package.json /opt/app
RUN apk add --no-cache make gcc g++ python && \
  npm install --production --silent && \
  apk del make gcc g++ python
COPY ./config /opt/app/config
COPY ./src /opt/app

CMD ["sh", "-c", "node ."]
