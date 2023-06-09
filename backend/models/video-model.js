import { Sequelize, DataTypes, Model } from "sequelize"

const sequelize = new Sequelize(process.env.DB_URL, { logging: false })

class Video extends Model {}

Video.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(2048),
        allowNull: false
    },
    channelName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    views: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    likesCounter: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    videoPath: {
        type: DataTypes.STRING,
        allowNull: false
    },
    previewPath: {
        type: DataTypes.STRING,
        allowNull: false
    },
    channelId: {
        type: DataTypes.UUID,
        allowNull: false
    }
}, {
    sequelize, 
    freezeTableName: true,
    modelName: 'video',
    timestamps: false
})

export default Video