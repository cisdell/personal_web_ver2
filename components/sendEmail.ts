'use server'
import { Resend } from 'resend';
import { validateString, getErrorMessage } from '@/lib/utils';
import ContactFormEmail from "@/email/contact-form-email"
import React from 'react';
const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmail = async (formData: FormData) => {
  // console.log('running on the client')
  const message = (formData.get("senderMessage"));
  const senderEmail = formData.get("senderEmail")
  console.log(senderEmail)
  //simple server side validation.

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email"
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message"
    }
  }
  let data;
  try {
    data = await resend.emails.send({

      from: 'FROM MESSAGE BOARD <onboarding@resend.dev>',
      to: 'cisdell@gmail.com',
      subject: 'Email from personal website',
      reply_to: senderEmail as string,
      // text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string
      })
      // react: <ContactFormEmail message={ message } senderEmail = { senderEmail } } />
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }
  return { data }
};
