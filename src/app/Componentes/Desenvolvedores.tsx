import Link from "next/link";
import fotos from "./fotos.json"

interface dados {
    src : string;
    text : string;
    text2 : string;
}

export default function Desenvolvedores(){
    return(
        <>
        <h1 className="text-2xl font-bold mb-4">Desenvolvedores</h1>
        <section className="py-8 flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fotos.map((item1: dados) => (
                    <div className="flex flex-col items-center">
                        <div className="w-72 h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                            <a className="block w-full h-full">
                                <img className="w-96 h-full object-cover" src={item1.src} />
                            </a>
                        </div>
                        <ul className="mt-4 text-center text-gray-700">
                            <li className="mb-2">{item1.text}</li>
                            <li>{item1.text2}</li>
                        </ul>
                    </div>
                ))}
            </div>

            <button className="mt-8 w-96 flex flex-row bg-blue-600 hover:bg-blue-800 text-white font-bold">
                <div className="flex">
                    <Link href="https://github.com/Marcondezz/SalesForce">
                        <svg className="w-6 h-6" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path>
                        </svg>
                        <p>Continue para Github</p>
                    </Link>
                </div>
            </button>
        </section>

        </>
    )
}