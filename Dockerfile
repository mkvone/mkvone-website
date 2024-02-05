# Dependency installation stage using Bun
FROM oven/bun:1-alpine AS deps
WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install

# Builder stage to build the application using Node.js image
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Install Bun in the builder stage to use for building the application
RUN bun run build

# Runner stage to run the application
FROM node:18-alpine AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV production
ENV PORT 1111
ENV HOSTNAME 0.0.0.0

# Create a non-root user for running the application
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the build output from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

# Change the ownership of the application files to the non-root user
RUN chown -R nextjs:nodejs ./

# Switch to the non-root user
USER nextjs

# Expose the application port
EXPOSE 1111

# Command to run the application using Bun
CMD ["bun", "run", "server.js"]
