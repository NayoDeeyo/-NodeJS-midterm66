module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        X: DataTypes.INT,
        Y: DataTypes.INT,
    })

    return User
}