module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "port": 5432,
     
    "migrations": ["./src/shared/infra/typeorm/migrations/*.ts"],
    "entities": ["./src/modules/**/entities/*.ts"],
    "cli": {
      "migrationsDir": "./src/shared/infra/typeorm/migrations"
    }
}