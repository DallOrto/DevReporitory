const environment = process.env.ENVIRONMENT
module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "port": 5432,
     
    "migrations": ["./src/shared/infra/typeorm/migrations/*.ts"],
    "entities": ["./src/modules/**/entities/*.ts"],
    "migrationsRun": true,
    "extra": {
      "ssl": true
    },
    "options": { encrypt: false },
    "cli": {
      "migrationsDir": "./src/shared/infra/typeorm/migrations"
    }
}