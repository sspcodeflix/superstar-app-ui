#!/bin/bash

cd /root/superstar-app-ui/
docker-compose -f deploy/deploy.yml down
echo y | docker system prune -a
cd ..
rm -rf /root/superstar-app-ui
git clone -b https://$GIT_USERNAME:$GIT_PASSWORD@github.com/sspcodeflix/superstar-app-ui.git
docker-compose -f deploy/deploy.yml build --no-cache
docker-compose -f deploy/deploy.yml up -d
docker-compose -f deploy/deploy.yml logs -f
