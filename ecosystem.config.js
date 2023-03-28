module.exports = {
  apps: [
    {
      name: 'serendipity-be',
      cwd: '/home/rob/www/backend',
      script: 'yarn',
      args: 'start:dev',
      env: {
        NODE_ENV: 'development',
        PORT: 3001
      },
    },
    {
      name: 'serendipity-fe',
      cwd: '/home/rob/www/frontend',
      script: 'yarn',
      args: 'dev',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
    },
    {
      name: 'serendipity-ad',
      cwd: '/home/rob/www/admin',
      script: 'yarn',
      args: 'dev',
      env: {
        NODE_ENV: 'development',
        PORT: 3002
      },
    },
  ],
};
 