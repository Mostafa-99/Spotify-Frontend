#!/bin/bash
set -e 
scp -rpi ~/.ssh/deploy_rsa build Dev@138.91.114.14:~/FrontEndScript
ssh -i ~/.ssh/deploy_rsa Dev@138.91.114.14 'cd ~/FrontEndScript && ./reload.sh'
exit
