FROM node:boron

RUN apt-get update && apt-get install -y vim bash

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 8080
CMD npm start
