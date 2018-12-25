FROM node:10.14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

RUN git clone https://github.com/AlexProv/node-testbed.git .

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

RUN npm install -g nodemon

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]