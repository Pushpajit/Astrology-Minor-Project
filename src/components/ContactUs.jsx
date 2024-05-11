import emailjs from '@emailjs/browser';
import { Button, Flex, Modal } from 'antd';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import React, { useRef, useEffect,useState } from 'react';

export default function ContactUs({ open, setOpen}) {
    const handleClose = () => setOpen(false);

    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
      });

    useEffect(() => {
        const handleClickOutside = (e) => {
          if (open && !form.current.contains(e.target)) {
            setOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [open, setOpen]);
    
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vmpl20e', 'template_a3qgtgc', form.current, {
        publicKey: 'HXT3UBcR6qB3BhrPK',
      }) // service_id,template_id,public_key from emilJS
      .then(
        () => {
          console.log('SUCCESS!');
          setOpen(false);
          setFormData({
            user_name: '',
            user_email: '',
            message: ''
            });
          window.alert('You have successfully sent the message!');
         
    },
        (error) => {
          console.log('FAILED...', error.text);
        }
    );
  };
        const handleCancel = () => {
          console.log('Clicked cancel button');
          setOpen(false);
      };

    return (
        <div className="antialiased ">
            <Modal
                open={open}
                onClose={handleClose}
                onCancel={handleCancel}
                // closeIcon={null}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                footer={null}
                slotProps={{
                    backdrop: {
                        timeout: 100,
                    },
                }}
            >
                <Fade in={open}>
                    <Box >
                    <div className={open ? "modal open" : "modal"}>
                        <div className="modal-content">
                            <span className="close" onClick={() => setOpen(false)}>&times;</span>
                            
                            <h2 className="font-bold text-center text-3xl tracking-wide mb-3">Contact Us</h2>
                            <form className="p-6" ref={form} onSubmit={sendEmail}>
                            
                            
                            <label className="block mb-2 mr-2 font-semibold">Name</label>
                            <input type="text" name="user_name" required className=" w-full  flex-1 px-3 py-2 mb-3 hover:border-blue-400 border rounded-md focus:outline-none focus:border-blue-800" />

                            <label className="block mb-2 font-semibold ">Email</label>
                            <input type="email" name="user_email" required className="w-full px-3 py-2  hover:border-blue-400 border rounded-md focus:outline-none focus:border-blue-500" />

                            <label className="block mb-2 font-semibold py-3">Message</label>
                            <textarea name="message" required className="w-full px-3 py-2  hover:border-blue-400 border rounded-md focus:outline-none focus:border-blue-500"></textarea>

                            <button htmlType="submit" className="w-full font-semibold bg-blue-500 hover:bg-blue-700 px-2 py-2 border rounded-md " type="submit">Send</button>
                            </form>
                        </div>
                        </div>
                    </Box>
                    </Fade>
                    </Modal>
                    </div>
            );
    };