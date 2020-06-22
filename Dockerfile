# pull official base image
FROM node:alpine

# set working directory
WORKDIR /usr/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/app/node_modules/.bin:$PATH

# install app dependencies
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . .
RUN yarn build

ENV NODE_ENV=production

EXPOSE 8080

# start app
CMD ["npm", "run", "prod:start"]