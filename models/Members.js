const mongoose = require('mongoose');

const { Schema } = mongoose;

const MembersSchema = new Schema(
  {
    first_name:{
      type: String,
      required: true
    },   
    last_name:{
      type: String,
      required: true
    },
    phone_number:{
      type: String,
      required: true
    },
    work_place:{
      type: String
    },
    email:{
      type: String
    },
    team_members:{
      type: String,
    } 
  },{timestamps: true}
);



MembersSchema.methods.toJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    first_name: this.first_name,
    work_place: this.work_place,
    team_members: this.team_members,
    last_name: this.last_name,
    phone_number: this.phone_number
  };
};



mongoose.model('Members', MembersSchema);
