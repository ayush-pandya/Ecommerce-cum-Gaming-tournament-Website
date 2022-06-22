const moongoose = require("mongoose");

const productSchema = moongoose.Schema({

    productname: {
      type: String,
      required:true
    },
    productimage: [
      {
        url: {
          type: String,
        },
      },
    ],
    productdesc: {
      type: String,
      required: true
    },
    productprice: {
      type: Number,
      required: [true, "Please Enter product Price"],
      maxLength: [8, "Price cannot exceed 8 characters"],
    },
    productrating: {
      type: Number,
      default: 0,
    },
    producttype: {
      type: String,
      required: [true, "Please Enter Product Category"],
    },
    Stock: {
      type: Number,
      required: [true, "Please Enter product Stock"],
      maxLength: [4, "Stock cannot exceed 4 characters"],
      default: 1,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: moongoose.Schema.ObjectId,
          ref: "User",
        },
        name: {
          type: String,
        },
        rating: {
          type: Number,
        },
        comment: {
          type: String,
        },
      },
    ],
  
    user: {
      type: moongoose.Schema.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });


const Product = new moongoose.model("Product",productSchema);

module.exports = Product;