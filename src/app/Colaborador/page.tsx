"use client"
import { useEffect, useState } from "react";

export default function colaborador() {

    const [selectedOption, setSelectedOption] = useState("option1");

    interface item {
        id: number;
        name: String;
        email: String;
        cargo: String;
        tipoEmpresa: String;
        setor: String;
        dataContato: Date;
        probabilidadeContratacao: number;
    }

    const [data, setData] = useState<item[]>([]);

    const getData = async () => {
        try {
            const response = await fetch("http://localhost:8080/trailfinder/todos", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            setData(data);

        } catch (error) {
            console.log('Fetch error:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

return (
    <div className="flex">
      {/* Menu de navegação */}
      <div className="w-56 border-r-2 border-black p-5">
        <ul className="space-y-4">
          <li className={""}>Opção 1</li>

          <li className={`cursor-pointer ${selectedOption === "option2" ? "font-bold" : ""}`}
            onClick={() => setSelectedOption("option2")}> Opção 2</li>
        </ul>
      </div>

      {/* Conteúdo dinâmico do lado direito */}
      <div className="p-5 flex-1">
        {selectedOption === "option1" ? (
          <div>
            {/* Conteúdo da Opção 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
              {data.map((item) => (
                <div className="flex flex-col justify-center">
                  <div className="p-5 bg-gray-300 flex flex-col rounded-lg border-2 border-gray-800 shadow-[8px_6px_0px_0px] shadow-gray-800">
                    <div className="flex justify-between">
                      <h1 className="text-gray-800 font-extrabold text-sm">{item.email}</h1>
                      <p className="text-gray-800 font-extrabold text-xl">{item.probabilidadeContratacao}%</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-500 font-semibold text-sm">{item.cargo}</p>
                      <p className="text-gray-500 font-semibold text-sm">{item.tipoEmpresa}</p>
                      <p className="text-gray-500 font-semibold text-sm">{item.setor}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-xl font-bold">Este é o conteúdo da Opção 2</h1>
            <p className="mt-4 text-gray-500">Aqui você pode colocar qualquer informação adicional para a Opção 2.</p>
          </div>
        )}
      </div>
    </div>
  );
}
      
 
