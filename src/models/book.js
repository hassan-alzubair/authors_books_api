'use strict';
module.exports = (sequelize, DataTypes) => {
    const book = sequelize.define('book', {
        title: DataTypes.STRING,
        isbn: DataTypes.STRING,
        author_id: DataTypes.INTEGER,
        pages_count: DataTypes.INTEGER
    }, {
        underscored: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at',
    });
    book.associate = function (models) {
        book.belongsTo(models.author);
    };
    return book;
};