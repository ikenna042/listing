import Head from "next/head";
import Link from 'next/link'
import styles from '../../styles/Items.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { users: data }
    }
}

const Items = ({users}) => {
    return ( 
        <>
            <Head>
                <title>Listing | Lists</title>
                <meta name="keywords" content="listings" />
            </Head>
            <div>
                <h1>Users</h1>
                {users.map(user => (
                    <Link href={"/items/" + user.id} key={user.id}>
                        <a className={styles.single}>
                            <h3>{ user.name }</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
     );
}
 
export default Items;