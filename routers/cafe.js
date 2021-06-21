const { Router } = require("express");
const Cafe = require("../models").cafe;
const Address = require("../models").address;

const router = new Router();

router.get("/", async(req, res, next)=> {
  try {
    const allCafes = await Cafe.findAll({
      include: [Address]
    });
    return res.status(200).send({message: 'Cafes fetched', allCafes });
  }catch(e) {
    console.log(e.message)
    next(e)
  }
})

router.get("/city/:cityName", async(req, res, next)=> {
  try {
    const cityName = req.params.cityName;
    const cafesInGivenCity = await Address.findAll({
      include: [Cafe]
    })
    
    const result = cafesInGivenCity.filter(cafe=> cafe.city.toLowerCase() === cityName.toLowerCase())
    console.log(result)
    if(result.length === 0) {
      res.status(400).send(`No cafes in ${city}`)
    } else {
      return res.status(200).send({message: 'Cafes in given city fetched', result });
    }
    
  }catch(e) {
    console.log(e.message)
    next(e)
  }
})

router.get("/:cafeName", async(req, res, next)=> {
  try {
    const cafeName = decodeURI(req.params.cafeName)
    const allCafes = await Cafe.findAll();
    const cafe = await allCafes.find(cafe=> cafe.name.toLowerCase() === cafeName.toLowerCase())
    //console.log(cafe, cafeName)
    if(!cafe) {
      res.status(400).send(`No cafe with name: ${cafeName}`)
    } else 
    return res.status(200).send({message: 'Cafe with given name fetched', cafe });
  } catch(e) {
    console.log(e.message)
    next(e)
  }
})

router.get("/images/all", async(req, res, next)=> {
  try {
    const cafes = await Cafe.findAll()
    const allPosterImages = await cafes.map(cafe=> cafe.imageUrl)
    res.status(200).send({message: 'All cafe poster images fetched', allPosterImages})
  }catch(e) {
    console.log(e.message)
    next(e)
  }
})


module.exports = router