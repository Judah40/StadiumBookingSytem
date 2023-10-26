'use client'
import { supabase } from '@/app/Auth/supabase';
// components/LoginForm.tsx

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';

const LoginForm = () => {

// router

const router = useRouter()

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values: any) => {
    // Handle login logic here
    supabase.auth.signInWithPassword({
      email:values.email, 
      password:values.password
    }).then((values)=>{
      if(values.data.session?.user){
        router.push("/User")
      }
console.log(values)
    })
    // console.log(values);
    if(values.email==="admin@admin.com" && values.password==="admin@123"){
        router.push('Dashboard')
    }
  };

  return (
    <div className=''>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
            <div className='grid grid-cols-1 gap-4'>

          <div className='flex flex-col'>
            <Field type="email" id="email" name="email" className="border-b h-12 p-2" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error text-red-500" />
          </div>

          <div className='flex flex-col ' >
            <Field type="password" id="password" name="password" className="border-b h-12 p-2" placeholder="Password" />
            <ErrorMessage name="password" component="div" className="error text-red-500" />
          <div className='w-full items-end flex flex-col'>
        <p className='text-sm text-[#8C7E7E]'>Forgot your password?</p>
        {/* Add your "Forgot Password" logic here */}
      </div>
          </div>
          <button type="submit" className='w-full bg-[#8C7E7E] h-14 rounded-[30px] text-base text-white'>Sign In</button>
            </div>
        </Form>
      </Formik>

     
    </div>
  );
};

export default LoginForm;
