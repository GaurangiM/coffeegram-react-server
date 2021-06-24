'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user_cafes', 
    [
      {
         review: 'Wanted somewhere by the river for lunch- couldn’t have chosen better. Weather was glorious until a few spots of rain cleared the pontoon. Food was great and not too pricey considering the excellent location! Service was good too.',
         rating: 4,
         createdAt: new Date(),
         updatedAt: new Date(),
         userId: 1,
         cafeId: 1
      },
      {
        review: 'On our last day in Amaterdam, had breakfast at the hotel and strolled down the street to enjoy the city one last time and stumbled upon this beautiful and elegant cafe. We took a table in the terrace, which was on the river and it was heavenly! I had cappuccino and it was the best I had in Amsterdam. If you enjoy having a good cup of coffee or late morning breakfast on the river, I would highly recommend this place.',
        rating: 4.5,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 6,
        cafeId: 1
      },
      {
        review: "Coffee and Coconuts it's all in the title really, my two favourite things in the world!Amazing place for breakfast/brunch, interior is very unique and comfortable, staff are friendly and welcoming, and the vibe and atmosphere is perfect.I am a real coffee addict and this was by far the best coffee I had whilst in Amsterdam, they offer great milk alternatives as I have an allergy to cow's milk and some places you're limited to either Soy or Oat. The food was incredible and tasted amazing! Presentation speaks for itself in the photos.But the star of the show had to be their coconuts from Bali, I personally have never been to Bali it's on my list of places to go but the fact you can experience a little part of it in Amsterdam makes this place extra special. It was fresh, and the taste was like nothing I've ever had before. I would go back to Amsterdam just for one of those coconuts.",
        rating: 4.7,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cafeId: 2
      },
      {
        review: 'We were pretty much looking forward to visit this restaurant and could not have been better! This place is really crowded but we had a warm reception. There was no place for us once we came in and they told us to wait. After 15m or so we were kindly escorted to a nice and accomodating table. They really know what they are serving. The lady who took us gave us very good advice in what to have according to our personal taste. This is what we had. Enormous portions and tasted divine! Price was very reasonable. This will be definetly one of our top options if we ever come back to this amazing city! Thank you so much!',
        rating: 4.8,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cafeId: 2
      },
      {
        review: "One of the best cafés I've been to so far. And the latte is probably the best I’ve ever taste. The place is very cosy and the people that work here are very friendly and hospitable. I was recommended to taste the apple pie and I‘m fascinated. Strongly recommended.",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cafeId: 3
      },
      {
        review: "Tucked away in the corners of Amsterdam’s canal streets, is a tiny coffee bar that caters to your coffee needs. Prices are agreeable (EUR2 for an espresso / EUR3,40 for a flat white) and their homemade sweets are a pure delight. The place is decorated in a semi-modern boho chic style. It’s small but it’s cozy and that has a sort of charm to it. There’s a cat too, standing by the door kingly, greeting you as you come in. Only coffee lovers allowed.",
        rating: 4.1,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        cafeId: 3
      },
      {
        review: 'What a great coffee shop! We walked in and caught the brothers in a business meeting and they welcomed us to the shop and called the barista to make us our drinks. She was so friendly, made great drinks, and even gave us her recommendations for sightseeing (which turned out to be great). We also met a really friendly patron who likewise gave us his thoughts about the City.',
        rating: 4.5,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cafeId: 4
      },
      {
        review: "We were there to learn about coffee but the experience was out of this world. Richard is insightful and passionate about coffee and we talked to him for more than two hours. Definitely coming back and I highly recommend this place for those who are looking for some real deal coffee",
        rating: 4.2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        cafeId: 4
      },
      {
        review: "Definitely one of the best cafes around Amsterdam, we read about it before visiting and some comments mentioning the best coffee ever! We did like the coffee here and especially the decorative interiors were plush. There breads taste superb too.",
        rating: 4.4,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        cafeId: 5
      },
      {
        review: "My favorite coffee in town used to be Bocca.. until I visited CaffèNation. Love the taste of their coffee, high viscosity, rich bouquet, many layers that seem to follow each other. Nice laid back vibe, international atmosphere.",
        rating: 4.5,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cafeId: 5
      },
      {
        review: "This is my number one favorite coffee place in amsterdam. That doesnt mean its necessarily the BEST (hence the 4 out of 5 starts). Its my favorite due to the atmosphere, the excellent coffee, and the nice people. Why i didnt five 5 stars is because sometimes the service isnt as good, and it takes a long time to wait or your food is cold.",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cafeId: 6
      },
      {
        review: "I just love this spacious, inspiring atmosphere here. My all time favorite flat white with oat milk is even better with such excellent service and professional baristas. Love it and absolutely recommended.",
        rating: 4.5,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        cafeId: 6
      },
      {
        review: "We stumbled across this authentic, relaxed local Amsterdam cafe where we enjoyed a delicious meal. In a city where we have experienced good eating, this unpretentious cafe certainly met all our expectations. The menu was in Dutch and the friendly manager took the time to sit with us and explain the menu. The steak and fish dishes proved an excellent choice.We have been lucky enough to travel to many parts of the world and this will be one of those “ do you remember when we found that little cafe in Amsterdam” moment......",
        rating: 4.2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cafeId: 7
      },
      {
        review: "What a find - the cafe was down the street from our Airbnb, and we learnt afterward that it was celebrating its 100th year anniversary this year. The server was very friendly, made excellent recommendations. Super vegie burger with veg chips!!! Topped with a great apple pie with icecream. Appears to be a popular place with the locals too.",
        rating: 4.6,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        cafeId: 7
      },
      {
        review: "Love it.... You get a nice view over Amsterdam because of the 360° 'tower'.Staff is great. You defn get great service with a big smile. Quite busy on a weekend, but not that hard to get a table. Short wait is defn worth. Would highly recommend this place to any and everyone.",
        rating: 4.6,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 6,
        cafeId: 9
      },
      {
        review: "I had brunch at this restaurant with my partner on my birthday. The view is absolutely amazing, and the drinks are very good. I had an absolutely fantastic espresso martini. The breakfast itself was simple but tasty. I think if I were to go again, I would likely do just drinks and dessert and take in the view, but it’s a can’t miss because of the atmosphere.",
        rating: 4.7,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        cafeId: 9
      },
      {
        review: "Very friendly stuff and tasty food 😋 We had full english breakfast and full dutch breakfast, coffee was awesome too. The best place for breakfast in the area.",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cafeId: 8
      },
      {
        review: "Popular with both locals and tourists from around the world, this hidden gem should be on your list if you fancy a drink or bite to eat whilst in Amsterdam.Excellent service in a chilled/relaxed atmosphere. A great place to escape the troubles of the world with a fresh hot coffee.Food is all cooked to order from a very well priced menu that will blow your taste buds right out of the city.",
        rating: 4.3,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        cafeId: 8
      },
      {
        review: "It’s a heaven of beers. Lots of varieties of beers. The order taker lady was so kind to explain and suggest local beers, she helped me to choose the right beers. Food was tasty as well. The ambiance of the restaurant is fantastic. Must visit restaurant in Utrecht.",
        rating: 4.2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cafeId: 10
      },
      {
        review: "I was impressed by the variety of beers they have in their menu. I adore LaChouffe and TripelKarmeliet, there I was able to try them both. Staff is very friendly and also in winter it may be affordable to stay outside, thanks to heat lamps and blankets.",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        cafeId: 10
      },
      {
        review: "Every time I come to Utrecht, I pass by ‘de ontdekking’. It’s so cozy, staff super friendly and always something new to discover on the menu. The interior inspires your next vacation while you enjoy breakfast or lunch. Never disappoints!",
        rating: 4.5,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        cafeId: 11
      },
      {
        review: "Loved the high breakfast, lots of food with high quality products :) Service was nice, relaxing atmosphere ! Big thanks for taking our breakfast order after 12, much appreciated on a lazy sunday :) Definetely in our list to come back !",
        rating: 3.8,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cafeId: 11
      },
      {
        review: "Very personal and friendly customer service. Yoghurt and granola supreme.....in fact the best I have ever had. They even arranged packaged for take away. Eclectic style with a lot of charm and grace.",
        rating: 4.3,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        cafeId: 12
      },
      {
        review: "On a spontaneous trip to the Netherlands we made an unscheduled stop in the charming city Utrecht and were pleasantly surprised to find the Lucas cafe on Wittevrouwstraat. This is a quaint breakfast coffee bistro where they serve delicious Nutrition, not just 'food' for the masses; like their signature home made Chai latte and kombucha tea. The friendly staff, menu and atmosphere at Lucas are a truly mindful experience. Namaste in Lucas cafe!",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        cafeId: 12
      },
      {
        review: "We go here for breakfast everythime we are in Utrecht. If you are two get the platter. If you are solo get the club sandwich. The coffee is also great. We ordered mimosas... well we were on our holidays!",
        rating: 3.9,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cafeId: 13
      },
      {
        review: "Discovered by chance on a Sunday morning while looking for a place for breakfast. It's part of a sort of franchising brand. Very cosy place, good service, variegated food, lots of fresh veggy and fruit juices. excellent apple hand made tart. located in the town center. highly reccomended",
        rating: 4.7,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        cafeId: 13
      },
      {
        review: "This is such a lovely cozy cafe near the centre of Utrecht. It opens early (8am) and the coffee is fantastic - and the cafe has the Melbournian coffee house look which as Australians we really enjoyed. the coffee was strong, hot, and they also catered for soy drinkers. It was also nice that they had some gluten free options if you wanted a quick snack with your coffee.",
        rating: 4.3,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        cafeId: 14
      },
      {
        review: "This is the best coffee I have had in Utrecht and I also love their cakes; the best part is that they also have several vegan options! Their tables are laptop free zones, but they do have one table (which sits three) where one can work. It's a small cafe and not one of those commercial places so I love it even more. Plus its right on the oudegracht!",
        rating: 4.2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        cafeId: 14
      }
      

    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_cafes', null, {});
    
  }
};
