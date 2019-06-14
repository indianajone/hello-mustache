# Node 8
FROM node:carbon

# install Firebase CLI
RUN npm i -g firebase-tools
COPY firebase.sh /usr/bin
RUN chmod +x /usr/bin/firebase.sh

ENTRYPOINT ["/usr/bin/firebase.sh"]
