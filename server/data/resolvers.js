import { Clients } from './db';

export const resolvers = {
    Query: {
        getClients: (_root, {limit}) => {
            return Clients.find({}).limit(limit)
        },
        getClient: (_root, {id}) => {
            return new Promise((resolve, rejects) => {
                Clients.findById(id,(error, client) => {
                if (error) rejects(error)
                else resolve(client)
                })
            })
        }
    },
    Mutation: {
        createClient: (_root, {input}) => {
            const newClient = new Clients({
                name: input.name,
                surname: input.surname,
                enterprise: input.enterprise,
                emails: input.emails,
                age: input.age,
                type: input.type,
                orders: input.orders
            })

            newClient.id = newClient._id;

            return new Promise((resolve, rejects) => {
                newClient.save((error) => {
                    if (error) rejects(error);
                    else resolve(newClient)
                })
            })
        },
        updateClient: (_root, {input}) => {
            return new Promise((resolve, rejects) => {
                Clients.findOneAndUpdate(
                    {_id: input.id},
                    input,
                    {new: true},
                    (error, client) => {
                        if (error) rejects(error)
                        else resolve(client)
                    }
                )
            })
        },
        deleteClient: (_root, {id}) => {
            return new Promise((resolve, rejects) => {
                Clients.findOneAndRemove({_id: id}, (error) => {
                    if (error) rejects(error)
                    else resolve('Se eliminó correctamente')
                })
            })
        }
    }
}