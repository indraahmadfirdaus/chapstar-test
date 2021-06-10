'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const appData = [
        {
          nama_aplikasi: 'tiktok',
          keterangan : 'aplikasi platform sosial video pendek yang didukung dengan musik',
          jumlah_pengguna: 10000,
          pendiri: 'Mark Zuckerberg',
          tanggal_didirikan: '2016-09-01'
        },
        {
          nama_aplikasi: 'facebook',
          keterangan : 'aplikasi layanan jejaring sosial',
          jumlah_pengguna: 20000,
          pendiri: 'Zhang Yiming',
          tanggal_didirikan: '2004-02-04'
        },
        {
          nama_aplikasi: 'instagram',
          keterangan : 'aplikasi berbagi foto dan video',
          jumlah_pengguna: 30000,
          pendiri: 'Kevin Systrom',
          tanggal_didirikan: '2010-10-06'
        },
        {
          nama_aplikasi: 'whatsapp',
          keterangan : 'aplikasi messaging',
          jumlah_pengguna: 40000,
          pendiri: 'Jan Koum',
          tanggal_didirikan: '2008-05-03'
        },
        {
          nama_aplikasi: 'twitter',
          keterangan : 'aplikasi jejaring sosial micro-blogging',
          jumlah_pengguna: 50000,
          pendiri: 'Jack Dorsey',
          tanggal_didirikan: '2006-07-15'
        },
      ]
      appData.forEach(eachData => {
        eachData.createdAt = new Date()
        eachData.updatedAt = new Date()
      })
      await queryInterface.bulkInsert('Applications', appData, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Applications', null, {});
  }
};
