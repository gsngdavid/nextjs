function UserProfilePage(props) {
    return <h1>{ props.username }</h1>
}

export default UserProfilePage;

export async function getServerSideProps(context) {
    console.log(context.req);

    return {
        props: { username: 'David' }
    };
}