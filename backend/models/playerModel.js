import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },

        name: {
            type: String,
            required: true
        },

        team: {
            type: String,
            required: true
        },

        image: {
            type: String,
            required: true,
            
        },

        position: { 
            type: String, 
            required: true 
        },

        draftPick: {
            type: String,
            required: true,
        },

        superBowls: {
            type: Number,
            required: true,
        },

        cardColor: {
            type: String,
            required: true,
        },

        
    
    },
    {
        timestamps: true,
    }
)



const Player = mongoose.model('Player', playerSchema);


export default Player;