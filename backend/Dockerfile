# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies specified in package.json
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set an environment variable for the application port
ENV PORT=3001

# Expose port 3001 to allow traffic to the container
EXPOSE 3001

# Specify the command to run the application when the container starts
CMD ["node", "server.js"]
