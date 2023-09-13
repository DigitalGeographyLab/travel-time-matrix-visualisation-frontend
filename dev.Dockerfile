FROM node:18.17-bookworm-slim
WORKDIR /usr/src/app
COPY . .
RUN npm install --include=dev
ENV VITE_BACKEND_URL "http://localhost:8080"
CMD ["npm", "run", "dev","--", "--host"]
EXPOSE 5173
