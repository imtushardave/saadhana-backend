const config = {
    development: {
      server: {
        port: 3000,
        host: 'localhost'
      },
    },
    test: {
      server: {
        port: 3000,
        host: 'localhost'
      },
    }
  };
  
  const env = process.env.NODE_ENV || 'development';
  
  const configuration = config[env];
  
  module.exports = configuration;