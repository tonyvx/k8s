FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8080:8080
EXPOSE 27017:27017

CMD [ "npm", "start" ]