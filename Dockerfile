FROM openresty/openresty
RUN set -x \
    && rm -f /usr/local/openresty/nginx/html/index.html
COPY ./dist /usr/local/openresty/nginx/html
COPY ./

