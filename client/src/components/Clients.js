import React from 'react';
import { Query } from 'react-apollo';
import { CLIENTS_QUERY } from '../queries';
import { Link } from 'react-router-dom';

const Clients = () => (
    <Query query={CLIENTS_QUERY} pollInterval={1000}>
        {({loading, error, data, startPolling, stopPolling}) => {
            if (loading) return "Cargando..";
            if (error) return `Error: ${error.message}`;
            console.log(data.getClients,'data');
            return (
                <>
                    <h2 className="text-center">Listado de clientes</h2>
                    <ul className="list-group">
                        {
                            data.getClients.map(item => (
                                <li key={item.id} className="list-group-item">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-md-8 d-flex justify-content-between align-items-center">
                                            {item.name} {item.surname} - {item.enterprise}
                                        </div>
                                        <div className="col-md-4 d-flex justify-content-end">
                                            <Link to={`/cliente/editar/${item.id}`} className="btn btn-success d-block d-md-inline-block">
                                                Editar Cliente
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                </>
            )
        }}

    </Query>
)

export default Clients;