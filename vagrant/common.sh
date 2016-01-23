#!/bin/bash

# update packages
apt-get update
apt-get -y upgrade

# install development tools and utilities
apt-get -y install vim git tmux htop
apt-get -y install unzip

