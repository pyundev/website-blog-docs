import { NextRequest, NextResponse } from "next/server";
import loops from "@/lib/loops";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    try {
      const resp = await loops.createContact(email);
      
      return NextResponse.json(
        {
          success: true,
          //@ts-ignore
          id: resp.id,
          message: "Successfully joined waitlist"
        },
        { status: 200 }
      );
    } catch (error: any) {
      // Check for 409 in error.message since Loops might not use response object
      if (error.message?.includes('409') || error.response?.status === 409) {
        return NextResponse.json(
          {
            success: true, // Changed to true since user is effectively on waitlist
            message: "You're already on our waitlist! We'll keep you updated."
          },
          { status: 409 }
        );
      }

      console.error("Loops API error:", error);
      throw error; // Let outer catch handle other errors
    }

  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to add to waitlist. Please try again later."
      },
      { status: 500 }
    );
  }
}

export type ContactResponse = {
  success: boolean;
  id?: string;
  message?: string;
};