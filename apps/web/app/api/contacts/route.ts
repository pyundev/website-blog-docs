// app/api/contacts/route.ts
import { NextRequest, NextResponse } from "next/server";
import loops from "@/lib/loops";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email presence
    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    try {
      const resp = await loops.createContact(email);

      if (!resp.success) {
        throw new Error(resp.message || "Failed to create contact");
      }

      return NextResponse.json(
        {
          success: true,
          id: resp.id,
          message: "Successfully joined waitlist"
        },
        { status: 200 }
      );
    } catch (error: any) {
      // Handle known Loops API errors
      if (error.response?.status === 409) {
        return NextResponse.json(
          {
            success: false,
            message: "This email is already on the waitlist"
          },
          { status: 409 }
        );
      }

      // Log unexpected errors from Loops
      console.error("Loops API error:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to add to waitlist. Please try again later."
        },
        { status: 500 }
      );
    }

  } catch (error) {
    // Handle JSON parsing errors and other unexpected errors
    console.error("API route error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request format"
      },
      { status: 400 }
    );
  }
}

// Add type safety with response type
export type ContactResponse = {
  success: boolean;
  id?: string;
  message?: string;
};