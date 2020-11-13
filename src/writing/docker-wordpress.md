---
layout: layouts/post.njk
title: Running wordpress in Docker
description: ????????????????????????
date: '2020-07-20'
tags:
  - docker
---

WordPress is the most popular content management system (known as CMS) and is often the first port of call for clients to use to run their websites. For Front End Web Developers, we often would set up a local MAMP (macOS, Apache, MySQL, and PHP) as part of our development cycle.

It used to bug me a lot that having to set up everything for each client locally, losing configuration files to run the server. Another option was to run a Virtual Machine (VM) running Linux running LAMP, set up the services and point to the folder where you are doing your development.

This is where Docker steps in as a solid option. If you are not familiar with Docker, it uses virtualisation like VM does yet deliver software called containers. Think of it that each containers has their own software like NodeJS, WordPress, or MySQL set up with their own libraries and configuration files. They can communicate with each other and all the containers are run by a single operating system kernel. If you feel a _whooosh_ sound flying over your head then do not worry, all will make sense as we go along.

## Getting started...

All you need is a terminal and a text editor! First, grab [Docker](https://www.docker.com/products/docker-desktop)

Sidenote:

If you want to get familiar with the excellent [documentation](https://docs.docker.com/get-started/) to get yourself going.

## Docker compose file

```
version: '3.1'

services:

    db:
        image: mariadb:latest
        container_name: db
        restart: always
        ports:
            - "3306:3306"
        volumes:
            - ./services/mariadb:/var/lib/mysql
            - ./services/mariadb/my.cnf:/etc/mysql/my.cnf
        env_file:
            - ./services/mariadb/db.env

    wordpress:
        depends_on:
            - db
        container_name: wp
        image: wordpress:latest
        restart: unless-stopped
        ports:
            - "8000:80"
        restart: always
        volumes:
          - ./services/wordpress/wp-content/:/var/www/html/wp-content/
        working_dir: /var/www/html
        env_file:
          - ./services/wordpress/wp.env

    phpmyadmin:
        image: phpmyadmin/phpmyadmin
        depends_on:
            - db
        ports:
            - "8001:80"
```

## Configuration of WordPress locally

## Running it

## PHPMyAdmin

## Conclusion


