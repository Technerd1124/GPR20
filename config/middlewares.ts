export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  "strapi::cors",
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:5173',
        'http://127.0.0.1:5173',
        'http://localhost:1337',
        'http://localhost:3000'
      ],
      methods: ['GET','POST','PUT','PATCH','DELETE','HEAD','OPTIONS'],
      headers: ['Content-Type','Authorization','Origin','Accept','Keep-Alive','User-Agent','If-Modified-Since','Cache-Control'],
      keepHeaderOnError: true,
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
