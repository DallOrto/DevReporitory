module.exports = {
    
    "url": process.env.DATABASE_URL,
    
    
    "migrations": ["./dist/shared/infra/typeorm/migrations/*.js"],
    "entities": ["./dist/modules/**/entities/*.js"],
    "cli": {
        "migrationsDir": "./dist/shared/infra/typeorm/migrations"
    }

}