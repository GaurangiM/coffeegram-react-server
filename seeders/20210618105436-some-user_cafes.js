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
         cafeId: 2
      },
      {
        review: 'On our last day in Amaterdam, had breakfast at the hotel and strolled down the street to enjoy the city one last time and stumbled upon this beautiful and elegant cafe. We took a table in the terrace, which was on the river and it was heavenly! I had cappuccino and it was the best I had in Amsterdam. If you enjoy having a good cup of coffee or late morning breakfast on the river, I would highly recommend this place.',
        rating: 4.5,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cafeId: 2
      },
      {
        review: "Coffee and Coconuts it's all in the title really, my two favourite things in the world!Amazing place for breakfast/brunch, interior is very unique and comfortable, staff are friendly and welcoming, and the vibe and atmosphere is perfect.I am a real coffee addict and this was by far the best coffee I had whilst in Amsterdam, they offer great milk alternatives as I have an allergy to cow's milk and some places you're limited to either Soy or Oat. The food was incredible and tasted amazing! Presentation speaks for itself in the photos.But the star of the show had to be their coconuts from Bali, I personally have never been to Bali it's on my list of places to go but the fact you can experience a little part of it in Amsterdam makes this place extra special. It was fresh, and the taste was like nothing I've ever had before. I would go back to Amsterdam just for one of those coconuts.",
        rating: 4.7,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cafeId: 1
      },
      {
        review: 'We were pretty much looking forward to visit this restaurant and could not have been better! This place is really crowded but we had a warm reception. There was no place for us once we came in and they told us to wait. After 15m or so we were kindly escorted to a nice and accomodating table. They really know what they are serving. The lady who took us gave us very good advice in what to have according to our personal taste. This is what we had. Enormous portions and tasted divine! Price was very reasonable. This will be definetly one of our top options if we ever come back to this amazing city! Thank you so much!',
        rating: 4.8,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        cafeId: 1
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
        userId: 1,
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
        userId: 2,
        cafeId: 6
      },
      {
        review: "We stumbled across this authentic, relaxed local Amsterdam cafe where we enjoyed a delicious meal. In a city where we have experienced good eating, this unpretentious cafe certainly met all our expectations. The menu was in Dutch and the friendly manager took the time to sit with us and explain the menu. The steak and fish dishes proved an excellent choice.We have been lucky enough to travel to many parts of the world and this will be one of those “ do you remember when we found that little cafe in Amsterdam” moment......",
        rating: 4.2,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cafeId: 7
      },
      {
        review: "What a find - the cafe was down the street from our Airbnb, and we learnt afterward that it was celebrating its 100th year anniversary this year. The server was very friendly, made excellent recommendations. Super vegie burger with veg chips!!! Topped with a great apple pie with icecream. Appears to be a popular place with the locals too.",
        rating: 4.6,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cafeId: 7
      },
      {
        review: "Stumbled upon this place while wandering. It's run by the sweetest couple who were so welcoming. The breakfast is well worth it's value because there's lots in it! There's the cutest neighbourly cat that will hang out with you which made the experience so special! I was able to enjoy breakfast, coffee, do work, pet the cat, and have a nice conversation with the owners. It felt calm and relaxing - I loved it!",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        cafeId: 8
      },
      {
        review: "We went there a few times, it was right next door to our hotel. Great service every time, the same man served us, and was really friendly and welcoming. The food was really good, and the iced coffee was amazing!! Really cute presentation too",
        rating: 4.3,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        cafeId: 8
      },
      

    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_cafes', null, {});
    
  }
};
