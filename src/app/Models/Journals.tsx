
import mongoose from "mongoose";

const {Schema} = mongoose;


interface Journal {
    title: string;
    journal: string;
   
  }


/*export interface DummyDocument extends  Journal, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
    _doc?: any
  }*/

const journalsSchema = new Schema<Journal>({
    title:{
        type:String,
        unique:true,
        required:true
    },

    journal:{
        type:String,
        required:true
    },



}, {timestamps:true}
)


export default  mongoose.models.Journal ||    mongoose.model<Journal>("Journal", journalsSchema );