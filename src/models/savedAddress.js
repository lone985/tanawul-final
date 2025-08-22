import mongoose from "mongoose"

const Schema = mongoose.Schema

const addressSchema = Schema({

    fullName: {
        type : String,
        required : true
    },

    mobile : {
        type : Number,
        required : true
    },

    landmark :{
        type : String,
        required : true
    },

    street : {
        type : String,
        required : true
    },

    village : {
        type : String,
        required : true
    },

    city : {
        type : String,
        required : true
    },

    pincode : {
        type : Number,
        required : true
    },

    state : {
        type : String,
        required : true
    },

    country : {
        type : String,
        requred : true
    },

    status : {
        type : Boolean,
        default : true,
        required : true
    },

    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

})
const Address=mongoose.model("Address",addressSchema)
export default Address