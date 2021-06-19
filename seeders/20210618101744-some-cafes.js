'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cafes', 
    [
      {
        name: 'Café de Jaren',
        description: "Café de Jaren, open since 1990, is a bright and spacious café located in the center of Amsterdam, between Muntplein and the Amsterdam Music Theater on Waterlooplein. Inside, high-ceilinged spaces make an attractive setting for the bar and restaurant. And at the back, the first-floor balcony and sunny canal-side terrace on the Kloveniersburgwal offer views across the River Amstel. With its own jetty, the cafe can also be visited by boat.",
        contact: "+31(0)020 625 5771",
        imageUrl: "https://www.uitagenda.nl/storage/location/Caf---de-Jaren_uitagenda_amsterdam.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        addressId: 1
     },
      {
         name: 'CT Coffee & Coconuts',
         description: "YOUR TROPICAL HOME AWAY FROM HOME.Coffee & Coconuts is an all-day cafe where the sunsets are endless. And where it doesn’t matter the season; here is always a summertime state of mind. It’s a cafe where you can feel free, make spontaneous choices and do what feels good.As you step inside or sit outside, we want you to feel at home, just like we do. This is why as a family, not only as a team, we passionately roast your coffee in-house, freshly squeeze your O.J. every morning, brew your coffee the way you like it, lovingly cook your food, and thoughtfully bake your pastries.",
         contact: "+31(0)20 354 11 04",
         imageUrl: "https://331mrnu3ylm2k3db3s1xd1hg-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/Sprudge-CTcoffeecoconuts-KarinaHof-5Coffee__Coconuts_exterior_door4_Karina_Hof-740x494.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
         addressId: 2
      },
     {
      name: 'Back to Black',
      description: "Back to Black is founded by Noortje Vlutters and Inge Bulthuis. “We’ve known eachother since the age of 12 and started Back to Black in 2014. In 2015 we started to roast our own coffee and in 2016 we started to sell the coffee online in the webshop and to wholesale clients. In 2017 the homemade pies and cakes were so popular that we started our own little bakery on the first floor in the roastery. In 2017 we opened another coffeebar and in 2020 we opened our very own training center where we offer the well known Specialty Coffee Association training on different levels and the additional exams to get the international acknowledged certificates. The last years from 2014 on where quite a journey and we are super excited about what the next years will bring.”",
      contact: "+31(0)020-3377588",
      imageUrl: "https://www.culy.nl/wp-content/uploads/2016/07/Back-to-black-amsterdam7.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 3
     },
     {
      name: 'Jones Brothers Coffee Company',
      description: "Coffee sets the rhythm of your day. Coffee connects, brings us together and inspires. Every day you can enjoy a little happiness in every cup.Jones Brothers Coffee has been working on coffee happiness since 2013. From the bean to the cup, we go for a smile. We would like to invite you to our coffee world!",
      contact: "+31(0)020 723 8800",
      imageUrl: "https://www.englishspeakingnetwork.nl/wp-content/uploads/2019/02/jones-brothers-coffee_gallery-1068x841.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 4
     },
     {
      name: 'Caffènation Amsterdam',
      description: "Located in the relatively quiet and suburban Hoofdorppleinbuurt, part of which is also referred to as Amsterdam’s Belgian Quarter, Caffènation’s local outpost overlooks a lovely park and the end of the Postjeswetering. Spread out over two floors with a huge bar dominating the entrance on the upper level, Caffènation is bringing its own flair and way of doing things to a part of town that has remained largely untouched by the specialty coffee boom.",
      contact: "+31(0)20 354 11 04",
      imageUrl: "https://thecoffeevine.com/wp-content/uploads/2015/02/IMG_0346-700x525.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 5
     },
     {
      name: 'Bocca Coffee',
      description: "We are the first speciality coffee roaster in the Netherlands to manage the entire bean-to-cup process: from sourcing to roasting and packaging to serving.We are proud to have a diverse portfolio of businesses in the Netherlands and beyond: espresso bars, restaurants, hotels and offices. And, of course, a loyal following of individual coffee connoisseurs.",
      contact: "+31 321 31 46 67",
      imageUrl: "https://www.yourlittleblackbook.me/wp-content/uploads/2015/10/bocca-amsterdam-photocredits-jasperdewaal-header-1024x768.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 6
   },
   {
     name: 'Café de Toog Amsterdam',
     description: "In the best part of Amsterdam Oud-West - just steps away from the Overtoom, Vondelpark and Wilhelmina Gasthuis grounds - you will find Café de Toog, where you can enjoy the real atmosphere of a typical Amsterdam neighbourhood. It's a former hangout of rock 'n' roll star and painter Herman Brood",
     contact: "+31(0)020 618 5017",
     imageUrl: "https://www.amsterdamsights.com/eatdrink/pix/detoog.jpg",
     createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 7
  },
  {
    name: 'Blue Amsterdam',
    description: "Blue Amsterdam is a café and restaurant with an amazing 360-degree view of the city. Located in the top of a futuristic glass tower in the middle of the city centre, Blue offers a view of Amsterdam you have never seen before. You can see a lot of Amsterdam’s highlights: Rijksmuseum, Munttoren, Westerkerk, Central Station, Royal Palace and the flower market. Take the glass elevator to the third floor and have a look around. Every trip to Amsterdam should start at Blue!",
    contact: "+31 20 427 39 01",
    imageUrl: "https://www.leuketip.nl/images/db/59d758b2ce3e8e48e2650913/large.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    addressId: 9
  },
  
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cafes", null, {});
  }
};
