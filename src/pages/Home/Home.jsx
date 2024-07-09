import React, { useState } from 'react';

// Styles
import './Home.css'

// Components
import FetchModalities from '../../components/requisitions/modalities/FetchModalities'

const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        user_create: '' // Adicionei o campo user_create aqui
    });

    const [modalities, setModalities] = useState([]); // Novo estado para armazenar os dados

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, description, user_create } = formData;

        if (!name || !description || !user_create) {
            // Adiciona borda vermelha aos campos vazios
            if (!name) {
                document.getElementById('name').classList.add('border-danger');
            }
            if (!description) {
                document.getElementById('description').classList.add('border-danger');
            }
            if (!user_create) {
                document.getElementById('user_create').classList.add('border-danger');
            }

            return;
        }

        try {
            // Enviando os dados para a API
            const response = await fetch('http://127.0.0.1:8000/api/v1/machines/modalities/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            // Atualiza os dados localmente após o cadastro
            setModalities([...modalities, result]);

            // Limpa os campos do formulário após o cadastro
            setFormData({
                name: '',
                description: '',
                user_create: ''
            });

            console.log('Success: ', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='home'>
            <h1 className='text-center'>Data from API</h1>
            <form className='m-auto w-50 mb-5' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input type="text" name='name' value={formData.name} onChange={handleChange} className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descrição</label>
                    <textarea type="text" name='description' value={formData.description} onChange={handleChange} className="form-control" id="description" />
                </div>
                <div className="mb-3">
                    <label htmlFor="user_create" className="form-label">User Create</label>
                    <input type="text" name='user_create' value={formData.user_create} onChange={handleChange} className="form-control" id="user_create" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {/* Passa os dados atualizados para o componente FetchModalities */}
            <FetchModalities modalities={modalities} setModalities={setModalities} />
        </div>
    );
};

export default Home;
