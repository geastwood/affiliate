import { Sequelize } from 'sequelize'
let db: null | Sequelize = null

export default function getDb() {
  if (!db) {
    db = new Sequelize('postgres://test:test@localhost:5432/affiliate')
  }

  return db
}
