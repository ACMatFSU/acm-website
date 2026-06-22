
# bulding the react app:
# 1) create a light linux env
FROM node:20-alpine AS build
# 2) create the app dir in the container and use it going forward
WORKDIR /app
# 3) copy dependancy declarations into working dir
COPY package*.json ./
# 4) install dependancies
RUN npm ci
# 5) copy source code into container
COPY . .
# 6) build the application
RUN npm run build

# create the web server
# 1) new container layer for server
FROM nginx:alpine
# 2) gets the build outputs only 
COPY --from=build /app/dist /usr/share/nginx/html
# 3) for server to send to web traffic
EXPOSE 80 
# 4) command to run server and restart after failures
CMD ["nginx", "-g", "daemon off;"]