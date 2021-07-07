const { Router } = require("express");
const Cafe = require("../models").cafe;
const Address = require("../models").address;
const Image = require("../models").image;
const UserCafe = require("../models").user_cafe;
const User = require("../models").user
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allCafes = await Cafe.findAll({
      include: [Address, Image, UserCafe]
    });
    return res.status(200).send({ message: 'Cafes fetched', allCafes });
  } catch (e) {
    console.log(e.message)
    next(e)
  }
})

router.get("/:cafeId", async (req, res, next) => {
  try {
    const id = req.params.cafeId;
    const cafe = await Cafe.findByPk(id, {
      include: [Address, Image, { model: UserCafe, include: [User] }]
    });
    return res.status(200).send({ message: 'Cafe fetched', cafe });
  } catch (e) {
    console.log(e.message)
    next(e)
  }
})

router.get("/city/:cityName", async (req, res, next) => {
  try {
    const cityName = req.params.cityName;
    const cafesInGivenCity = await Address.findAll({
      include: [Cafe]
    })

    const result = cafesInGivenCity.filter(cafe => cafe.city.toLowerCase() === cityName.toLowerCase())
    console.log(result)
    if (result.length === 0) {
      res.status(400).send(`No cafes in ${city}`)
    } else {
      return res.status(200).send({ message: 'Cafes in given city fetched', result });
    }

  } catch (e) {
    console.log(e.message)
    next(e)
  }
})

router.get("/:cafeName", async (req, res, next) => {
  try {
    const cafeName = decodeURI(req.params.cafeName)
    const allCafes = await Cafe.findAll();
    const cafe = await allCafes.find(cafe => cafe.name.toLowerCase() === cafeName.toLowerCase())
    //console.log(cafe, cafeName)
    if (!cafe) {
      res.status(400).send(`No cafe with name: ${cafeName}`)
    } else
      return res.status(200).send({ message: 'Cafe with given name fetched', cafe });
  } catch (e) {
    console.log(e.message)
    next(e)
  }
})

router.get("/images/all", async (req, res, next) => {
  try {
    const cafes = await Cafe.findAll()
    const allPosterImages = await cafes.map(cafe => cafe.imageUrl)
    res.status(200).send({ message: 'All cafe poster images fetched', allPosterImages })
  } catch (e) {
    console.log(e.message)
    next(e)
  }
})

router.get("/:cafeId/reviews", async (req, res, next) => {
  try {
    const id = req.params.cafeId
    const reviews = await UserCafe.findAll({
      where: { cafeId: id }
    })
    //console.log(reviews)
    res.status(200).send({ message: 'All reviews for given cafe fetched', reviews })
  } catch (e) {
    console.log(e.message)
    next(e)
  }
})

router.get("/:userId/mycafes", async (req, res, next) => {
  try {
    const id = req.params.userId
    const user = await User.findByPk(id)
    if (!user) {
      res.status(400).send(`Invalid user`)
    }
    const userCafes = await UserCafe.findAll({
      where: { userId: id },
      include: [User, { model: Cafe, include: [Address] }]
    })
    res.status(200).send({ message: 'All cafes for given user fetched', userCafes })
  } catch (e) {
    console.log(e.message)
    next(e)
  }
})

router.post("/postreview", authMiddleware, async (req, res) => {
  const { userId, cafeId, review, rating } = req.body;
  try {
    const userCafe = await UserCafe.create({
      cafeId,
      userId,
      review,
      rating,
    })
    const newUserCafe = await UserCafe.findByPk(userCafe.id, {
      include: [User]
    })
    console.log(newUserCafe)
    res.status(201).send({ message: "Review posted", newUserCafe });
  } catch (e) {
    console.log(e.message)
    next(e)
  }
})

router.post("/postnewcafe", authMiddleware, async (req, res, next) => {
  const { name, description, image,
    postCode, houseNumber, street, city, latitude, longitude } = req.body;
  try {
    const newAddress = await Address.create({
      postCode,
      houseNumber,
      streetName: street,
      city,
      latitude,
      longitude
    })
    const newCafe = await Cafe.create({
      name,
      description,
      imageUrl: image,
      addressId: newAddress.id
    })
    res.status(201).send({ message: "New Cafe posted", newAddress, newCafe });
  } catch (e) {
    console.log(e.message)
    next(e)
  }
})

router.post('')


module.exports = router