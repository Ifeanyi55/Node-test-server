# Use the official Node.js 18 image as the base image
FROM node:22-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the application will run on
EXPOSE 3000

# Health check to ensure the app is running
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

# Command to run the application
CMD ["node", "index.js"]
