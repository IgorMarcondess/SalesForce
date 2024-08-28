'use client'
import dados1 from "./Pagina Inicial/imgs-paginaInicial1.json"
import dados2 from "./Pagina Inicial/imgs-paginaInicial2.json"
import imagem from "../../../public/personagem.jpeg"
import Link from "next/link"

interface dados {
    src : string;
    text : string;
}

export default function PaginaInicial3(){
    return(
        <>
<div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Personagens</h1>
            <h3 className="text-xl">e seus significados</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dados1.map((item1: dados) => (
                <div key={item1.text} className="flex flex-col items-center ">
                <a href="/Personagens" className="block">
                    <img className="w-[40vw] h-auto object-cover md:w-[20vw] md:h-auto md:object-cover" src={item1.src} alt={item1.text} />
                </a>
                <ul className="mt-4">
                    <li className="text-lg text-center">
                    <a href="/Personagens" className="text-blue-500 hover:underline">
                        {item1.text}
                    </a>
                    </li>
                </ul>
                </div>
            ))}
            </div>

            <div className="text-center mt-12">
            <a href="/Personagens" className="text-2xl text-blue-600 hover:underline mb-8">
                Veja o significado dos personagens
            </a>
            </div>
            <section className="p-6 bg-white w-5/4 h-auto bg-azulEscuro-100">
                <h1 className="text-4xl font-bold text-center mb-6">Trail Finder</h1>
                <div className="flex flex-col md:flex-row items-center md:justify-center">
                    <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                        <div className="max-w-lg text-center md:text-left mb-4">
                            <h2 className="text-lg mb-4">
                                O Trail Finder é um questionário onde o usuário responderá perguntas que descrevem suas principais características,
                                como por exemplo, o tamanho da empresa e o ramo de atuação. Vamos coletar esses dados e como resultado desse questionário
                                mostrar cards com as melhores ferramentas e serviços, além de sugerir uma solução para o problema apresentado.
                            </h2>
                            <h3 className="text-lg font-semibold">Faça o teste agora mesmo!</h3>
                        </div>
                        <div>
                            <Link href="./TrailFinder">
                                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600">
                                    Questionário
                                </button>
                            </Link>
                        </div>
                    </div>
                    <a className="flex-shrink-0">
                        <img src={imagem.src} className="w-52 h-auto" alt="personagem Trail Finder" />
                    </a>
                </div>
            </section>


        </>
    )
}