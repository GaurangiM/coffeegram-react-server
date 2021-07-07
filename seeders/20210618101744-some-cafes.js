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
      description: "Back to Black is founded by Noortje Vlutters and Inge Bulthuis.We’ve known eachother since the age of 12 and started Back to Black in 2014. In 2015 we started to roast our own coffee and in 2016 we started to sell the coffee online in the webshop and to wholesale clients. In 2017 the homemade pies and cakes were so popular that we started our own little bakery on the first floor in the roastery. In 2017 we opened another coffeebar and in 2020 we opened our very own training center where we offer the well known Specialty Coffee Association training on different levels and the additional exams to get the international acknowledged certificates. The last years from 2014 on where quite a journey and we are super excited about what the next years will bring.",
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
    name: 'Coffee & Bites',
    description: "More than just 'coffee'.Although the sound of the name may suggest otherwise, Coffee & Bites' service goes far beyond serving all kinds of coffee to take away. Since its opening in June 2008 (Coffee to Walk), the cozy, informal establishment has become a hotspot of the Plantage-Weesperbuurt, where many neighbors, students, tourists and 'casual'passers-by like to settle down.Real coffee, the smell of freshly baked rolls and croissants, the morning newspaper, a magazine or a good conversation. The ultimate feeling and the warm, relaxed atmosphere is the ideal start to the day. Welcome at Coffee & Bites. Now almost 13 years later.Prepare Coffee & Bites for the evenings. For the time being, only for collection and delivery, but in the not too distant future the doors will remain open until the evening. For those who want to settle down for a drink and a bite after work, Coffee & Bites is the perfect location in the Plantage neighborhood.Celebrate or discuss something? Coffee & Bites is also very suitable for holding various activities. More info? Feel free to walk in!",
    contact: "+31 (0) 20-4287968",
    imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/1b/11/c7/71/welcome-to-coffee-bites.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    addressId: 8
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
  {
    name: "Cafe ’t Neutje",
    description: "Since 1981, a friendly cafe spot with more than 50 special beers in the Neude, the heart of Utrecht. From student to Senior: the whole Utrecht feels at home at Cafe ’t Neutje",
    contact: "+31 30 232 2458",
    imageUrl: "https://media-cdn.tripadvisor.com/media/photo-p/16/50/cc/b9/cafe-t-neutje.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    addressId: 10
    },
    {
    name: "De Ontdekking",
    description: "We converted the building in 2013 and kept the travel theme in the menu and the interior. De Ontdekking offers a cozy, informal environment, in which every corner has its own atmosphere",
    contact: "+31 30 751 47 19",
    imageUrl: "https://media.insiders.nl/uba/files/image/de-ontdekking_244468997.jpeg",
    createdAt: new Date(),
    updatedAt: new Date(),
    addressId: 11
    },
    {
    name: "Lucas",
    description: "Lucas is there for everyone who consciously opts for taste and attention to the product. It is a place where you come to yourself and be inspired. This in a very contemporary, creative and cool ambiance!",
    contact: "+31 30 737 05 67",
    imageUrl: "https://www.feelgoodbyfood.nl/wp-content/uploads/2016/12/IMG_2927-1-e1482263217712.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    addressId: 12
    },
    {
    name: "Anne & Max Utrecht",
    description: "For breakfast, coffee, lunch, high tea or afternoon drinks. We work with fresh, authentic, mostly organic products. We are a living room in the city, a place where you are at home every moment of the day and feel welcome.",
    contact: "+31 30 760 1118",
    imageUrl: "https://www.annemax.nl/wp-content/uploads/2019/04/AnneMax-Utrecht-003-1000x0-c-default.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
    addressId: 13,
    },
    {
      name: "'t Koffieboontje",
      description: "We are available for you daily from 08:00 to 17:30. Whether you want to chat, relax or read a book. In the cozy window seat in the hanging chair with a view of the canal. Make yourself at home!",
      contact: "+31 30 877 8787",
      imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/1a/fb/7c/83/welcome-t-koffieboontje.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 14,
    },
    {
      name: "Tribunal",
      description: "Cafe de Tribunal. After 59 years, the Graus Family, Leo, carries the baton left to Ture and Rachel. Soon the new website will go completely online, and Café de Tribunal will open its doors again. The Tribunal will remain closed when the terraces open again. We do this to prepare ourselves in peace for a great time ahead. We thank you for  understanding and keep you informed of the opening date. From that moment on, Tuur and Rachel take you on this special journey.",
      contact: "+31 43 321 0390",
      imageUrl: "https://www.wijlimburg.nl/wp-content/uploads/2021/03/Verkoop-Tribunal-Maastricht.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 15
    },
    {
      name: "Alley Cat Bikes & Coffee",
      description: "Roastery, Café and Cycling Store in one. Our space provides a new level of “small store” experience in the Netherlands, a place where cycling essentials meets specialty coffee. We offer any coffee and cycling enthusiast a unique experience. In the city centre of Maastricht you sit down, relax, order your favourite coffee and soak up the cycling vibe. This is your favourite hangout. If you are looking for a new bike, we’ve got you covered as well. We have a unique approach to selling bikes.",
      contact: "",
      imageUrl: "https://www.fietsactief.nl/wp-content/uploads/2016/02/AlleyCatBikesandCoffee_17-07-2015_BMP_SMQ-44-1024x681.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 16
    },
    {
      name: "Coffeelovers Dominicanen",
      description: "According to many, the most beautiful establishment of espresso bar Coffeelovers, located in the most beautiful bookstore in the world (source: The Guardian ) you can enjoy heavenly coffee and tea. The Dominicanerkerk is an eleventh century church in the center of Maastricht and has been converted into a bookstore and coffee bar since 2008. Enjoy coffee and pastries on the altar of the Dominican Church.",
      contact: "+31 (0)43 356 19 44,",
      imageUrl: "https://www.tunify.com/wp-content/uploads/2019/06/coffeelovers2-1200x450.png",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 17
    },
    {
      name: "Fixed Gear Coffee",
      description: "As much as cycling is a passion for us, our place wouldn’t be half as good without our third wave specialty single origin coffee and homemade cakes. As a progressive coffee bar we believe each different coffee (single origin or estate) should entail a different tasting experience. That’s why we always prioritise our coffees to have pronounced taste notes of the coffee bean and we avoid the bitter, dry, and roasty taste which unfortunately most people are familiar with as ‘coffee’. For our coffee beans we have an amazing cooperation with White Label Coffee, a micro roaster from Amsterdam which won best roaster at the Amsterdam Coffee Festival ’19. We also found an amazing roaster in Sey Coffee. Located in Brooklyn, NYC Sey Coffee has made a big name for itself in the world of coffee. In 2019 they were awarded best Coffee Bar in the whole of the US. After we tasted some of their coffees we were sold and we had to get them in. More locally, we also work with Dutch Barista Coffee and occasionally you can also find coffee from other top roasters from all around the world on our grinders and shelves. On top of that we make our espresso’s on a beautiful Kees van der Westen Mirage Idrocompresso 3 group levermachine which pushes the water through the coffee grinds from 12 to 0 bar creating a unique tasting profile making single origin coffee even more tasteful than on a traditional pump espresso machine. To make sure that our milky coffees are also top of the bill we only work with farm fresh Jersey Milk and for those preferring Vegan milky drinks, we also work with Oatly. In short, no matter how you drink your coffee, we’ll make sure it is one of the best you have ever tasted! For those who want to make great coffee at home, we also sell the coffee beans we have on our grinders!",
      contact: "+31 6 27493709",
      imageUrl: "https://media-exp3.licdn.com/dms/image/C4D1BAQEUKjRo2vXASg/company-background_10000/0/1534954117280?e=2159024400&v=beta&t=zL-UFwfr-dLGouvXQvvqQ9TU4MJhZI0OAZEZD8dudEo",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 18
    },
    {
      name: "Café De Zwaan",
      description: "For more than a hundred years a meeting point on the cozy and busy Markt of Maastricht. Inside the cozy brown cafe we ​​have room for approximately 60 guests. The Etage, with a beautiful view of the Markt and the old town hall, can accommodate 35 guests. Outside on the cozy terraces there is room for another 120 guests. Cafe de Zwaan for breakfast, lunch, dinner and drinks.",
      contact: "+31 43 321 5421",
      imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/18/39/99/02/cafe-de-zwaan.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 19
    },
    {
      name: "ROAST",
      description: "The idea of roast began in a small restaurant in queenstown, new zealand. having worked around the world in coffee, we saw potential to bring our knowledge and experience to rotterdam. Our vision is simple. good coffee, friendly service and fresh produce. But we’ll let you be the judge. - ellis & kim",
      contact: "010 848 4772",
      imageUrl: "https://10619-2.s.cdn12.com/rests/original/101_508204535.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 20
    },
    {
      name: "JOY ESPRESSO AND MORE",
      description: "Joy is part of my name Joyce and stands for fun and cheerfulness. That is the atmosphere that our coffee bar radiates. After having worked for many years in Rotterdam education and a number of years in the financial administration, I started training to become a Barista. Combined with a passion for coffee and tea and a love for baking cakes and good food, the idea arose to start a coffee bar. The result is Joy!espresso and more, a fine coffee bar in the center of Rotterdam. With a view of the cube houses you can enjoy our coffee, tea, yogurts, sandwiches and cakes.",
      contact: "010 313 8631",
      imageUrl: "https://i1.wp.com/theorangebackpack.nl/wp-content/uploads/2020/03/IMG_5303.jpg?resize=1024%2C683&ssl=1",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 21
    },
    {
      name: "HOPPER NOORD",
      description: "In 2010, a plan was born: to start a small coffee bar. A place where you can 'be good', enjoy the best coffee and where a delicious lunch is served. But then small and well-arranged, nice and relaxed ... that was a bit different! During the process all kinds of questions arose that had to be answered: 'Which coffee are we going to work with? And with what bread? Which products suit us? Everything organic? One thing was certain: we wanted taste to be decisive. During our search for taste, almost all questions eventually got the same answer: We're going to do that ourselves!. Imitating turned out not to be our thing, doing it ourselves was. So there was a real 'floor oven' as is customary in France for baking our own sourdough bread. And a Giesen coffee roaster, to roast the coffee beans. Everyone knows the rest of history. With Hopper, little is left to chance; if we make it ourselves then we know what's in it and then we know it's good! We have grown into a fully independent company, with a second branch at Zwaanshals and a third in Zeist, where we do our best to provide everyone with what drives us most: Taste!",
      contact: "010 223 0993",
      imageUrl: "https://www.yourlittleblackbook.me/wp-content/uploads/2015/03/hopper-rotterdam.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 22
    },
    {
      name: "BOOON",
      description: "We’re a neighbourhood cafe in Provenierswijk, one of the few historic neighbourhoods existing in Rotterdam. Here quality ingredients, a great atmosphere and friendly service is served with a lot of care. ",
      contact: "010 - 737 0782",
      imageUrl: "https://mintgreenmind.nl/wp-content/uploads/2016/02/booon2.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 23
    },
    {
      name: "MAN MET BRIL KOFFIE",
      description: "Contemporary cafe with on-site roasted coffee also offering breakfast, lunch & pastries.",
      contact: "010 307 2855",
      imageUrl: "https://cdn.shopify.com/s/files/1/0035/8101/8212/articles/ff0e8eee-278b-4dbe-bd93-da24fed028c8_8911cd43-f74f-44e1-96eb-5198b4ace8a4_1600x.jpg?v=1548166532",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 24
    },
    {
      name: "HOUSE OF TRIBES CAFÉ",
      description: "House of Tribes is a new coffee place in the heart of Den Haag created and crafted by Jones Brothers Coffee Company, Amsterdam. We are all part of a tribe – a professional tribe, a student tribe, a community or just a group of friends who want to gather to work, to chill, to generate creative ideas or discuss future plans. House of Tribes is designed to be that meet-up place for everybody. A friendly place. A place where everyone feels at home. A cosy atmosphere, a comfortable space for inspired thinking. A special place where you can discover and enjoy crafted coffees, beautiful teas and handmade foods. It’s as simple as that really. House of Tribes – Our coffee house, your coffee home, your community café.",
      contact: "070 205 0220",
      imageUrl: "https://houseoftribes.nl/wp-content/uploads/External_window-3.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 25
    },
    {
      name: "SINGLE ESTATE COFFEE ROASTERS",
      description: "Single Estate is a modern specialty coffee roastery, with a focus on the best coffee possible. We buy coffee directly from the producer and work together with the best barista’s to create a unique, honest product. We share the beautiful stories of passionate coffee farmers from Central and South America and countries such as Rwanda and Ethiopia. We continue the work of these coffee farmers in the roastery. By roasting light, the coffee retains its unique flavors and terroir. Our quality control and the feedback from our baristas is very important. The roasting profiles are adjusted and great coffees are created, full of characteristics and flavours, each with a unique story.",
      contact: "+31 174535303",
      imageUrl: "https://331mrnu3ylm2k3db3s1xd1hg-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/SingleEstate_PatrickGroenewoldKarinaHof.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 26
    },
    {
      name: "PLENTY",
      description: "PLENTY is the place in The Hague to enjoy coffee, breakfast, lunch and homemade cakes. Here you can get away from the crowds, relax and recharge. In our organic & 100% plant-based kitchen and bar we lovingly prepare surprising and nutritious dishes with Middle Eastern influences, whose ingredients have been carefully selected. You can find us near you, the Zeeheldenkwartier. We welcome you with open arms in our living room.",
      contact: "+31 612305973",
      imageUrl: "https://www.plentydenhaag.nl/wp-content/uploads/2020/10/Foto-FD-1024x683.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 27
    },
    {
      name: "KAAFI",
      description: "We are the leading specialty coffee bar located in the heart of The Hague and we were nominated Best Coffee Concept by Entree Magazine in our first year. Serving premium, specialty coffees, breakfast, lunch and homemade cakes!",
      contact: "070 209 7070",
      imageUrl: "https://images.the500hiddensecrets.com/2019-08/the_hague-drink-kaafi.jpg?auto=format&fit=max&h=1080&ixlib=php-1.1.0&q=65&w=1920&s=90ff0367770e49de04b2b2669aa6abea",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 28
    },
    {
      name: "FILTRO KOFFIE BAR",
      description: "Speciality coffee Breakfast - Food - pastries - 🌱 Open everyday from 9:00 tot 18:00!",
      contact: "",
      imageUrl: "https://www.followmyfootprints.nl/wp-content/uploads/2016/11/Filtro-Den-Haag-Papestraat.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: 29
    }
  
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cafes", null, {});
  }
};
