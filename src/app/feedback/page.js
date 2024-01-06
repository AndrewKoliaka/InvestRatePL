'use client'

import { FaRegFaceSmileBeam } from 'react-icons/fa6';
import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import { useState } from 'react';

const EMAIL_PATTERN = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export default function Feedback() {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errorsData = {};

        if (!formData.username) {
            errorsData.username = 'Field is required';
        }

        if (formData.email) {
            if (!EMAIL_PATTERN.test(formData.email)) {
                errorsData.email = 'Email is invalid';
            }
        } else {
            errorsData.email = 'Field is required';
        }

        if (formData.message) {
            if (formData.message.length < 7) {
                errorsData.message = 'Minimum length is 10';
            }

            if (formData.message.length > 100) {
                errorsData.message = 'Maximum length is 100';
            }
        } else {
            errorsData.message = 'Field is required';
        }

        setErrors(errorsData);
    };

    const submit = () => {
        validate();
    };

    return (
        <div className="mt-10 flex justify-center">
            <form className="lg:w-1/2">
                <h1 className="text-3xl flex align-baseline gap-x-2 mb-5">We will appreciate your
                    feedback or idea! <FaRegFaceSmileBeam size="30" fill="#7F72FE" /></h1>

                <div className="mt-4">
                    <Label htmlFor="username" value="Your name" color={ errors.username ? 'failure' : 'gray' } />
                    <TextInput id="username"
                               className="focus:ring-primary focus:border-primary"
                               name="username"
                               type="text"
                               placeholder="John Doe"
                               required
                               color={ errors.username ? 'failure' : 'gray' }
                               onChange={ event => setFormData({ ...formData, username: event.target.value }) }
                               helperText={ errors.username ? <span>{ errors.username }</span> : null }
                    />
                </div>

                <div className="mt-4">
                    <Label htmlFor="email" value="Your email" color={ errors.email ? 'failure' : 'gray' } />
                    <TextInput id="email"
                               className="focus:ring-primary focus:border-primary"
                               name="email"
                               type="email"
                               placeholder="yourmail@mail.com"
                               required
                               color={ errors.email ? 'failure' : 'gray' }
                               onChange={ event => setFormData({ ...formData, email: event.target.value }) }
                               helperText={ errors.email ? <span>{ errors.email }</span> : null }
                    />
                </div>

                <div className="mt-4">
                    <Label htmlFor="message" value="Your message" color={ errors.message ? 'failure' : 'gray' } />
                    <Textarea id="message"
                              className="focus:ring-primary focus:border-primary"
                              name="message"
                              rows={4}
                              color={ errors.message ? 'failure' : 'gray' }
                              placeholder="I think..."
                              required
                              onChange={ event => setFormData({ ...formData, message: event.target.value }) }
                              helperText={ errors.message ? <span>{ errors.message }</span> : null }
                    />
                </div>


                <Button className="mt-4 bg-primary border-2 text-white hover:bg-white hover:text-primary hover:border-primary" onClick={ submit }>Submit</Button>
            </form>
        </div>
    );
}
