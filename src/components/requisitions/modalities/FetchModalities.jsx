import React, { useEffect, useState } from 'react';

// Styles
import './FetchModalities.css'

const FetchModalities = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/v1/machines/modalities/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data);

                setData(data);
            } catch (error) {
                setError(error);

            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <table className="table table-striped m-auto w-50">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className='text-center'>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td className='text-center'>
                                <button className='btn me-2'>
                                    <i class="fa-solid fa-trash text-danger"></i>
                                </button>
                                <button className='btn'>
                                    <i class="fa-solid fa-pencil text-primary"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FetchModalities;
