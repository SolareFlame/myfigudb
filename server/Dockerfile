FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g nodemon typescript ts-node

COPY . .

RUN npx prisma generate --schema=prisma/schema.prisma

CMD ["npm", "run", "dev"]