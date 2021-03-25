module.exports = {
  apps: [
    {
      name: 'files-service-prod',
      script: 'build/index.js',
      watch: false,
      instances: 'max',
      exec_mode: 'cluster',
    },
  ],
}
