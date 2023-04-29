import Link from "next/link";

function ClientsPage() {

    const clients = [
        {id: 'dav', name: 'David'},
        {id: 'max', name: 'Maximilian'}
    ];

    return <div>
        <h1>List of clients</h1>
        <ul>
            {clients.map(client => <li key={client.id}><Link href={`/clients/${client.id}`}>{client.name}</Link></li>)}
        </ul>
    </div>
}

export default ClientsPage;