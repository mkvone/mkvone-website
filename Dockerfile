# Base image using official Bun image
FROM oven/bun:1 as base

# Set working directory
WORKDIR /app

# Install system dependencies if needed
RUN apk add --no-cache libc6-compat

# Copy package.json and bun.lockb (if exists) and install dependencies
COPY package.json ./
RUN bun install 

# Copy the rest of your application's source code
COPY . .

# Build your Next.js application using Bun
RUN bun run build

# Set environment variables for production
ENV NODE_ENV production
ENV PORT 1111
ENV HOSTNAME 0.0.0.0

# Next.js collects completely anonymous telemetry data about general usage.
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user and change file ownership
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 1111

# You might need to adjust the CMD according to how you start your Next.js application.
# This is a placeholder and might not work as-is.
CMD ["bun", "run", "server.js"]
