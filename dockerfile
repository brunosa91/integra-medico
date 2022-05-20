FROM node:16-slim

RUN mkdir /home/node/web

WORKDIR /home/node/web

COPY package*.json ./

RUN npm install





COPY . .

EXPOSE 3000

CMD npm start