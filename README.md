# btp

# Dependencies
- node v20.3.0
- express v4.16
- sequelize v6.32.1
- mysql2 v3.6

# Inizializzazione della cartella models
`npx sequelize-cli init`

# Creazione di un modello
`npx sequelize-cli model:generate --name Btp --attributes firstName:string,lastName:string,email:string`

# Avvio della migrazione
`npx sequelize-cli db:migrate`
`npx sequelize-cli db:migrate XXXXXXXXXXXXXX-create-user`

# Cancellazione della migrazione
`npx sequelize-cli db:migrate:undo`
`npx sequelize-cli db:migrate:undo:all`
`npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-user.js`

# Creazione di un Seed
`npx sequelize-cli seed:generate --name demo-user`

# Avvio dei seeds
`npx sequelize-cli db:seed:all`

# Cancellazione di tutti i dati sul database
`npx sequelize-cli db:seed:undo:all`

# Modifiche (brute force)
- Per far funzionare correttamente la migrazione e il seeder, con il ES module, è stato necessario dover modificare a mano la variabile `return require(this.path);` sulla cartella `/node_modules/umzug/lib/migration.js`.
Così facendo è stato possibile avviare la migrazione e avviare il seed senza errori.
