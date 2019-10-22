import { Model, DataTypes } from 'sequelize'
import getDb from '../database'

class Voucher extends Model {
  public id!: number
  public name!: string
  public desc!: string
  public type!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Voucher.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    desc: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    type: {
      type: new DataTypes.SMALLINT(),
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize: getDb(),
  }
)

export default Voucher
