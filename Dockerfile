FROM node:12

WORKDIR /usr/app
COPY package*.json ./

RUN npm install -qy
COPY . .

RUN npm run build
RUN npm prune --production

EXPOSE 1234
CMD ["npm", "start"]
