'use client'
import { useState } from "react"
import tela from "./../Colaborador/page"
import { useRouter } from "next/navigation"  


export default function LoginColaborador() {

    //USANDO O "next/navigation" para conseguir fazer o push no lado do cliente e não do servidor.
    const router = useRouter()

    const envioForm = (event) => {  
        event.preventDefault();
        router.push("./Colaborador"); 
    }

    return (
        <>
            <section className="p-2 bg-gray-100 flex flex-col justify-center items-center mb-11">
                <form className="bg-white p-6 rounded-lg shadow-md w-3/5 " onSubmit={envioForm}>
                    <div className="flex items-center mb-4">
                        <svg className="w-8 h-8 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
                        </svg>
                        <h1 className="w-32 text-2xl font-medium">Login</h1>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Informe seu e-mail:</label>
                        <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="email" type="email" placeholder="E-mail" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Informe sua senha:</label>
                        <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="password" type="password" placeholder="Senha" required />
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button className="w-52 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit" >ENVIE</button>
                    </div>
                </form>
            </section>
        </>
    )
}