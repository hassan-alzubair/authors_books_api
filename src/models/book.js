'use strict';
module.exports = (sequelize, DataTypes) => {
    const book = sequelize.define('book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                len: {
                    args: [5],
                    msg: 'title length must be between 5 an 10'
                },
                is: {
                    args: /^[a-zA-Z0-9\s\.]*$/,
                    msg: 'please provide a valid title (letters white spaces and numbers only)'
                }
            }
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^ISBN\-\d{3}\-\d{4}$/i,
                    msg: 'please provide a valid ISBN, should be like: ISBN-123-1234'
                }
            }
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true
            }
        },
        pages_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true
            }
        }
    }, {
        underscored: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at',
    });
    book.prototype.toJSON = function () {
        let values = this.get();
        delete values.authorId
        return values;
    };
    book.associate = function (models) {
        book.belongsTo(models.author);
    };
    return book;
};