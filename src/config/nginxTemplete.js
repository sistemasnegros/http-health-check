const generateConfig = (host) => (`

# redirect to https
server {
    listen 80;
    server_name main.midomain.com;
    return         301 https://$server_name$request_uri;
}


server {

  listen 443 ssl;
  server_name  main.midomain.com;
  ssl_certificate /../../certicate.crt;
  ssl_certificate_key /../../certificate.key;

  location / {
	  proxy_pass ${host};
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection 'upgrade';
          proxy_set_header Host $host;
          proxy_cache_bypass $http_upgrade;
	}
}
`)


module.exports = generateConfig;
