ARG node_version=16.14.0
ARG node_image=node:${node_version}-alpine

# STAGE 1
FROM $node_image as builder

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app/

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile 

COPY next.config.js ./
COPY components ./components/
COPY pages ./pages/
COPY public ./public/
COPY styles ./styles/

RUN yarn build

# STAGE 2
FROM $node_image as production

WORKDIR /app/

COPY --from=builder /app/package.json /app/yarn.lock ./
RUN yarn install --frozen-lockfile 

# STAGE 3
FROM $node_image

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

WORKDIR /app/

COPY --from=production /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

EXPOSE 3000

CMD {"yarn", "start"}