'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('images', 
    [
      {
        image: 'https://www.iloveheadroom.com/wp-content/uploads/2018/02/Cafe_de_Jaren_118s-1024x683.jpg',
        createdAt: new Date(),
         updatedAt: new Date(), 
      },
      {
        image: 'https://images.myguide-cdn.com/amsterdam/companies/cafe-de-jaren/large/cafe-de-jaren-350766.jpg',
        createdAt: new Date(),
         updatedAt: new Date(), 
      },
      {
        image: 'https://pull-littlewanderbook.netdna-ssl.com/wp-content/uploads/2015/03/CoffeeCoconuts91.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        image: 'https://www.2foodtrippers.com/wp-content/uploads/2019/08/CT-Coffee-and-Coconuts-in-Amsterdam.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        image: 'https://backtoblackcoffee.nl/wp-content/uploads/2019/06/StancePhotography_BacktoBlack-70-1.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        image: 'https://backtoblackcoffee.nl/wp-content/uploads/2019/04/Back-to-Black-Van-hall-straat-Amsterdam.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/9f/0b/03/celebrating-our-opening.jpg?w=500&h=500&s=1',
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        image: 'https://imfeelinggood.nl/wp-content/uploads/10-Plekken-waar-je-de-lekkerste-koffie-kunt-halen-scaled.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        image: 'https://thecoffeevine.com/wp-content/uploads/2015/02/IMG_0356.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        image: 'https://www.koffietje.nl/wp-content/uploads/2018/12/caffenation-amsterdam-8-scaled.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        image: 'https://www.yourlittleblackbook.me/wp-content/uploads/2015/10/bocca-amsterdam-photocredits-jasperdewaal3.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        image: 'https://beanthere.at/2018/03/10/Review-Bocca-Coffee-Kerkstraat-Amsterdam/BoccaCoffee-Interior2.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        image: 'https://i.pinimg.com/originals/66/85/a8/6685a8991ea561655157cf6ecd49cb2b.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        image: 'http://www.amsterdamsights.com/eatdrink/pix/detoog.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/11/c7/71/welcome-to-coffee-bites.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/13/32/c6/photo0jpg.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        image: 'https://www.entreemagazine.nl/sites/default/files/styles/voorpagina-uitgelicht/public/afbeeldingen/nieuws/Blue%20Amsterdam%20interieur%20boven%20.jpeg?itok=mu3hYjy_',
        createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
        image: 'https://www.hakwood.com/images/gallery/28768/1575X1050/270117MDF17.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
