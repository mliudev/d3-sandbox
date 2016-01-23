# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  # common
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision "shell", path: "vagrant/common.sh"

  # sandbox vm
  config.vm.define "sandbox" do |sandbox|
    sandbox.vm.hostname = "sandbox"
    sandbox.vm.provider "virtualbox" do |vb|
      vb.memory = 512
      vb.cpus = 1
    end

    sandbox.vm.provision "shell", path: "vagrant/sandbox.sh"
    sandbox.vm.network "forwarded_port", guest: 80, host: 1080
  end
end
