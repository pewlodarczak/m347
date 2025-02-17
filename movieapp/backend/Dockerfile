FROM node:alpine

# ENTRYPOINT ["top", "-b"]
#FROM node:alpine
LABEL authors="Peter Wlodarczak"

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend files
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
