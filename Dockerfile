FROM node:alpine
WORKDIR /public/dist
COPY package.json ./
COPY ./ ./
RUN npm i --legacy-peer-deps
RUN ["chmod", "+x", "/usr/local/bin/docker-entrypoint.sh"]
CMD ["npm", "run", "start"]