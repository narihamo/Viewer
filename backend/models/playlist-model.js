import { Sequelize, DataTypes, Model } from "sequelize"

const sequelize = new Sequelize(process.env.DB_URL, { logging: false })

class Playlist extends Model {}

Playlist.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    channelName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    channelId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize, 
    freezeTableName: true,
    modelName: 'playlist',
    timestamps: false
})

export default Playlist