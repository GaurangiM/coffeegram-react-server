'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('images', 
    [
      {
        image: 'https://pull-littlewanderbook.netdna-ssl.com/wp-content/uploads/2015/03/CoffeeCoconuts91.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 2
      },
      {
        image: 'https://www.2foodtrippers.com/wp-content/uploads/2019/08/CT-Coffee-and-Coconuts-in-Amsterdam.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 2
      },
      {
        image: 'https://www.iloveheadroom.com/wp-content/uploads/2018/02/Cafe_de_Jaren_118s-1024x683.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 1
      },
      {
        image: 'https://images.myguide-cdn.com/amsterdam/companies/cafe-de-jaren/large/cafe-de-jaren-350766.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 1 
      },
      {
        image: 'https://backtoblackcoffee.nl/wp-content/uploads/2019/06/StancePhotography_BacktoBlack-70-1.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 3
      },
      {
        image: 'https://backtoblackcoffee.nl/wp-content/uploads/2019/04/Back-to-Black-Van-hall-straat-Amsterdam.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 3
      },
      {
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/9f/0b/03/celebrating-our-opening.jpg?w=500&h=500&s=1',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 4
      },
      {
        image: 'https://imfeelinggood.nl/wp-content/uploads/10-Plekken-waar-je-de-lekkerste-koffie-kunt-halen-scaled.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 4
      },
      {
        image: 'https://thecoffeevine.com/wp-content/uploads/2015/02/IMG_0356.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 5
      },
      {
        image: 'https://www.koffietje.nl/wp-content/uploads/2018/12/caffenation-amsterdam-8-scaled.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 5
      },
      {
        image: 'https://www.yourlittleblackbook.me/wp-content/uploads/2015/10/bocca-amsterdam-photocredits-jasperdewaal3.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 6
      },
      {
        image: 'https://beanthere.at/2018/03/10/Review-Bocca-Coffee-Kerkstraat-Amsterdam/BoccaCoffee-Interior2.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 6
      },
      {
        image: 'https://i.pinimg.com/originals/66/85/a8/6685a8991ea561655157cf6ecd49cb2b.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 7
      },
      {
        image: 'http://www.amsterdamsights.com/eatdrink/pix/detoog.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 7
      },
      {
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/0a/05/10/coffee-bites-cafe-grill.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 8
      },
      {
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/13/32/c6/photo0jpg.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 8
      },
      {
        image: 'https://www.entreemagazine.nl/sites/default/files/styles/voorpagina-uitgelicht/public/afbeeldingen/nieuws/Blue%20Amsterdam%20interieur%20boven%20.jpeg?itok=mu3hYjy_',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 9
      },
      {
        image: 'https://www.hakwood.com/images/gallery/28768/1575X1050/270117MDF17.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 9
      },
      {
        image: 'https://media.indebuurt.nl/utrecht/2019/09/07174858/neutje-utrecht-4.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 10
      },
      {
        image: 'https://media.indebuurt.nl/utrecht/2019/09/07174850/neutje-utrecht-6.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 10
      },
      {
        image: 'http://www.deontdekkingutrecht.nl/wp-content/uploads/2015/03/MG_2316.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 11
      },
      {
        image: 'https://hotspotjes.nl/wp-content/uploads/2017/11/De-Ontdekking-2-min.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 11
      },
      {
        image: 'https://lucasutrecht.nl/wp-content/uploads/2020/08/Fotos-Lucas-22-04-20-bewerkt-3-scaled.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 12
      },
      {
        image: 'https://htspt.co/media/sights/321-image.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 12
      },
      {
        image: 'https://www.leuketip.nl/images/db/5ff08c20ce3e8e67c99f4a47/large.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 13
      },
      {
        image: 'https://denationalefranchisegids.nl/wp-content/uploads/2014/11/Anne-Max.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 13
      },
      {
        image: 'https://tkoffieboontje.nl/wp-content/uploads/MarcoReeuwijk_20170914_KoffieboontjeOudeGracht_10019.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 14
      },
      {
        image: 'https://mk0europeancoffmnbn2.kinstacdn.com/wp-content/uploads/city-guides/cafes/1376/tKoffiebontje-Utrecht-web.jpg',
        createdAt: new Date(),
         updatedAt: new Date(),
         cafeId: 14
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('images', null, {});
    
  }
};
