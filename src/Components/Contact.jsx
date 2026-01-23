import React from 'react'
import Container from './Container'
import SectionHead from './SectionHead'
import Flex from './Flex'
import AboutCard from './AboutCard'
import { SiWhatsapp } from "react-icons/si";
import { IoIosMailUnread } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import Button from './Button'
import { useState } from "react";

    const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const subject = `Portfolio Message from ${name}`;
    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    window.location.href = `https://mail.google.com/mail/?view=cm&to=yeasinhossainjesun@gmail.com =${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

    return (
        <div id='contact'>
            <Container>
                <SectionHead
                    title="Get in Touch"
                    head="Contact Me"
                    className="mt-30 mb-17"
                />
                <Flex className='justify-between'>
                    <div className='text-center w-[45%]'>
                        <h2 className='text-white text-2xl font-bold pb-8'>Talk to me</h2>
                        <Flex className='flex-col gap-y-7'>
                            <a
                                href="https://wa.me/8801781084172"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <AboutCard
                                    icon={<SiWhatsapp />}
                                    head="Whatsapp"
                                    text="01781084172"
                                    className="w-full!"
                                />
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&to=yeasinhossainjesun@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <AboutCard
                                    icon={<IoIosMailUnread />}
                                    head="Email"
                                    text="yeasinhossainjesun@gmail.com"
                                    className="w-full!"
                                />
                            </a>
                            <AboutCard
                                icon={<FaTwitter />}
                                head="Twitter"
                                text="Account Nai"
                                className="w-full!"
                            />
                        </Flex>
                    </div>
                    <div className='text-center w-[45%]'>
                        <h2 className='text-white text-2xl font-bold pb-8'>Send Me Your Message</h2>
                        <div className='flex flex-col gap-y-5'>
                            <div className='text-start!'>
                                <label htmlFor="text" className=' text-white   pl-3 '>Your Name</label>
                                <input type="text" className='w-full py-5 pl-5 outline-3 mt-2 outline-secondary rounded-2xl text-white' placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className='text-start!'>
                                <label htmlFor="text" className=' text-white pl-3 '>Your Email</label>
                                <input type="text" className='w-full py-5 pl-5 outline-3 mt-2 outline-secondary rounded-2xl text-white' placeholder='Enter Your Mail' value={email}
            onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className='text-start!'>
                                <label htmlFor="text" className=' text-white pl-3 '>Your Message</label>
                                <input type="text" className='mb-5 w-full pt-5 pb-17 pl-5 outline-3 mt-2 outline-secondary rounded-2xl text-white' placeholder='Enter Your Message' value={message}
            onChange={(e) => setMessage(e.target.value)}/>
                            </div>
                        </div>
                        <Button onClick={handleSendMessage}>Send Message</Button>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Contact
