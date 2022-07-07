#create node stage
FROM node:latest AS builder

#set the working directory
WORKDIR /CRUD_angular_materials

#copy the file from current directory to working directory
COPY . .

#Run npm install and build the application
RUN npm install && npm run ng build 

#create the nginx for serving the content
FROM nginx:alpine

#Set the working directory
WORKDIR /usr/share/nginx/html

#Remove the default nginx static file
RUN rm -rf ./*

#Copy the static contect from builder stage
COPY --from=builder /CRUD_angular_material/dist/crud-angular-material .

#Container run the nginx with global directive and deamon off
ENTRYPOINT [ "nginx" , "-g" , "deamon off;" ]
