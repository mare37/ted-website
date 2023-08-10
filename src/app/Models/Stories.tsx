
import mongoose from "mongoose";

const {Schema} = mongoose;


interface Story {
    title: string;
    tag:string,
    story: string;
   
  }


/*export interface DummyDocument extends  Journal, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
    _doc?: any
  }*/

const storySchema = new Schema<Story>({
    title:{
        type:String,
        unique:true,
        required:true
    },

    tag:{
      type:String,
      required:true
  },

    story:{
        type:String,
        required:true
    },



}, {timestamps:true}
)


export default  mongoose.models.Stories || mongoose.model<Story>("Stories", storySchema );