# define base image
FROM node:18.17.1

# making new working directory inside of the container
WORKDIR /app

# copy first only package.json because when running npm install that error will came 
# so even after copy packge json run command npm install after copy rest of the items
COPY package.json ./

# RUNNING THIS COMMAND FOR SETUP ALLL DEPENDENCIES 
RUN npm install


# COPYING RESTOF THE ITEMS
COPY . .

# CONFIGURING WHICH COMMAND WANTO RUN WHEN WHILE CONTAINER STARTING

CMD ["npm", "start"]




