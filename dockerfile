FROM node:14

WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV DB_URI=mongoDB_connection_uri

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD [ "node", "bin/www" ]