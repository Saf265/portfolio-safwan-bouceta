'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { GithubIcon, MailIcon, TwitterIcon } from "lucide-react"
import { sendContact } from "@/lib/actionUser"
import { successToast } from "../toasts/actionSuccess"

export default function ContactSection() {

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try{
      const formData = new FormData(e.currentTarget as HTMLFormElement)

      await sendContact(formData)
    }catch(err){
      console.error(err)
    }finally{
      successToast()
      setName("")
      setEmail("")
      setMessage("")
    }
  }

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <Input
                      id="name"
                      value={name} // Changement de defaultValue à value
                      onChange={(e) => setName(e.target.value)}
                      className="rounded-lg"
                      name="name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input
                      id="email"
                      type="email"
                      value={email} // Changement de defaultValue à value
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded-md"
                      name="email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={message} // Changement de defaultValue à value
                      onChange={(e) => setMessage(e.target.value)}
                      className="rounded-md"
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MailIcon className="text-blue-500" />
                  <a href="mailto:sheet-mail@sheet-mail.xyz" className="text-gray-300 hover:text-white transition-colors">
                      sheet-mail@sheet-mail.xyz
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <GithubIcon className="text-blue-500" />
                  <a href="https://github.com/Saf265" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    github.com/Saf265
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <TwitterIcon className="text-blue-500" />
                  <a href="https://x.com/Safwan1978774" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    x.com/Safwan1978774
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
