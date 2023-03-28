FROM node:18

WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
COPY . /app
RUN npm install


EXPOSE 3000
CMD [ "npm","run","dev" ]