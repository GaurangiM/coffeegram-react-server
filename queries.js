const User = require("./models").user
const Cafe = require("./models").cafe
const Image = require("./models").image
const Address = require("./models").address
const UserCafe = require("./models").user_cafe
const axios = require('axios')

async function getAllUsers() {
  try {
    const allUsers = await User.findAll();
    return allUsers.map(user => user.toJSON());
  } catch (e) {
    console.log(e);
  }
}

async function getAllCafes() {
  try {
    const allCafes = await Cafe.findAll();
    return allCafes.map(cafe => cafe.toJSON());
  } catch (e) {
    console.log(e);
  }
}

async function getAllImages() {
  try {
    const allImages = await Image.findAll();
    return allImages.map(image => image.toJSON());
  } catch (e) {
    console.log(e);
  }
}

async function getAllAddresses() {
  try {
    const allAddresses = await Address.findAll();
    return allAddresses.map(address => address.toJSON());
  } catch (e) {
    console.log(e);
  }
}

async function getAllUserCafes() {
  try {
    const allUserCafes = await UserCafe.findAll();
    return allUserCafes.map(userCafe => userCafe.toJSON());
  } catch (e) {
    console.log(e);
  }
}

//Query relations
async function getCafesWithImages() {
  try {
    const allCafesWithImages = await Cafe.findAll(
      {
        include: [Image]
      }
    );
    return allCafesWithImages.map(cafe => cafe.toJSON());
  } catch (e) {
    console.log(e);
  }
}

async function getCafeWithAddress(id) {
  try {
    const cafeWithAddress = await Cafe.findByPk(id,
      {
        include: [Address]
      }
    );
    return cafeWithAddress.toJSON();
  } catch (e) {
    console.log(e);
  }
}

async function getCafeWithAddressImage(id) {
  try {
    const cafeWithAddressImage = await Cafe.findByPk(id,
      {
        include: [Address, Image]
      }
    );
    return cafeWithAddressImage.toJSON();
  } catch (e) {
    console.log(e);
  }
}

async function getCafesVisitedByUser(id) {
  try {
    const cafe = await UserCafe.findAll({
      where: {userId: id}
    });
    return cafe.map(cafe=> cafe.toJSON());
  } catch (e) {
    console.log(e);
  }
}

async function getCafeWithGivenName(name) {
  const encodedName = encodeURI(name)
  console.log(encodedName)
  try {
    const cafe = await axios.get(`http://localhost:4000/cafes/${encodedName}`)
    console.log(cafe.data)
  }catch(e) {
    console.log(e)
  }
  
  
}

async function getCafesInGivenCity(cityName) {
  console.log(cityName)
  try {
    const cafe = await Cafe.findAll({
      include: [Address],
    });
    console.log(cafe)
    return cafe.filter(cafe=> cafe.address.city === cityName);
  } catch (e) {
    console.log(e);
  }
}

//getAllUsers().then(users => console.log(users));
//getAllCafes().then(cafes=> console.log(cafes)) 
//getAllImages().then(images=> console.log(images))
//getAllAddresses().then(addresses=> console.log(addresses))
//getAllUserCafes().then(userCafes=> console.log(userCafes))
//getCafesWithImages().then(res=> console.log(res[0]))
//getCafeWithAddress(6).then(res=> console.log(res))
//getCafeWithAddressImage(3).then(res=> console.log(res))
//getCafesVisitedByUser(1).then(res=> console.log(res))
//getCafeWithGivenName("Blue Amsterdam")
getCafesInGivenCity("Utrecht").then(res=> console.log(res.length))