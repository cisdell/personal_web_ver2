'use server'
import { Resend } from 'resend';
import { validateString } from '@/lib/utils';
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
  try {
    await resend.emails.send({
      from: ' FROM MESSAGE BOARD <onboarding@resend.dev>',
      to: 'cisdell@gmail.com',
      subject: 'test',
      reply_to: senderEmail as string,
      text: message as string,
    })
  } catch (error: unknown) {
    // return { err: err.message }
    return {
      error: error.message,
    }
  }
};