# ./docker/php/Dockerfile
FROM php:8.1-fpm

# Instalar extensiones necesarias para Laravel
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Establecer directorio de trabajo
WORKDIR /var/www/backend

# Dar permisos al usuario www-data
RUN chown -R www-data:www-data /var/www/backend
USER www-data