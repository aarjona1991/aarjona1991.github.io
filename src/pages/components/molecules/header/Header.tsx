import { useState } from "react";
import { Avatar } from "../../atoms";

const Header = () => {
    const [state, setState] = useState();
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="flex flex-col-reverse max-w-screen-xl px-4 py-8 mx-auto md:flex-row">
                    <div className="mr-auto place-self-center mt-9 md:mt-0 lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center md:text-start">Desarrollador Full Stack</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center md:text-start">Especializado en React, TypeScript y desarrollo web moderno. Creando soluciones digitales innovadoras y experiencias de usuario excepcionales.</p>
                        <div className="flex flex-wrap justify-center md:justify-start">
                            <a href="https://github.com/aarjona1991" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                Ver Proyectos
                                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                            <a href="/privacy-policy" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Política de Privacidad
                            </a>
                        </div>
                    </div>
                    <div className="grid text-center text-gray-500 dark:text-gray-400">
                        <Avatar
                        classnames="object-cover w-96 h-96 rounded-full"
                        url="./images/me/portfolio_image_black_white.jpg"/>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="https://linkedin.com/in/aarjona1991" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:text-gray-900 dark:hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a href="mailto:aarjona1991@gmail.com" className="text-[#ea4335] hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v9.273L12 8.09l6.545 4.91V3.82h3.819c.904 0 1.636.732 1.636 1.636z"/></svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/aarjona1991" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export { Header };