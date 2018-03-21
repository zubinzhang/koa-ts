FROM node:8-alpine

# Install base packages, set timezone
RUN apk update && apk add curl bash tree tzdata \
  && npm config set registry http://registry.npm.taobao.org \
  && npm install -g pm2 \
  && mkdir -p /var/app


# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python

WORKDIR /var/app

COPY . /var/app/

ENV NODE_ENV production
ENV TZ Asia/Shanghai

# RUN ls /var/app
RUN npm install --production

RUN rm -rf /tmp/* \
  && rm -rf /root/.npm/ \
  && rm -rf /var/app/src

ENTRYPOINT pm2 start pm2.json --no-daemon
