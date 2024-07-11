import { Admin } from "../models/adminRegisterSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";
import bcrypt from "bcryptjs";

export const adminRegister = async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  
  try {
    if (!email || !password) {
      return handleValidationError("Please Fill Form!", 400, res);
    }

    // Check if the admin already exists in the database
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ success: false, message: "Admin already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 12);
    
    await Admin.create({ email, password: hashedPassword });
    res.status(200).json({
      success: true,
      message: "Admin Created!",
    });
  } catch (err) {
    next(err);
  }
};
