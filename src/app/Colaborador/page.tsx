"use client"
import { useEffect, useState } from "react";

export default function colaborador() {

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
        <>
            <div>
                {data.map((item) => (
                    <div key={item.id} className="flex justify-center flex-col">
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
