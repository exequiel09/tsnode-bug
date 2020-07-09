module.exports = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: '',
  password: '',
  database: '',
  entities: ['apps/sample-app/entities/*.entity.ts'],
  migrations: ['apps/sample-app/migrations/*.ts'],
  subscribers: ['apps/sample-app/subscribers/*.ts'],
  cli: {
    migrationsDir: 'apps/sample-app/migrations',
  },
};


