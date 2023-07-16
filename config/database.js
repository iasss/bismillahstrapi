module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ep-small-bar-012249-pooler.us-east-1.postgres.vercel-storage.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'verceldb'),
      user: env('DATABASE_USERNAME', 'default'),
      password: env('DATABASE_PASSWORD', 'r9nE2oSJTjtV'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
