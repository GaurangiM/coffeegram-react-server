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
      },
      {
        review: "This is the most cozy place to have breakfast in Maastricht! We had a great breakfast with very good coffee. The staff is very welcoming and attentive. Would highly recommend it.",
        rating: 4.1,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        cafeId: 15
      },
      {
        review: "Tribunal is a well known little cafe within Maastricht. Cosy place with simple but good lunch. Located close to Vrijthof, family business, good service.",
        rating: 4.1,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        cafeId: 15
      },
      {
        review: "Favorite place for breakfast or just coffee and cake downtown Maastricht close to the river. Also well equipped for co-working.",
        rating: 4.1,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        cafeId: 16
      },
      {
        review: "In this café, you can actually park your bike inside! I love the concept! What's more, they serve delicious matcha latte. Last time I had this delicious drink, that was in Taiwan, three years before! Oh, I really love this place... I wish I would not live so ridiculously far from Maastricht.",
        rating: 4.1,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        cafeId: 16
      },
      {
        review: "Where else can you enjoy a cup of coffee in a medieval gothic church? Add to that the quality of the coffee and it makes for a wonderful experience. Maastricht is a great city to walk around in and this is a stop that should not be missed, particularly if you are a fan of high quality artisan coffee.",
        rating: 4.5,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        cafeId: 17
      },
      {
        review: "Good coffee (from Maastricht coffee roaster Blanche Dael) in a former church that is now a bookstore. Very special atmosphere. It is a self service style coffee bar and the people serving you at the counter are very nice.",
        rating: 4.7,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cafeId: 17
      },
      {
        review: "If you want to go for the best coffees available, visit Fixed Gear Coffee! The owners are always looking for perfection and willing to explain you everything on the specialties available. A visit in Maastricht is never complete without a visit to Fixed Gear Coffee to me. Big plus is the space to bring your bike safely inside.",
        rating: 4.7,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        cafeId: 18
      },
      {
        review: "Without a doubt my favorite spot for a mid ride coffee + refuel. Great vibes and unique selection of apparel & kit to browse though. A must see if you are in Maastricht !",
        rating: 4.9,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cafeId: 18
      },
      {
        review: "Not only did we enjoy the lovely luncheon food in Cafe the Swan but also some very nice beers on draft or from their big selection in which you can go and have a browse to select something nice to drink. Accompanied with pleasant service we certainly had a great time.",
        rating: 4.6,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cafeId: 19
      },
      {
        review: "Cafe de zwaan situated on the market square in Maastricht, between Burger King and KFC, on the corner, ideal to sit down after some serious pavement pounding for a coffee or for something to eat, good food with a good selection, very good service and a prime location to watch the world go by and re charge your batteries. This is a very popular watering hole in the summer months and more so when Andre Rieu concerts are in session. Enjoy your stay in Maastricht, you will not regret the experience.",
        rating: 4.9,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cafeId: 19
      },
      {
        review: "I've been here since they opened and every visit has been great. Staff is super friendly, coffee is great, food too. Outside seating since the beginning and a much needed addition to Rotterdam west.",
        rating: 4.5,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cafeId: 20
      },
      {
        review: "Super happy I got to experience the first day of the new terrace at Roast, I waited 8 months for this! Happy to see they were quite packed today. Also love the new menu. We had the Sauteed Mushrooms & spinach bagel and the Karaage Chicken bagel. Wow. Beyond expectations!! Compliments to the chef. See you tomorrow ;)",
        rating: 4.8,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cafeId: 20
      },
      {
        review: "During our stay in Rotterdam we started every day with a coffee from Joy. Nice place, good coffee, very friendly staff... Great!",
        rating: 4.6,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cafeId: 21
      },
      {
        review: "While visiting the Netherland in particular Rotterdam agreed for a coffee meeting at Joy ....what a joy. The staff and management where impeccable and really all kinds of coffees and cappuccinos with almost any kind of milk/soya...amazing great coffee with home made apple cake water with taste much much more a great place next to the kubus and the pencil. Close to the markthal. A good starting point to explore the city centre ....a hidden jewel in Rotterdam.",
        rating: 4.8,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        cafeId: 21
      },
      {
        review: "On a visit to Rotterdam we found hopper right near our hotel. Lucky we found it, we went for breakfast every morning. They have great coffees and a large tea selection. Best of all are the baked goods. Go early enough to try the amazing croissant, really one of the best I have ever had.",
        rating: 4.3,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cafeId: 22
      },
      {
        review: "We came here on a chilly Sunday morning - many other cafes in the same area were closed. Friendly welcome, good range of breaksfast/brunch/early-lunch things to pick from. Nice coffee, selection of teas - not just the usual ones, and other drinks - one of us had carrot juice, also a mint tea. Well priced, casual style, perfect for what we were after.",
        rating: 4.4,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        cafeId: 22
      },
      {
        review: "Came in on the way to the train station. Very handy location as it isn’t far to walk from the main amenities of the city, but out the way so feels much more of a suburban and residential location. Food was great and the staff were really helpful with recommendations. Coffee was lovely too",
        rating: 4.4,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        cafeId: 23
      },
      {
        review: "Cozy coffee cafe with a nice terrace in the center of Rotterdam. Coffee is amazing with nice options for sandwiches and cakes!",
        rating: 4.5,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cafeId: 23
      },
      {
        review: "This place is AMAZING! The brunch we had on a Sunday was good and the coffee just wow! I love how they give a card for customers describing where the coffee is from. The service is a little bit long but on a Sunday is totally understandable.I'll gladly come back!",
        rating: 4.6,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        cafeId: 24
      },
      {
        review: "This place has been around for years and has never disappointed us. We had a coffee (two flat whites )this morning, a freshly baked croissant and their home made cheese cake, all prepared with great love and care. I like the little cards with information about the beans they give you with the coffee.",
        rating: 4.7,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cafeId: 24
      },
      {
        review: "The type of place you can sit to work for hours and have wonderful coffee specialities. They have many long tables and electric sockets so it is ideal for an afternoon of people watching while you work",
        rating: 4.7,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        cafeId: 25
      },
      {
        review: "The design of the café is really nice and the coffee is delicious! Perfect place to spend some time with your friends or with your family either just for a coffee or also for a snack!",
        rating: 4.8,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cafeId: 25
      },
      {
        review: "Favorite cafe in The Hague! Best quality espresso/coffee, and nice that you get to choose which bean you want and learn about the sourcing. The croissants are all delicious, so inventive flavor-wise and always baked perfectly, and I highly recommend going for a bigger brunch as well. Pretty sure I’ve tried everything on the menu by now and I’d easily order everything again. The staff are also super friendly and helpful. Can’t say enough good things!",
        rating: 4.6,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cafeId: 26
      },
      {
        review: "Best coffee in town, no question! I can always expect lovely service and top-notch coffee. The staff never hesitate to give good recommendations and the homemade pastries are to die for! My personal favourite is the maple bacon roll,  with a nice flat white with it!",
        rating: 4.7,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cafeId: 26
      },
      {
        review: "We went to Plenty for the first time yesterday. It was just amazing, the service was great. The ambience is very cool, open kitchen with charm and generally cozy holiday vibes. Food was excellent, we had Shakshuka, Pancakes and the Avo bread. - yummy!",
        rating: 4.6,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        cafeId: 27
      },
      {
        review: "Lunch with the kids. Kids loved the pancakes and homemade ice tea. Excellent pumpkin soup and side salad and a coffee kombucha (my first). Finally, very friendly service. We will be back!",
        rating: 4.7,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cafeId: 27
      },
      {
        review: "Great place for breakfast! The place has a nice feel to it with beautiful interiors. I would recommend the Turkish eggs and chicken tikka. And yes the staff is friendly too.",
        rating: 4.6,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
        cafeId: 28
      },
      {
        review: "As someone who comes from a country where chains dominate the coffee house scene, I just love all the independent you find in The Netherlands - like this one in The Hague. Great coffee and a small, uncomplicated menu of delicious, freshly prepared dishes. Wonderful!",
        rating: 4.3,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cafeId: 28
      },
      {
        review: "A green oasis in a quiet street of The Hague. It seems as if many self-employed people are working here on their mostly Mac book. Nevertheless, it is a relaxed bar where you can enjoy different types of coffee and sweets.",
        rating: 4.5,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cafeId: 29
      },
      {
        review: "Following a review about a new shop in the Papestraat, I walked through this street. Then I also passed this coffee bar. The phrase 'single origin' on the window made me think this couldn't be a dime a dozen. So I went there to taste an espresso. I was not disappointed, it was a delicious coffee with a very distinct taste, rich in flavor ingredients. I come here a few times a week now",
        rating: 4.8,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        cafeId: 29
      }

    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_cafes', null, {});
    
  }
};
