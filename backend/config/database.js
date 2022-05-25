function loadSqlLite(env) {
  const path = require('path');

  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    }
  }
}

function loadPgAdmin() {
  const parse = require('pg-connection-string').parse;
  const config = parse(env(DATABASE_URL));

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false
        },
      },
      useNullAsDefault: true,
    },
  };
}

module.exports = ({ env }) => env('ENV') === 'dev' ? loadSqlLite(env) : loadPgAdmin();

