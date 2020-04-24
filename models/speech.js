module.exports = function (sequelize, DataTypes) {
    const SpeechesList = sequelize.define("SpeechesList", {

        speechTitle: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        length: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        analytics: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    SpeechesList.associate = function(models) {
        SpeechesList.belongsTo(models.Users, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    
    return SpeechesList;
};