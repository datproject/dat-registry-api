module.exports = {
  data: '.',
  admins: [
    'admin'
  ],
  township: {
    secret: 'very very not secret',
    db: 'township.db'
  },
  email: {
    fromEmail: 'hi@example.com'
  },
  db: {
    dialect: 'sqlite3',
    connection: {
      filename: 'sqlite.db'
    },
    useNullAsDefault: true
  },
  whitelist: false,
  archiver: {
    dir: 'archiver',
    verifyConnection: false,
    timeout: 3000
  }
}
