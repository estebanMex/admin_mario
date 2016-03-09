#!/bin/sh

npm run build & http-server . -c0 & livereload
