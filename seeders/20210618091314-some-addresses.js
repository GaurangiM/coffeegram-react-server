'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('addresses', 
    [
      {
        houseNumber: 20,
        postCode: '1012 CP',
        streetName: 'Nieuwe Doelenstraat',
        city: 'Amsterdam',
        latitude: 52.36806,
        longitude: 4.89535,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        houseNumber: 282,
        postCode: '1072 GK',
        streetName: 'Ceintuurbaan',
        city: 'Amsterdam',
        latitude: 52.35267,
        longitude: 4.89145,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        houseNumber: 48,
        postCode: '1017 SP',
        streetName: 'Weteringstraat',
        city: 'Amsterdam',
        latitude: 52.36104,
        longitude: 4.88857,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        houseNumber: 54,
        postCode: '1073 VC',
        streetName: 'Sint Willibrordusstraat',
        city: 'Amsterdam',
        latitude: 52.35419,
        longitude: 4.90077,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        houseNumber: 120,
        postCode: '1058 KZ',
        streetName: 'Warmondstraat',
        city: 'Amsterdam',
        latitude: 52.35474,
        longitude: 4.84928,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        houseNumber: 96,
        postCode: '1017 GP',
        houseNumberExt: 'H',
        streetName: 'Kerkstraat',
        city: 'Amsterdam',
        latitude: 52.3644,
        longitude: 4.88681,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        houseNumber: 142,
        postCode: '1054 XV',
        houseNumberExt: 'HS',
        streetName: 'Nicolaas Beetsstraat',
        city: 'Amsterdam',
        latitude: 52.36219,
        longitude: 4.86757,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        houseNumber: 44,
        postCode: '1018 DH',
        houseNumberExt: 'HS',
        streetName: 'Plantage Middenlaan',
        city: 'Amsterdam',
        latitude: 52.36593,
        longitude: 4.91248,
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        houseNumber: 457,
        postCode: '1012 WP',
        streetName: 'Winkelcentrum Kalverpassage, Singel',
        city: 'Amsterdam',
        latitude: 52.3672,
        longitude: 4.89142,
        createdAt: new Date(),
         updatedAt: new Date(),
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('addresses', null, {});
  }
};
