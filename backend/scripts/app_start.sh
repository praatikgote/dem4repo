#!/bin/bash

#_Change_Working_Directory
cd /home/ec2-user/demoworkspece/server2

#_Delete_Old_PM2_Service
#sudo pm2 delete Frontend
#sudo pm2 start server.js --name Backend
#pm2 delete Frontend
pm2 start -f server.js 
#pm2 start -f scripts/app_start.sh



