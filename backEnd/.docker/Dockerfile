FROM php:7.2-apache

MAINTAINER Hugo Curado

COPY . /srv/app
COPY .docker/vhost.conf /etc/apache2/sites-available/000-default.conf

RUN chown -R www-data:www-data /srv/app
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
RUN a2ensite 000-default.conf
RUN a2enmod rewrite
RUN service apache2 restart