import React from 'react'
import Container from './Container'
import SectionHead from './SectionHead'
import Flex from './Flex'
import AboutCard from './AboutCard'
import { SiWhatsapp } from "react-icons/si";
import { IoIosMailUnread } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import Button from './Button'

const Contact = () => {
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
                            <AboutCard
                                icon={<SiWhatsapp />}
                                head="Whatsapp"
                                text="01781084172"
                                className="w-full!"
                            />
                            <AboutCard
                                icon={<IoIosMailUnread />}
                                head="Email"
                                text="yeasinhossainjesun@gmail.com"
                                className="w-full!"
                            />
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
                                <input type="text" className='w-full py-5 pl-5 outline-3 mt-2 outline-secondary rounded-2xl text-white' placeholder='Enter Your Name' />
                            </div>
                            <div className='text-start!'>
                                <label htmlFor="text" className=' text-white pl-3 '>Your Email</label>
                                <input type="text" className='w-full py-5 pl-5 outline-3 mt-2 outline-secondary rounded-2xl text-white' placeholder='Enter Your Mail' />
                            </div>
                            <div className='text-start!'>
                                <label htmlFor="text" className=' text-white pl-3 '>Your Message</label>
                                <input type="text" className='mb-5 w-full pt-5 pb-17 pl-5 outline-3 mt-2 outline-secondary rounded-2xl text-white' placeholder='Enter Your Message' />
                            </div>
                        </div>
                        <Button>Send Message</Button>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Contact
