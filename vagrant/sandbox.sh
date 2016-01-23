#!/bin/bash

# install nginx
apt-get -y install nginx

# disable default nginx site
rm -f /etc/nginx/sites-enabled/default

# create and enable the aics site
install -o root -g root -m 0644 \
  /vagrant/vagrant/d3sandbox.conf \
  /etc/nginx/sites-available/d3sandbox

ln -sf /etc/nginx/sites-available/d3sandbox /etc/nginx/sites-enabled/d3sandbox

# restart nginx service
service nginx restart
