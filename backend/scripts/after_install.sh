#!/bin/bash

#_Change_Working_Directory
cd /home/ec2-user/server2

#_Remove_Unused_Code
rm -rf node_modules
#_rm -rf build ------

#Install_node_modules_&_Make_React_Build
npm  install
#_npm run build ------
 
 