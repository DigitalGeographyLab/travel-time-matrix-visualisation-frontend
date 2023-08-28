FROM node:20.5.1-bookworm-slim AS build-stage
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.25-bookworm
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
EXPOSE 8080
