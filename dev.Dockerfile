FROM node:20.5.1-bookworm-slim
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD ["npm", "run", "dev","--", "--host"]
EXPOSE 5173
