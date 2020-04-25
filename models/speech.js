module.exports = function (sequelize, DataTypes) {
    const SpeechesLists = sequelize.define("SpeechesList", {

        speechTitle: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        length: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        
        analytics: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    SpeechesLists.associate = function(models) {
        SpeechesList.belongsTo(models.Users, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    
    return SpeechesLists;
};