import connectDB from "@/DB/connectDB";
import User from "@/model/User";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB();

  const { email, password } = await req.json();

  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser)
      return NextResponse.json({
        success: false,
        message: "Account not Found",
      });

    const isMatch = await compare(password, checkUser.password);
    if (!isMatch)
      return NextResponse.json({
        success: false,
        message: "Incorrect Password",
      });

    const token = jwt.sign(
      { id: checkUser._id, email: checkUser.email, role: checkUser?.role },
      process.env.JWT_SECRET ?? "defaultsecret",
      { expiresIn: "1d" }
    );

    const finalData = {
      token,
      user: {
        firstname: checkUser.firstname,
        lastname: checkUser.lastname,
        email: checkUser.email,
        _id: checkUser._id,
        role: checkUser?.role,
      },
    };
    return NextResponse.json({
      success: true,
      message: "Login Successfull",
      finalData,
    });
  } catch (error) {
    console.log("Error in login (server) => ", error);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong Please Retry Later !",
    });
  }
}
