#!/usr/bin/env bash

sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install nodejs npm -y 
cd /vagrant
sudo npm install -g gulp
sudo npm cache clean -f
sudo npm install -g n
sudo n 4.4.0
sudo update-alternatives --install /usr/bin/node nodejs /usr/local/n/versions/node/4.4.0/bin/node 100
npm install
npm install -g eslint
