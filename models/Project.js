const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model { }

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        wage: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "0",
        },
        hr: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "0",
        },
        min: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "0",
        },
        sec: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "0",
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project',
    }
);

module.exports = Project;
=======
class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    session_time: {
      type: DataTypes.TIME,
      allowNull: false,
      timestamps: true,
    },
    total_time: {
      type: DataTypes.TIME,
      allowNull: false,
      timestamps: true,
    },
    resources: {
      type: DataTypes.TEXT,
    },
    notes: {
      type: DataTypes.TEXT,
    },
    tasks: {
      type: DataTypes.STRING,
      flag: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }, 
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Project;
