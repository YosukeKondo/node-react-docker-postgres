FROM node:12-alpine AS BUILD_IMAGE

WORKDIR /nrdp

COPY ./package*.json ./
RUN npm ci

COPY ./src/app ./src/app

EXPOSE 3000

CMD ["npm", "run", "app-debug"]