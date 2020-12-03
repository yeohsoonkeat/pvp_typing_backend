require('dotenv').config()

module.exports = {
    development: {
        dialect: 'postgres',
        database: 'pvp_typing',
        username: 'postgres',
        password: '123'
    },
    test: {
        dialect: 'sqlite',
        storage: ':memory:'
    },
    production: {
        
    }
}