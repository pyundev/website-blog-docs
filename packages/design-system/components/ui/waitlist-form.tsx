"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Alert, AlertDescription } from "./alert";
import { Loader2 } from "lucide-react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{
    type: "success" | "error" | "warning" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setAlert({ type: null, message: "" });

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 409) {
          setAlert({
            type: "warning",
            message: "You're already on our waitlist! We'll keep you updated.",
          });
        } else {
          throw new Error(data.message || "Failed to join waitlist");
        }
        return;
      }

      if (data.success) {
        setAlert({
          type: "success",
          message: "Thanks for joining! We'll be in touch soon.",
        });
        setEmail("");
      } else {
        throw new Error(data.message || "Failed to join waitlist");
      }
    } catch (error) {
      console.error("Waitlist submission error:", error);
      setAlert({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to add to waitlist. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-4 px-4 sm:px-0"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
          className="w-full min-w-0 h-12 text-lg"
          autoComplete="email"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="whitespace-nowrap w-full sm:w-auto h-12 text-lg px-8"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Joining...
            </>
          ) : (
            "Join Waitlist"
          )}
        </Button>
      </div>

      {alert.type && (
        <Alert
          //@ts-ignore
          variant={
            alert.type === "success"
              ? "default"
              : alert.type === "warning"
              ? "warning"
              : "destructive"
          }
          className="mt-4"
        >
          <AlertDescription>{alert.message}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}
