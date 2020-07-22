# Use Node.js as temporary build image
FROM node as build

# Create working directory
RUN mkdir -p /srv/app
WORKDIR /srv/app

# Copy package.json and yarn.lock so dependencies can be cached
COPY package.json /srv/app
COPY yarn.lock /srv/app

# Install app dependencies
RUN yarn install

# Copy app source
COPY . /srv/app

# Build app
RUN yarn run build

# Use nginx on Alpine Linux as base image
FROM nginx:stable-alpine

# Copy app from temporary build image to the final image
COPY --from=build /srv/app/dist /var/www
COPY --from=build /srv/app/media /var/www/media

# Copy nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Disable nginx daemonization
CMD ["nginx", "-g", "daemon off;"]
