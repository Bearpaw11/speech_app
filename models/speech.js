module.exports = function (sequelize, DataTypes) {
    const SpeechesLists = sequelize.define("SpeechesLists", {

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
            allowNull: true
        },
    });

    SpeechesLists.associate = function(models) {
        SpeechesLists.belongsTo(models.Users, {
          foreignKey: {
            allowNull: true
          }
        });
      };
    
    return SpeechesLists;
};