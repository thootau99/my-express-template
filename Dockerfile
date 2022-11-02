FROM node:16-alpine
WORKDIR /usr/src
COPY . .
RUN npm install nodemon -g
RUN npm install

CMD ["npm", "run", "start"]