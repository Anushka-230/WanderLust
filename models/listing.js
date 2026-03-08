const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title: {
        type: String,
        required:true,
    },
    description:String,
    image: {
    filename: String,
    url: {
      type: String,
      default:
        "https://unsplash.com/photos/misty-mountain-peaks-at-sunrise-with-soft-pastel-sky-A1IoRfRQHuk",
    },
  },
    price:Number,
    location:String,
    country:String,
});

const Listing=mongoose.model("Listing",listingSchema);

module.exports=Listing;