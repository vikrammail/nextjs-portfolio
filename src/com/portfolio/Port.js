// components/Portfolio.js
"use client"
import { Box, Heading, Text, HStack} from '@chakra-ui/react';
import Profile from './Profile';

const Port = () => {
  return (
    <>
   {/* <!-- Navigation --> */}
    <nav className="bg-gray-800 p-4 text-white">
        <div classNameName="container mx-auto">
            <a href="#" className="text-xl font-semibold">Your Name</a>
        </div>
    </nav>

    {/* <!-- Home Section --> */}
    <section className="bg-gray-900 text-white h-screen flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold">Welcome to My Portfolio</h1>
            <p className="mt-4 text-lg lg:text-xl">I am a Full Stack Developer</p>
        </div>
    </section>

    {/* <!-- About Me Section --> */}
    <section className="py-16">
        <div className="container mx-auto">
            <h2 className="text-2xl lg:text-4xl font-bold mb-8">About Me</h2>
            <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum odio sit amet elit
                interdum,
                eu consectetur elit facilisis. Sed accumsan libero quis justo gravida, at feugiat dui rhoncus.
            </p>
        </div>
    </section>

    {/* <!-- Projects Section --> */}
    <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
            <h2 className="text-2xl lg:text-4xl font-bold mb-8">Projects</h2>

            {/* <!-- /Project Cards --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Project Card 1 --> */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4">Project 1</h3>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                {/* <!-- Project Card 2 --> */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4">Project 2</h3>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                {/* <!-- Project Card 3 --> */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-4">Project 3</h3>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Contact Section --> */}
    <section className="py-16">
        <div className="container mx-auto">
            <h2 className="text-2xl lg:text-4xl font-bold mb-8">Contact</h2>

            <p className="text-gray-700">Feel free to reach out to me via email at: your.email@example.com</p>
        </div>
    </section>
    </>
  );
};

export default Port;
