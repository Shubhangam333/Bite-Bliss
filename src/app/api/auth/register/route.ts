import connectDB from "@/DB/connectDB";
import User from "@/model/User";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

export async function POST(req: Request) {
  await connectDB();

  const { firstname, lastname, email, password } = await req.json();

  try {
    const ifExist = await User.findOne({ email });

    if (ifExist) {
      return NextResponse.json({
        success: false,
        message: "User Already Exist",
      });
    } else {
      const hashedPassword = await hash(password, 12);
      const createUser = await User.create({
        email,
        firstname,
        lastname,
        password: hashedPassword,
        role: "user",
      });
      if (createUser)
        return NextResponse.json({
          success: true,
          message: "Account created successfully",
        });
    }
  } catch (error) {
    console.log("Error in register (server) => ", error);
    return NextResponse.json({
      success: false,
      message: "Something Went Wrong Please Retry Later !",
    });
  }
}
