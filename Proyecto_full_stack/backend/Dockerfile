FROM node:15

# Create app directory
WORKDIR /usr/src/app

# env variables
ENV PORT 3000

# Install app dependencies
COPY package*.json ./

ARG NODE_ENV
# Adding --only=prod or --production would not install devDependencies and just install dependencies.
RUN if [ "$NODE_ENV" = "production" ]; then npm ci --only=production; else npm install; fi

# Bundle app source
COPY . .

# Expose port 3000
EXPOSE ${PORT}

# Run the app
CMD [ "node", "server.js" ]

