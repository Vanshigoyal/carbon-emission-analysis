const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Youtuber extends Model {}

  Youtuber.init(
    {
      youtuber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subscribers: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      video_views: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      uploads: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      shorts: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      live_streaming: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      active_users: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      average_likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      average_comments: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      growth_speed: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      video_views_rank: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      video_views_for_the_last_30_days: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lowest_monthly_earnings: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      highest_monthly_earnings: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lowest_yearly_earnings: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      highest_yearly_earnings: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subscribers_for_last_30_days: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_date: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
    },
    {
      sequelize,
      modelName: "Youtuber",
      hooks: {},
    }
  );
  return Youtuber;
};
