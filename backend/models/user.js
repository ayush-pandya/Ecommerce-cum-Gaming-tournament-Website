const moongoose = require("mongoose");
const Product = require("./schema");
const jwt = require("jsonwebtoken");

const userSchema = new moongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    state: String,
    city: String,
    street: String,

    address: [
        {
          state: String,
          city:String,
          street:String   
        },
      ],

    mobilenumber: {
        required: true,
        type: Number
    },
    orders: [{type:moongoose.Schema.Types.ObjectId, ref: 'Product'}],
    tokens: [
        {
            token: {
                type: String,
            },
        },
    ],
    cart: [{type:moongoose.Schema.Types.ObjectId, ref: 'Product'}]
})

userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign(
            {
                _id: this._id,
            },
            "Thisisthesecretkey"
        );

        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
};



const User = new moongoose.model("User", userSchema);

module.exports = User;