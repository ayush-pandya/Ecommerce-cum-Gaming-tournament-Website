const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Product = require("../models/schema");
const User = require("../models/user");
const Tourney = require("../models/tournament");
const Team = require("../models/team");
const authenticate = require("../middleware/authenticate");
var cookieParser = require('cookie-parser');
const { VirtualType } = require("mongoose");

require("../db/conn");



router.get("/", (req, res) => {
    res.send("hello from route page");
});


router.post("/signup", async(req, res) => {

    // var {address} = req.body;

    // console.log("Address", address[0].state);    

    const { name, email, password, mobileno, address } = req.body;
    console.log(name, email, password, mobileno, address[0].state, address[0].city, address[0].street );
    if (!name || !email || !password || !mobileno) {
        return res.status(422).json({ error: "please fill it again" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "User already exits" });
        } else {

            const user = new User({
                name: name,
                email: email,
                password: password,
                address:[{
                    state: address[0].state,
                    city:address[0].city,
                    street:address[0].street
                }],
                mobilenumber:mobileno
            });

            const userRegister = await user.save();

            if (userRegister) {
                res.status(201).send("data is inserted");
            }
        }
    }
    catch (error) {
        res.status(500).send("there is an error");
        console.log(error);
    }
});


router.post("/signin", async(req, res) => {
    
    try {
      const { email, password } = req.body;
      console.log(email,password);
      if (!email || !password) {
        return res.status(400).send("Please fill again");
        // .json({ message: "please fill the data again" });
      }
  
      const userLogin = await User.findOne({ email: email });
      console.log(userLogin);
      if (userLogin) {
        if(password == userLogin.password) {
            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true,
            });
            
            res.json({ message: "signed in successfully" });
            
        }
        else{
            res.status(422).json({ message: "wrong password" });
        }
      } 
      else{
        res.status(422).json({ message: "Invalid credentials" });
      }
    } catch (error) {
        console.log(error);
    }
  });


router.get("/product",async (req, res) => {
    try {

        const data = await Product.find({});
        // const str = JSON.stringify(data);
        // console.log(data);
        // console.log(typeof data);
        // console.log(typeof str);
        // console.log("product data");
        // console.log(data);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
});


router.post("/cart",authenticate,async(req,res) => {
    try {

        const item = req.body.item;

        // console.log(item);
        // console.log(item._id);
        // console.log(cartItem.item.productName);
        // console.log(typeof cartItem);

        // const cartFill = await User.findOne({email:req.email});

        // console.log(cartFill);

        const cartFill = await User.findOneAndUpdate({email:req.email},
            {$push: {
                cart: item._id,
            }
        });

        // const cartFill = new User({
        //     cart
        // })

    } catch (error) {
        console.log(error);
    }
});


router.post("/deletecart",authenticate,async(req,res) => {
    try {

        const item = req.body.item;

        // console.log(item);
        // console.log(item._id);
        // console.log(cartItem.item.productName);
        // console.log(typeof cartItem);

        // const cartFill = await User.findOne({email:req.email});

        // console.log(cartFill);

        const cartFill = await User.findOneAndUpdate({email:req.email},
            {$pull: {
                cart: item._id,
            }
        });

        // const cartFill = new User({
        //     cart
        // })

    } catch (error) {
        console.log(error);
    }
});






router.get("/cart",authenticate,async(req,res) => {
    try {
        

        const tri = await User.aggregate([
            {
              $lookup: {
                from: "products",
                localField: "cart",
                foreignField: "_id",
                as: "product_detail",
              },
            },
            {
                $match: { email: req.email }
            },
            // {
            //    $unwind: "$product_detail",
            // }
          ]);
        
        // console.log(tri[0].product_detail);
        
        res.send(tri[0].product_detail);
       
    
     

        // console.log((cartproducts[0].cart));
        // res.send((cartproducts[0].cart));
    } catch (error) {
        console.log(error);
    }
});



router.get("/address",authenticate,async(req,res) => {
    try {
        
        const data = await User.find({email: req.email});
        const addressarray = data[0].address;
        
        
    
        res.send(addressarray);
        
    } catch (error) {
        console.log(error);
    }
});


router.post("/address",authenticate,async(req,res) => {
    try {
        
        const { add,city,state } = req.body;

        const addresAdd = await User.findOneAndUpdate({email:req.email},
            {$push: {
                address:[{
                    state: state,
                    city:city,
                    street:add
                }],
            }
        });
        
        res.status(201).send("data is inserted");
    
        
        
    } catch (error) {
        console.log(error);
    }
});


router.get("/order",authenticate,async(req,res) => {
    try {
        
        // const finalOrder = await User.findOne({email:"arshad@vit.com"});

        // console.log(finalOrder.cart);

        // const addresAdd = await User.findOneAndUpdate({email:req.email},
        //     {$push: {
        //         orders:[finalOrder.cart],
        //     }
        // });

        const final = await User.updateOne({email:req.email},
            [
              {
                $set: {
                  orders: {
                    $concatArrays: [
                      "$orders",
                      "$cart"
                    ]
                  },
                  cart: []
                }
              }
            ])

        
        
        // const clearCart = await User.update({email:req.email}, { $set : {"cart": [] }} , {multi:true} );

        console.log(finalOrder.cart);

        res.status(201).send("Ordered");
        
    } catch (error) {
        console.log(error);
    }
});




router.post("/tournament",async(req,res) => {
    try {

        
        const { cafename, contactno, state, address, game, date, prizepool } = req.body;
        
        console.log(cafename, contactno, state, address, game, date, prizepool);

        const tournament = new Tourney({
            cafename, contactno, state, address, game, date, prizepool
        });

        const tourneysaved = await tournament.save();

        res.status(201).send("Tournament Registered");

    } catch (error) {
        console.log(error);
    }
});


router.get("/tournament",async (req, res) => {
    try {
        const data = await Tourney.find({});
        res.send(data);
    } catch (error) {
        console.log(error);
    }
});


router.post("/teamadd",async (req, res) => {
    try {
        const { teamname, tourney,captain, contactno, address} = req.body;
        
        console.log(teamname, tourney,captain, contactno, address);

        const team = new Team({
            teamname, captain, contactno, address
        });

        const teamsaved = await team.save();

        const infotour = await Tourney.findOne({cafename:tourney});
        const teamid =   await Team.findOne({teamname:teamname});
        console.log(infotour._id);
        console.log(teamid._id);

        const teamtour = await Team.findOneAndUpdate({teamname:teamname},
            {$push: {
                tournamentparticipated: infotour._id,
            }
        });

        const tourteam = await Tourney.findOneAndUpdate({cafename:tourney},
            {$push: {
                teamsregistered: teamid._id,
            }
        });

    } catch (error) {
        console.log(error);
    }
});


module.exports = router;