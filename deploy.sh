#!/bin/bash

if [[ -z "$GIT_USERNAME" ]] || [[ -z "$GIT_PASSWORD" ]]; then
    echo "Please set the GIT_USERNAME and GIT_PASSWORD environment variables before running this script."
    exit 1
fi
if [[ $EUID -ne 0 ]]; then
    echo "This script must be run with sudo privileges."
    exit 1
fi
apt-get update
apt install unzip wget curl net-tools git -y
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
apt-get install docker-compose -y
cd /root
git clone -b https://$GIT_USERNAME:$GIT_PASSWORD@github.com/sspcodeflix/superstar-app-ui.git
cd superstar-app-ui/
unzip deploy/mnt.zip -d deploy/
git pull origin main
echo y | docker system prune -a
docker-compose -f deploy/deploy.yml build --no-cache
docker-compose -f deploy/deploy.yml up -d
docker-compose -f deploy/deploy.yml logs -f