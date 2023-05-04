function UserIdPage(props) {
    return <h1>{props.id}</h1>;
} 

export default UserIdPage;

export async function getServerSideProps(context) {

    const { params, res } = context;

    return {
        props: { id: `userId-${params.userId}`}
    };
}