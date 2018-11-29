FROM node:10.13.0-slim


#Create the npm install layer independently
RUN mkdir -p /sample/{app,build}

COPY package.json /sample
COPY webpack.config.js /sample
COPY .babelrc /sample
COPY app/ /sample/app
COPY build/index.html /sample/build/index.html

RUN cd /sample && npm install

ENV PATH /sample/node_modules/.bin:$PATH

# Add app source files
# ADD sample /sample/

WORKDIR /sample
ENV NODE_ENV production
EXPOSE 3001
CMD ["node", "run start"]
