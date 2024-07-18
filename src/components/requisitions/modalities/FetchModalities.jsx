import React, { useEffect, useState } from 'react';
import './FetchModalities.css';

const FetchModalities = ({ modalities, setModalities }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalItemId, setModalItemId] = useState(null);
    const [editItem, setEditItem] = useState({ name: '', description: '' });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/v1/machines/modalities/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data);

                setModalities(data); // Atualiza o estado local com os dados da API
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [setModalities]);

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/machines/modalities/${modalItemId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Atualiza o estado local para remover o item deletado
            setModalities(modalities.filter(item => item.id !== modalItemId));
            handleCloseModal('confirmationModal');
        } catch (error) {
            console.error('Error:', error);
            setError(error);
        }
    };

    const handleEdit = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/machines/modalities/${modalItemId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editItem),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const updatedItem = await response.json();
            setModalities((prev) =>
                prev.map((item) => (item.id === modalItemId ? updatedItem : item))
            );
            handleCloseModal('editModal');
        } catch (error) {
            console.error('Error:', error);
            setError(error);
        }
    };

    const handleShowModal = (id) => {
        setModalItemId(id);
        const modal = new window.bootstrap.Modal(document.getElementById('confirmationModal'));
        modal.show();
    };

    const handleShowEditModal = (item) => {
        setModalItemId(item.id);
        setEditItem({ name: item.name, description: item.description });
        const modal = new window.bootstrap.Modal(document.getElementById('editModal'));
        modal.show();
    };

    const handleCloseModal = (modalId) => {
        const modal = window.bootstrap.Modal.getInstance(document.getElementById(modalId));
        modal.hide();
        setModalItemId(null);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditItem((prev) => ({ ...prev, [name]: value }));
    };

    if (loading) {
        return <div className='text-center'>Loading...</div>;
    }

    if (error) {
        return <div className='text-center'>Error: {error.message}</div>;
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
                    {modalities.map((item, index) => (
                        <tr className='text-center' key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>
                                <button 
                                    className='btn me-2' 
                                    onClick={() => handleShowModal(item.id)}
                                >
                                    <i className="fa-solid fa-trash text-danger"></i>
                                </button>
                                <button
                                    className='btn'
                                    onClick={() => handleShowEditModal(item)}
                                >
                                    <i className="fa-solid fa-pencil text-primary"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal de Confirmação de Exclusão */}
            <div className="modal fade" id="confirmationModal" tabIndex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="confirmationModalLabel">Confirmação de Exclusão</h5>
                            <button type="button" className="btn-close" onClick={() => handleCloseModal('confirmationModal')} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Tem certeza de que deseja excluir este item?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => handleCloseModal('confirmationModal')}>Cancelar</button>
                            <button type="button" className="btn btn-danger" onClick={handleDelete}>Excluir</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de Edição */}
            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLabel">Alteração de Dados</h5>
                            <button type="button" className="btn-close" onClick={() => handleCloseModal('editModal')} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nome</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    name="name" 
                                    value={editItem.name} 
                                    onChange={handleEditChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Descrição</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="description" 
                                    name="description" 
                                    value={editItem.description} 
                                    onChange={handleEditChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="user_create" className="form-label">User Create</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="user_create" 
                                    name="user_create" 
                                    value={editItem.user_create} 
                                    onChange={handleEditChange}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => handleCloseModal('editModal')}>Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={handleEdit}>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FetchModalities;
