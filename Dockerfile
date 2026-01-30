    FROM node:20-alpine
    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    RUN apt-get update && apt install vim -y
    COPY . .
    EXPOSE 5173
    CMD ["npm", "run", "dev"]