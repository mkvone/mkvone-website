FROM imbios/bun-node:18-slim AS deps
ARG DEBIAN_FRONTEND=noninteractive

# I use Asia/Jakarta as my timezone, you can change it to your timezone
RUN apt-get -y update && \
  apt-get install -yq openssl git ca-certificates tzdata && \
  ln -fs /usr/share/zoneinfo/Asia/Jakarta /etc/localtime && \
  dpkg-reconfigure -f noninteractive tzdata
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json  ./
RUN bun install 

# Build the app
FROM deps AS builder
WORKDIR /app
COPY . .

RUN bun run build


# Production image, copy all the files and run next
FROM node:18-slim AS runner
WORKDIR /app

ENV PORT 1111
ENV HOSTNAME "0.0.0.0"
ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder  /app/.next/standalone ./

EXPOSE 1111

CMD ["node", "server.js"]
