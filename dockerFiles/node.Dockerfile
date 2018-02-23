FROM node:9.5

WORKDIR /usr/src/app
COPY ../frontEnd/ .

RUN npm install

EXPOSE 4200
CMD ng serve --host 0.0.0.0 --port 4200