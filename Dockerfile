FROM node:16.14.0
COPY . /arco-design-pro-vite
WORKDIR /arco-design-pro-vite
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 3000