'use client'
import dados1 from "./imgs-paginaInicial1.json"
import dados2 from "./imgs-paginaInicial2.json"

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

        </>
    )
}