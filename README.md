SBeeAPIWrapper-JS
=================

A Javascript wrapper for the Supportbee API, done as part of MV hackday

To run the sample page, a HTTP proxy server has to be locally set up - this is to avoid the problem of cross-domain requests restricted in AJAX. I have used nginx proxy , its config is attached in the config directory.

The directory structure is to be placed as is under nginx root directory - from where it will serve all files - /var/www in Ubuntu.

Start nginx :
	sudo /etc/init.rd/nginx start

Now run as :

	http://localhost:<port num as in nginx config file>/index.html

