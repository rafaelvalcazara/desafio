FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install


COPY . .

EXPOSE 3001

WORKDIR /usr/app/src
VOLUME /usr/app/src/database
RUN npx sequelize db:migrate
RUN npx sequelize db:seed:all

CMD ["npm", "run", "dev"]


