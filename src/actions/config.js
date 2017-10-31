let port = window.location.port;

if (port !== '')
  port = ':' + 3003;

export const apiServer = window.location.protocol + '//'  + window.location.hostname + port;
