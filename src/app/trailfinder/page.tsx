'use client'
import { useState } from 'react';
import interrogacao from "../../../public/formulario/interrogacao.png"
import Link from 'next/link';
import Header from "../Componentes/Header"
import Footer from "../Componentes/Footer"

export default function TrailFinder(){
    const [data, setData] = useState({
        name: '',
        email: '',
        cargo: '',
        tipoEmpresa: '',
        setor: '',
        dataContato: '',
        probabilidadeContratacao: 0.0
      });
      const [formSubmitted, setFormSubmitted] = useState(false);
    
      const handleFormEdit = (event:any, name:any) => {
        setData({
          ...data,
          [name]: event.target.value
        });
      };
    
      const handleForm = async (event:any) => {
        try {
          event.preventDefault();
    
          // Verifica se todos os campos obrigatórios foram preenchidos
          const formIsValid = Object.values(data).every(value => value !== '');
          if (!formIsValid) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
          }
    
          // Verifica se o e-mail possui o formato correto
          const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
          if (!emailIsValid) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return;
          }
    
          const response = await fetch(`http://localhost:8080/projetoTeste/rest/trailFinder/inserir`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
    
          if (response.ok) {
            const text = await response.text();
            const json = text ? JSON.parse(text) : {};
            console.log(json);
            setFormSubmitted(true);
            window.location.href = "/sucesso";
          } else {
            console.error('Erro ao enviar formulário:', response.statusText);
          }
        } catch (err) {
          console.error('Erro ao enviar formulário:', err);
        }
      };
    
      function handleAlert1() {
        alert(`Para Empresas do Tipo Serviços:
                - Microempresa (ME): Até 9 empregados
                - Empresa de Pequeno Porte (EPP): De 10 a 49 empregados
                - Empresa de Médio Porte: De 50 a 99 empregados
                - Grandes Empresas: 100 ou mais empregados`);
      }
    return(
        <>
        <section className="p-2 bg-gray-100 flex flex-col justify-center">
      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleForm}>
        <div className="flex items-center mb-4">
          <svg className="w-8 h-8 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
          </svg>
          <h1 className="w-32 text-2xl font-medium">Trail Finder</h1>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Qual é o seu Nome</label>
          <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="name" type="text" placeholder="Nome" value={data.name} onChange={(e) => { handleFormEdit(e, "name") }} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Informe seu e-mail:</label>
          <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="email" type="email" placeholder="E-mail" value={data.email} onChange={(e) => { handleFormEdit(e, "email") }} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="data">Data:</label>
          <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="data" type="date" placeholder="Data" value={data.dataContato} onChange={(e) => { handleFormEdit(e, "dataContato") }} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="cargo">Qual seu cargo:</label>
          <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="cargo" name="cargo" value={data.cargo} onChange={(e) => { handleFormEdit(e, "cargo") }} required>
            <option value=""></option>
            <option value="Assistente">Assistente</option>
            <option value="Diretor">Diretor</option>
            <option value="Estagiário">Estagiário</option>
            <option value="Gerente">Gerente</option>
            <option value="Analista">Analista</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="tipoEmpresa">Qual o tamanho da sua empresa:</label>
        <div className='flex flex-row items-center'>
          <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="tipoEmpresa" name="tipoEmpresa" value={data.tipoEmpresa} onChange={(e) => { handleFormEdit(e, "tipoEmpresa") }} required>
            <option value=""></option>
            <option value="Pequena">Pequena</option>
            <option value="Média">Média</option>
            <option value="Grande">Grande</option>
          </select>
          <img className="w-6 h-6 ml-2 cursor-pointer" src={interrogacao.src} onClick={handleAlert1} alt="Interrogação" />
        </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="setor">Qual o setor da sua empresa:</label>
          <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="setor" name="setor" value={data.setor} onChange={(e) => { handleFormEdit(e, "setor") }} required>
            <option value=""></option>
            <option value="Automotivo">Automotivo</option>
            <option value="Comunicações">Comunicações</option>
            <option value="Bens de Consumo">Bens de Consumo</option>
            <option value="Educação">Educação</option>
            <option value="Energia & Utilities">Energia & Utilities</option>
            <option value="Serviços Financeiros">Serviços Financeiros</option>
            <option value="Saúde & Ciências da Vida">Saúde & Ciências da Vida</option>
            <option value="Manufatura">Manufatura</option>
            <option value="Mídia">Mídia</option>
            <option value="Sem fins lucrativos">Sem fins lucrativos</option>
            <option value="Setor Público">Setor Público</option>
            <option value="Varejo">Varejo</option>
            <option value="Tecnologia">Tecnologia</option>
          </select>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="w-52 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">ENVIE</button>
        </div>
        <div className='w-full h-6 flex justify-center mt-4'>
          <Link href={"./logins/colaborador"}>
            <p className='text-xs'>Colaborador Sales Force? Faça login aqui!</p>
          </Link>
        </div>
        {formSubmitted && <p className="mt-4 text-green-500">Enviado com  sucesso</p>}
      </form>
    </section>
        </>
    )
}