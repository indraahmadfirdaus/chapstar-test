'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_aplikasi: {
        type: Sequelize.STRING
      },
      keterangan: {
        type: Sequelize.TEXT
      },
      jumlah_pengguna: {
        type: Sequelize.INTEGER
      },
      pendiri: {
        type: Sequelize.STRING
      },
      tanggal_didirikan: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Applications');
  }
};