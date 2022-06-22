const moongoose = require("mongoose");
const Team = require("./team");

const tourneySchema = moongoose.Schema({
    cafename: {
        required: true,
        type: String,
    },
    contactno: {
        required: true,
        type: Number,
    },
    state: {
        required: true,
        type: String,
    },
    address: {
        required: true,
        type: String,
    },
    game: {
        required: true,
        type: String,
    },
    date: {
        required: true,
        type: Date,
    },
    prizepool: {
        required: true,
        type: Number,
    },
    teamsregistered: [{ type: moongoose.Schema.Types.ObjectId, ref: 'Team' }],
});

const Tourney = new moongoose.model("Tournament",tourneySchema);

module.exports = Tourney;