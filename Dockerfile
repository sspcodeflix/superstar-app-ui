# Use an official Node.js runtime as a parent image
#FROM node:14
FROM node:hydrogen-buster
# Set the working directory in the container
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install --force

# Copy the rest of the application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Expose port 80 for serving the React app
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
