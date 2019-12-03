import React, { useState } from 'react';
import { NEW_CLIENT } from './../mutations';
import { Mutation } from 'react-apollo';

const NewClient = (props) => {
    const [ client, setClient ] = useState({
        name: "",
        surname: "",
        enterprise: "",
        age: "",
        email: "",
        type: ""
    });
    const [ error, setError ] = useState(false);

return (
    <>
        <h2 className="text-center">Nuevo Cliente</h2>
        {
            error ? <p className="alert alert-danger p-3 text-center" >Todos los campos son requeridos</p>: ''
        }
        <div className="row justify-content-center">
            <Mutation
                mutation={NEW_CLIENT}
                onCompleted={() => {
                    props.history.push('/');
                }}
            >
            {
                createClient => (
                <form
                    className="col-md-8 m-3"
                    onSubmit={ e => {
                        e.preventDefault();
                        const { name, surname, enterprise, age, email, type } = client;
                        if ( name ==="" || surname ==="" || enterprise==="" || age==="" || type==="") {
                            setError(true);
                            return;
                        }
                        setError(false);
                        const input = {
                            name,
                            surname,
                            enterprise,
                            age: Number(age),
                            email,
                            type
                        };
                        createClient({
                            variables: {input}
                        })
                    }}
                >
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                value={client.name}
                                onChange={e => {
                                    const val = e.target.value;
                                    setClient(prevState => {
                                        return {...prevState, name: val}
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Apellido</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellido"
                                value={client.surname}
                                onChange={e => {
                                    const val = e.target.value;
                                    setClient(prevState => {
                                        return {...prevState, surname: val}
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Empresa</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Empresa"
                                value={client.enterprise}
                                onChange={e => {
                                    const val = e.target.value;
                                    setClient(prevState => {
                                        return {...prevState, enterprise: val}
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={client.email}
                                onChange={e => {
                                    const val = e.target.value;
                                    setClient(prevState => {
                                        return {...prevState, email: val}
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Edad</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Edad"
                                value={client.age}
                                onChange={e => {
                                    const val = e.target.value;
                                    setClient(prevState => {
                                        return {...prevState, age: val}
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Tipo Cliente</label>  
                            <select
                                className="form-control"
                                onChange={e => {
                                    const val = e.target.value;
                                    setClient(prevState => {
                                        return {...prevState, type: val}
                                    });
                                }}
                            >
                                <option value="">Elegir...</option>
                                <option value="PREMIUM">PREMIUM</option>
                                <option value="BASICO">BÁSICO</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success float-right">Agregar cliente</button>
                </form>
            )}
            </Mutation>
        </div>
    </>
)}

export default NewClient;