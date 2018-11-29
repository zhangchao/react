

# React Install

1. node ,
2. npm crreate


# Docker

1. docker build -t koa-reactjs .
2. docker run -it koa-reactjs bash
3. docker run -d -p 3000:3000 -v $(pwd)/app:/app -v /app/node_modules -w /app koa-reactjs
4. curl http://127.0.0.1:3000/
