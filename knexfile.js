// Update with your config settings.

module.exports = {

  development: {
     // client - database driver
    client: 'sqlite3',
    connection: {
      filename: './data/cars.db3' // << creates a db3 file for me
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // defining the **required** configuration that knex needs to connect to production
  production: {
    client: 'pg', // << changed this to 'pg' and ran 'npm i pg'
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
