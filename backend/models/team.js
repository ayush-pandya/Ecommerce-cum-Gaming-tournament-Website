const moongoose = require("mongoose");
const Tourney = require("./tournament");


const teamSchema = moongoose.Schema({
      teamname:{
        required:true,
        type:String,
      },
      captain:{
        required:true,
        type:String,
      },
      contactno:{
        required:true,
        type:Number,
      },
      address:{
        required:true,
        type:String,
      },
    tournamentparticipated: [{ type: moongoose.Schema.Types.ObjectId, ref: 'Tournament' }],
});

const Team = new moongoose.model("Team",teamSchema);

module.exports = Team;