FROM node:current-alpine

LABEL Description="11ty-personal-site"

# Set up 11ty
WORKDIR /var/www/11ty
COPY package*.json ./
COPY .eleventy* ./
RUN npm i && npm audit fix

# Expose and run server
EXPOSE 8080
EXPOSE 3001

# Run it!
CMD ["npm", "run", "start"]
