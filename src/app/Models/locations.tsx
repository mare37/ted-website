import mongoose from "mongoose";

const {Schema} = mongoose;


interface Location {
    town: string
    county:string
    content:string
    numberOftrees: Number
    numberOfIndividuals: Number
    imageName:string
   
  }


/*export interface DummyDocument extends  Journal, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
    _doc?: any
  }*/

const locationSchema = new Schema<Location>({
    town:{
        type:String,
        required:true
    },

    county:{
      type:String,
      required:true
  },

    content:{
      type:String,
      required:true
  },

  numberOftrees:{
        type:Number,
        required:true
    },
  
    numberOfIndividuals:{
      type:Number,
      required:true
  },

    imageName:{
      type:String,
     
     
      
  },



}, {timestamps:true}
)


export default  mongoose.models.Locations || mongoose.model<Location>("Locations", locationSchema );