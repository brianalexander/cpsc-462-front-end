FROM node:12-alpine
LABEL Author "Brian Alexander"

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ./app/package*.json /usr/src/app/
RUN npm install

RUN npm install @tensorflow/tfjs
RUN npm i @tensorflow-models/speech-commands

# Bundle app source
COPY ./app /usr/src/app

CMD [ "npm", "start" ]
