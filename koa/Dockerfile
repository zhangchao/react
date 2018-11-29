FROM node:10.13.0-slim

RUN npm install -g webpack

#Create the npm install layer independently
RUN mkdir /app
COPY app/package.json /app
RUN cd /app && npm install

ENV PATH /app/node_modules/.bin:$PATH

# Add app source files
ADD app /app/

WORKDIR /app
ENV NODE_ENV production
EXPOSE 3000
CMD ["node", "server.js"]
