"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { CheckCircle, Loader2, AlertCircle } from "lucide-react"
import { submitContactForm, type ContactFormData } from "@/app/actions"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Define the form schema with detailed validation rules
const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: "Full name must be at least 2 characters.",
    })
    .max(100, {
      message: "Full name cannot exceed 100 characters.",
    })
    .refine((value) => /^[a-zA-Z\s'-]+$/.test(value), {
      message: "Full name can only contain letters, spaces, hyphens, and apostrophes.",
    }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address (e.g., name@company.com).",
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
      message: "Message must be at least 10 characters to help us understand your inquiry.",
    })
    .max(1000, {
      message: "Message cannot exceed 1000 characters.",
    }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      employees: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const result = await submitContactForm(values as ContactFormData)

      if (result.success) {
        setSubmitResult({
          success: true,
          message: result.message || "Your message has been sent successfully!",
        })
        form.reset()
      } else {
        setSubmitResult({
          success: false,
          message: result.message || "There was an error submitting your form. Please try again.",
        })

        // If there are field-specific errors, update the form
        if (result.errors) {
          Object.entries(result.errors).forEach(([field, errors]) => {
            if (errors && errors.length > 0) {
              form.setError(field as keyof z.infer<typeof formSchema>, {
                type: "server",
                message: errors[0],
              })
            }
          })
        }
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitResult({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitResult?.success) {
    return (
      <div className="rounded-lg border bg-card p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-lg font-medium">Thank you for your message!</h3>
        <p className="mt-2 text-muted-foreground">{submitResult.message}</p>
        <Button className="mt-4" onClick={() => setSubmitResult(null)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {submitResult && !submitResult.success && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{submitResult.message}</AlertDescription>
          </Alert>
        )}

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder="First and last name" {...field} />
              </FormControl>
              <FormDescription>Please enter your full name as it appears on official documents.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work email address</FormLabel>
              <FormControl>
                <Input placeholder="me@company.com" type="email" {...field} />
              </FormControl>
              <FormDescription>We'll use this email to respond to your inquiry.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Company name <span className="text-muted-foreground">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Company name" {...field} />
              </FormControl>
              <FormDescription>
                Providing your company name helps us tailor our response to your business needs.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="employees"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Number of employees <span className="text-muted-foreground">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="e.g. 10-50" {...field} />
              </FormControl>
              <FormDescription>This helps us understand the scale of your organization.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your message</FormLabel>
              <FormControl>
                <Textarea placeholder="Please describe how we can help you" className="min-h-[120px]" {...field} />
              </FormControl>
              <FormDescription>Provide details about your inquiry so we can better assist you.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  )
}
