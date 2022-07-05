const environment = process.env.ENVIRONMENT
module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "port": 5432,
     
    "migrations": ["./src/shared/infra/typeorm/migrations/*.ts"],
    "entities": ["./src/modules/**/entities/*.ts"],
    "migrationsRun": true,
    "ssl": true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    
    "cli": {
      "migrationsDir": "./src/shared/infra/typeorm/migrations"
    }
}