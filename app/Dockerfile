# Use the official NGINX image
FROM nginx:latest

# Copy static files to NGINX's default directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]