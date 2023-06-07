const mongoose= require ("mongoose");
const bcrypt = require ("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image:{
  type:String,
  required: true,
    },
    phone_no: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Role", 
      required: true 
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function(next){
  if(!this.isModified('password')){
    next()
  }
  this.password = await bcrypt.hash(this.password, 10);
})

const User = mongoose.model("User", userSchema);

module.exports = User;