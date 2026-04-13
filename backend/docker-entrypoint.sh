#!/bin/sh
set -e

cd /var/www/html

# Ensure Laravel writable directories exist and are writable
mkdir -p storage/framework/{sessions,views,cache} storage/logs bootstrap/cache
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache || true

# Start services
service nginx start
php-fpm
