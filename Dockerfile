#  Dockerfile for Node Express Backend
FROM node

# Create App Directory
WORKDIR /app

# Install Dependencies
COPY package.json .

RUN npm install

COPY . .

# Exports
EXPOSE 4000

CMD ["npm", "run", "dev"]