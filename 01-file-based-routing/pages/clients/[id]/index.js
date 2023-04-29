import { useRouter } from "next/router";

function ClientPage() {
    
    const router = useRouter();

    const loadProjectHandler = () => {
        // load data
        router.push({
            pathname: '/clients/[id]/[projectId]',
            query: {id: 'dav', projectId: 'projecta'}
        });
    }

    return <div>
        <h1>Projects of a specific client</h1>
        <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
}

export default ClientPage;