"use server"

import { z } from "zod"

// Define the form schema for server-side validation
const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: "Full name must be at least 2 characters.",
    })
    .max(100, {
      message: "Full name cannot exceed 100 characters.",
    }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    })
    .max(100, {
      message: "Email cannot exceed 100 characters.",
    }),
  companyName: z
    .string()
    .max(100, {
      message: "Company name cannot exceed 100 characters.",
    })
    .optional(),
  employees: z
    .string()
    .max(50, {
      message: "Employee count cannot exceed 50 characters.",
    })
    .optional(),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(1000, {
      message: "Message cannot exceed 1000 characters.",
    }),
})

export type ContactFormData = z.infer<typeof formSchema>

export async function submitContactForm(data: ContactFormData) {
  // Validate the form data
  const result = formSchema.safeParse(data)

  if (!result.success) {
    // Return validation errors
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    }
  }

  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    // In a real application, you would:
    // 1. Store the submission in a database
    // 2. Send an email notification
    // 3. Integrate with a CRM system
    // 4. etc.

    console.log("Form submitted successfully:", result.data)

    // Return success response
    return {
      success: true,
      message: "Your message has been sent successfully. We'll get back to you soon!",
    }
  } catch (error) {
    console.error("Error submitting form:", error)

    // Return error response
    return {
      success: false,
      message: "There was an error submitting your form. Please try again later.",
    }
  }
}
