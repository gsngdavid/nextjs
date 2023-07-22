import { useRouter } from 'next/router';

function ProjectPage() {
    const router = useRouter();
    console.log(router.query);

    return <div>
        <h1>Project '{router.query.projectId}' from {router.query.id}</h1>
    </div>
}

export default ProjectPage;