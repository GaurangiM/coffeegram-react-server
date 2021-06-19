const User = require("./models").user
const Cafe = require("./models").cafe
const Image = require("./models").image
const Address = require("./models").address
const UserCafe = require("./models").user_cafe

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

//getAllUsers().then(users => console.log(users));
//getAllCafes().then(cafes=> console.log(cafes)) 
//getAllImages().then(images=> console.log(images))
//getAllAddresses().then(addresses=> console.log(addresses))
getAllUserCafes().then(userCafes=> console.log(userCafes))