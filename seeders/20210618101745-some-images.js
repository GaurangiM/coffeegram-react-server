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
      },
      {
        image: 'https://static.wixstatic.com/media/b31ac7_1feaf30d5e9c48a197e8ae1d98664c07~mv2.jpg/v1/fill/w_1024,h_1024,al_c,q_85,usm_0.66_1.00_0.01/b31ac7_1feaf30d5e9c48a197e8ae1d98664c07~mv2.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 15
      },
      {
        image: 'https://supplier.meetingselect.com/upload/ImageBig/deae6930-4966-4ccc-b6f0-ee77b74a126f.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 15
      },
      {
        image: 'https://www.maastrichtuniversity.nl/sites/default/files/styles/carousel_big/public/carrousel/19687975973_9573d6caaa_o.jpg?itok=ZDJ2vYi_',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 16
      },
      {
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/1f/67/2d/het-interieur-van-alley.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 16
      },
      {
        image: 'https://www.vanattekum.com/wp-content/uploads/2018/07/coffeelovers-ssc-coworking.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 17
      },
      {
        image: 'https://m.maastricht.stappen-shoppen.nl/uploads/image/5dc977b8b6c7be9944578e23-large.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 17
      },
      {
        image: 'https://fixedgearcoffee.com/wp-content/uploads/2020/02/FixedGearCoffeeMaastricht_11-02-2020_LeicaM9_SMQ-62-of-107-1024x681.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 18
      },
      {
        image: 'https://s3.eu-central-1.amazonaws.com/storage.knwu.nl/storage/2018/11/25110112/Foto4-1024x682.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 18
      },
      {
        image: 'https://www.koffietje.nl/wp-content/uploads/2020/07/fixed-gear-coffee-maastricht-62-1920x1282.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 18
      },
      {
        image: 'https://m.maastricht.stappen-shoppen.nl/uploads/image/5ab3c0362a5ab03082216aba-large.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 19
      },
      {
        image: 'https://www.dezwaanmaastricht.nl/uimg/zwaan/b17474_img3f.jpg?d=27&w=500',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 19
      },
      {
        image: 'https://www.koffietje.nl/wp-content/uploads/2021/02/IMG_20201111_124248-1920x2560.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 20
      },
      {
        image: 'https://weownrotterdam.nl/app/uploads/2020/04/Rotterdam_roast_coffee_04.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 20
      },
      {
        image: 'https://mk0europeancoffmnbn2.kinstacdn.com/wp-content/uploads/city-guides/cafes/1566/joy-espresso-rotterdam-social-media-1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 21
      },
      {
        image: 'https://joycoffee.nl/wp-content/uploads/2019/03/Joy-ontbijt-met-croissant-en-koffie-of-thee.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 21
      },
      {
        image: 'https://www.debuik.nl/fp/jeQDw0hRRp63YutmIZWG/convert?&w=837&h=500&fit=crop',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 21
      },
      {
        image: 'http://urbanmoms.nl/wp-content/uploads/2015/08/Hopper-11-4.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 22
      },
      {
        image: 'https://thecoffeevine.files.wordpress.com/2013/04/img_4598.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 22
      },
      {
        image: "https://media-cdn.tripadvisor.com/media/photo-s/03/ef/c7/f5/hopper.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 22
      },
      {
        image: 'https://caffebooon.nl/wp-content/themes/yootheme/cache/booon-9b2d3ade.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 23
      },
      {
        image: 'https://caffebooon.nl/wp-content/themes/yootheme/cache/Superfood-latte-c78c363c.png',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 23
      },
      {
        image: 'https://mk0europeancoffmnbn2.kinstacdn.com/wp-content/uploads/city-guides/cafes/2381/booon-rotterdam-social-media-2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 23
      },
      {
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/f9/39/99/perfect-portions.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 24
      },
      {
        image: 'https://d11s8ysge2pxse.cloudfront.net/app/uploads/2020/10/man-met-bril-hofbogen.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 24
      },
      {
        image: 'https://images0.persgroep.net/rcs/ndkRpngsjzOLIWBwZDTpH2XpqwA/diocontent/65661445/_crop/0/161/1580/893/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 24
      },
      {
        image: 'https://www.easyforsure.com/efsadminnew/images/vendorbusinessgallery/282_2_1518684244.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 25
      },
      {
        image: 'https://cdn.beanhunter.com/img/766e349786c3b1ee9f8bb58eceba4e5a.jpg?width=328.125&height=328.125',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 25
      },
      {
        image: 'https://mk0europeancoffmnbn2.kinstacdn.com/wp-content/uploads/city-guides/cafes/1990/single-estate-coffee-roasters-the-hague-netherlands-2-wendelien-barista.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 26
      },
      {
        image: 'https://www.koffietcacao.nl/wp-content/uploads/2019/10/Untitled-design-29.png',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 26
      },
      {
        image: 'https://www.timetomomo.com/wp-content/uploads/2019/06/mijn_3_laatste_ontdekkingen_in_Den_Haag_designroom_plenty_vincenzos.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 27
      },
      {
        image: 'https://images.happycow.net/venues/1024/15/74/hcmp157457_745486.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 27
      },
      {
        image: 'https://www.girlonthemove.nl/wp-content/uploads/2020/07/leukste-koffietentjes-in-den-haag-plenty-piet-heijnstraat-koffie-coffee.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 27
      },
      {
        image: 'https://10619-2.s.cdn12.com/rests/original/102_506424754.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 28
      },
      {
        image: 'https://i2.wp.com/thehaguehiphotspots.nl/wp-content/uploads/2017/09/Kaafi-4.jpg?fit=750%2C450&ssl=1',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 28
      },
      {
        image: 'https://i2.wp.com/www.foodaholics.nl/wp-content/uploads/2016/11/filtro-1.jpg?resize=800%2C600',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 29
      },
      {
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/17/61/6b/ba/photo1jpg.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        cafeId: 29
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('images', null, {});
    
  }
};
