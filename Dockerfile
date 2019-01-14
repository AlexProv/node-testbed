FROM node:10.14

# Create app directory

RUN apt-get update && \
      apt-get -y install sudo

RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

RUN git clone https://github.com/AlexProv/node-testbed.git .

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

RUN npm install -g nodemon

EXPOSE 8080
CMD [ "npm", "start" ]