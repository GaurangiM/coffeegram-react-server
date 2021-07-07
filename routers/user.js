const { Router } = require("express");
const Cafe = require("../models").cafe;
const Address = require("../models").address;
const Image = require("../models").image;
const UserCafe = require("../models").user_cafe;
const User = require("../models").user

const router = new Router();

router.get("/", async(req, res, next)=> {
  try {
    const allUsers = await User.findAll()
    return res.status(200).send({message: 'Users fetched', allUsers });
  }catch(e) {
    console.log(e)
    next(e)
  }
})



module.exports = router;