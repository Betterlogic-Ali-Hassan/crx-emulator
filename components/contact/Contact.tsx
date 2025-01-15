"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Alert, AlertDescription } from "../ui/alert";
import { useForm, ValidationError } from "@formspree/react";
import { Loader2 } from "lucide-react";
import { Textarea } from "../ui/textarea";
import Tabs from "./Tabs";
import styles from "./contact.module.css";
const Contact = () => {
  const [state, handleSubmit] = useForm("xqaawegb");
  console.log(state.errors);

  return (
    <div className='my-container !pt-[50px]'>
      {state.succeeded && (
        <Alert className='bg-[#DCFCE6] mb-5 '>
          <AlertDescription className='flex items-center gap-3'>
            <FaCheckCircle size={20} color='#166434' />
            <span className='text-[#166434]'>
              Contact form has been submitted.
            </span>
          </AlertDescription>
        </Alert>
      )}
      <h1 className='text-[64px] font-bold mb-6 max-sm:text-[40px]'>
        Get in Touch with Us
      </h1>
      <p className='text-lg '>
        We’re here to help! Whether you have questions, need support, or want to
        provide feedback, feel free to reach out to us. Our team is dedicated to
        assisting you with any inquiries or concerns. Contact us today for
        prompt and friendly assistance.
      </p>
      <br />
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4 mb-6'>
          <input
            id='name'
            type='text'
            name='name'
            placeholder='Name'
            className={styles.input}
            required
          />
          <ValidationError
            prefix='Name'
            field='Name'
            errors={state.errors}
            className='text-red-500'
          />

          <input
            id='email'
            type='email'
            name='email'
            placeholder='Email'
            className={styles.input}
            required
          />
          <ValidationError
            prefix='Email'
            field='email'
            errors={state.errors}
            className='text-red-500'
          />
        </div>

        <div className='mb-6'>
          <h3 className='text-xl font-medium mb-4'>
            What kind of your Report?
          </h3>
          <Tabs />
        </div>

        <div className='mb-6'>
          <Textarea
            id='message'
            name='message'
            placeholder='Message'
            className={styles.input}
            required
          />
          <ValidationError
            prefix='Message'
            field='Message'
            errors={state.errors}
            className='text-red-500'
          />
        </div>

        <div className='flex items-center justify-end mt-8 h-[3rem]'>
          <button
            className={styles.btn}
            type='submit'
            disabled={state.submitting}
          >
            {state.submitting && <Loader2 size={22} className='animate-spin' />}
            Submit Feedback!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
