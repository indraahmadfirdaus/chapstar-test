'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {

    static associate(models) {
      // define association here
    }
  };
  Application.init({
    nama_aplikasi: {
      type: DataTypes.STRING,
      validation: {
          notEmpty: {
            msg: "Nama Aplikasi Tidak Boleh Kosong"
          }
      }
    },
    keterangan: {
      type: DataTypes.TEXT,
      validation: {
          notEmpty: {
            msg: "Keterangan Tidak Boleh Kosong"
          }
      }
    },
    jumlah_pengguna: {
      type: DataTypes.INTEGER,
      validation: {
          notEmpty: {
            msg: "Jumlah Pengguna Tidak Boleh Kosong"
          }
      }
    },
    pendiri: {
      type: DataTypes.STRING,
      validation: {
        notEmpty: {
          msg: "Nama Pendiri Tidak Boleh Kosong"
        }
      }
    },
    tanggal_didirikan: {
      type: DataTypes.DATEONLY,
      validation: {
        notEmpty: {
          msg: "Tanggal Didirikan Tidak Boleh Kosong"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Application',
  });
  return Application;
};