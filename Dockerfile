FROM node:14.16-alpine
WORKDIR /var/www/html
ADD package.json package.json
RUN npm install
EXPOSE 80