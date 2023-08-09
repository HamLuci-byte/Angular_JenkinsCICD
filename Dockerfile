# Stage 1: Build the Angular app
FROM node:18.17.0 as build
WORKDIR /app
#COPY package.json package-lock.json ./
COPY ./package.json ./package-lock.json ./

RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
#COPY --from=node /app/dist/ENERGYCLOUD /usr/share/nginx/html
COPY --from=build /app/dist/sample-app /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
