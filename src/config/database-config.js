//Configuração do bando de dados no ambiente de teste
// export const databaseConfig = {
//     dialect: 'sqlite',
//     storage: 'database.sqlite',
//     define: {
//         timestamps: true,
//         freezeTableName: true,
//         underscored: true
//     }
// };
export const databaseConfig = {
  dialect: 'postgres',
  host: 'dpg-ci65be5gkuvvgcbvmoig-a.oregon-postgres.render.com',
  username: 'dtsc_node_sequelize_user',
  password: 'b4RRKNWjydKydJbL3G4ZWnW5kqKRZ3vE',
  database: 'dtsc_node_sequelize_53qy',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  },
  dialectOptions: {
    ssl: true
  }
};
//postgres://dtsc_node_sequelize_user:b4RRKNWjydKydJbL3G4ZWnW5kqKRZ3vE@dpg-ci65be5gkuvvgcbvmoig-a.oregon-postgres.render.com/dtsc_node_sequelize_53qy
/*
// Configuração do bando de dados no ambiente de desenvolvimento
export const databaseConfig = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'dtsc-node-sequelize',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  }
};
*/

/*
// Configuração do bando de dados no ambiente de produção
export const databaseConfig = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'scv-backend-node-sequelize',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  }
};
*/