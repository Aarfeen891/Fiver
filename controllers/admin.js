const Admin = require("../models/adminModel");
const User = require("../models/userModel")

exports.adminRegister = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email already exists
    const existingAdmin = await Admin.findOne({ email: email });
    if (existingAdmin) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    // Access the role value from the request object
    const selectedRole = req.role;

    // Create a new user
    const admin = new Admin({
      email,
      password,
      role: selectedRole._id, // Assign the role ID to the user
    });

    // Save the user to the database
    await admin.save();

    res.status(201).json({ message: 'admin created successfully', admin });
  } catch (error) {
    console.error('Error during seller registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getBuyerSeller = async (req, res) => {
  try {
    const existingAllUsers = await User.find().populate("role");
    
    if (existingAllUsers) {
      return res.status(201).json({ 
        "count" : existingAllUsers.length,
        "AllUsers" : existingAllUsers  });
    }
   
  } catch (error) {
  
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllSellers = async (req, res) => {
  try {
    console.log("data");
               
                const existingAllSellers = await User.find({role:"6478b7810707f58c685954fc"}).populate("role");
   
    if (existingAllSellers) {
      return res.status(201).json({ 
        "count" : existingAllSellers.length,
        "AllSellers" : existingAllSellers  });
    }
   
  } catch (error) {
  
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllBuyer = async (req, res) => {
  try {
   
               
             const existingAllBuyer = await User.find({role:"6478b7810707f58c685954fc"}).populate("role");
   
    if (existingAllBuyer) {
      return res.status(201).json({ 
        "count" : existingAllBuyer.length,
        "AllSellers" : existingAllBuyer  });
    }
   
  } catch (error) {
  
    res.status(500).json({ error: 'Internal server error' });
  }
};


