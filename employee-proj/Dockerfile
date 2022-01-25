FROM node:latest as builder

WORKDIR /code

ENV PATH /code/node_modules/.bin:$PATH

RUN npm install g @angular/cli

COPY package.json .

RUN npm install

COPY . . 

#EXPOSE 4200

#CMD ng serve --host 0.0.0.0 --port 4200

RUN ng build


FROM nginx:latest

COPY --from=builder /code/dist/employee-proj /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD nginx -g "daemon off;"



