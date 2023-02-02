const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Notepad extends Model { }

Notepad.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comments: {
            type: DataTypes.JSON,
            allowNull: true,
            get() {
                return JSON.parse(this.getDataValue('comments'));
            },
            set(val) {
                this.setDataValue('comments', JSON.stringify(val));
            }
        },
        links_used: {
            type: DataTypes.JSON,
            allowNull: true,
            get() {
                return JSON.parse(this.getDataValue('links_used'));
            },
            set(val) {
                this.setDataValue('links_used', JSON.stringify(val));
            }
        },

        project_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'project',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'notepad',
    }
);

module.exports = Notepad;
