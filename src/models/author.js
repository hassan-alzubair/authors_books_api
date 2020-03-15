'use strict';
module.exports = (sequelize, DataTypes) => {
    const author = sequelize.define('author', {
        name: DataTypes.STRING
    }, {
        underscored: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    });
    author.associate = function (models) {
        author.hasMany(models.book);
    };
    return author;
};