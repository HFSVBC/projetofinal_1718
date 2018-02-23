FROM php:7.2-apache

WORKDIR /usr/src/app
COPY ../backEnd/ .
COPY vhost.conf /etc/apache2/sites-available/000-default.conf

RUN chown -R www-data:www-data /usr/src/app \
    && a2enmod rewrite

EXPOSE 80 443