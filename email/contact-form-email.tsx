import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <html>
      <Head />
      <Preview>New Message from your personal website</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                you receive the following message from the contact form.
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </html>
  );
}
