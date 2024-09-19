"use server"

import prisma from "./prisma"

export const sendContact = async (formData: FormData) => {
  const email = formData.get("email") as string
  const name = formData.get("name") as string
  const message = formData.get("message") as string

  await prisma.message.create({
    data: {
      message,
      email,
      name
    }
  })
}
