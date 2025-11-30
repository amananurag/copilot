FROM node:20.19.6-bullseye-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run", "server"]

