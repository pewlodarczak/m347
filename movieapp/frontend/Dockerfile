FROM node:alpine
LABEL authors="Peter Wlodarczak"

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy frontend files
COPY . .

# Expose port 3031
EXPOSE 3031

# Start the server
CMD ["npm", "run", "dev"]
