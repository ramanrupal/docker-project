# docker-project

angular app url: localhost

used nginx as conatiner for web server..

if dont want to use nginx as web server:

simply change url in data.service.ts: which wil be pointing to node-js server along with proper port number



###############################################################################################################################3

mysqld:

to create a table in mysql container within mydb database

login to mysql conatiner
  
mysql -u raman -p raman

use mydb;
  
create table employees (id int PRIMARY KEY AUTO_INCREMENT , name varchar(255) NOT NULL,email varchar(255) NOT NULL,phone varchar(255) NOT NULL );
  
####################################################################################################################################################
 
