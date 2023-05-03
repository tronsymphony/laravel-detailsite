import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm, router } from '@inertiajs/react';
import { useState } from 'react'


export default function Welcome(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });
    
    const submit = (e) => {
        e.preventDefault();
        // post(route('contact'));

        axios.post('api/articles',{
            headers: { Accept   : `application/json` }
        }).then(res=>{
                console.log(res)
          }).catch(err=>{
              console.log(err)
          });
    };

    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
      })
    
      function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
      }
    
      function handleSubmit(e) {
        e.preventDefault()
        router.post('api/articles', values)
      }

    return (
        <>
            <Head title="Welcome" />
            <div className="relative  min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="fixed top-0 right-0 left-0 p-6 text-right bg-black bg-opacity-50 z-10 flex justify-between">
                    <div className="logo">
                        <span className="title text-white">
                            Culver City Auto Detail
                        </span>
                    </div>
                    <div className="links">
                        {props.auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Log in
                                </Link>

                                <Link
                                    href={route("register")}
                                    className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                <section className="hero relative min-h-screen w-full">
                    <figure className="hero-image relative top-0 flex min-h-screen">
                        <img
                            src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                            className="min-h-screen object-cover"
                            alt=""
                        />
                    </figure>
                    <div className="hero-title">
                        <h1 className="title color-white">
                            Showroom Ready Auto Detailing
                        </h1>
                        <p>
                            Los Angeles’ Premier Mobile Auto Detailing, Paint
                            Correction, Mobile Car Wash Service.
                        </p>
                    </div>
                </section>

                <section className="services">
                    <div className="services-container">
                        <div className="services-service">
                            <figure>
                                <img
                                    src="https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt=""
                                />
                            </figure>
                            <h2 className="services-title">
                                EXTERIOR AUTO DETAILING
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Perferendis, maiores quaerat,
                                suscipit id, assumenda nisi commodi distinctio
                                est labore magnam aliquid quisquam incidunt
                                expedita adipisci velit soluta voluptates odio
                                voluptas!
                            </p>
                        </div>
                        <div className="services-service">
                            <figure>
                                <img
                                    src="https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt=""
                                />
                            </figure>
                            <h2 className="services-title">
                                INTERIOR AUTO DETAILING
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Perferendis, maiores quaerat,
                                suscipit id, assumenda nisi commodi distinctio
                                est labore magnam aliquid quisquam incidunt
                                expedita adipisci velit soluta voluptates odio
                                voluptas!
                            </p>
                        </div>
                        <div className="services-service">
                            <figure>
                                <img
                                    src="https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt=""
                                />
                            </figure>
                            <h2 className="services-title">MOBILE CAR WASH</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Perferendis, maiores quaerat,
                                suscipit id, assumenda nisi commodi distinctio
                                est labore magnam aliquid quisquam incidunt
                                expedita adipisci velit soluta voluptates odio
                                voluptas!
                            </p>
                        </div>
                    </div>
                </section>

                <section className="contact">
                    <div className="contact-container">
                        <div className="contact-header">
                            <h2 className="title">
                                Book your next appointment
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam, veritatis!
                            </p>
                        </div>
                        <div className="contact-form">
                            <form onSubmit={submit}>
                                <label htmlFor="">
                                    Name{" "}
                                    <input type="text" placeholder="Name" />
                                </label>
                                <label htmlFor="">
                                    Email{" "}
                                    <input type="text" placeholder="Email" />
                                </label>
                                <label>
                                    Service
                                    <select
                                        name="service"
                                        id=""
                                        defaultValue="detailing"
                                    >
                                        <option value="detailing">
                                            Detailing
                                        </option>
                                        <option value="cleaning">
                                            Cleaning
                                        </option>
                                    </select>
                                </label>
                                <button type="submit">Submit Request</button>
                            </form>
                            <form onSubmit={handleSubmit}>
      <label htmlFor="first_name">First name:</label>
      <input id="first_name" value={values.first_name} onChange={handleChange} />
      <label htmlFor="last_name">Last name:</label>
      <input id="last_name" value={values.last_name} onChange={handleChange} />
      <label htmlFor="email">Email:</label>
      <input id="email" value={values.email} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
