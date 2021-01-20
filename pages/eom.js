import styles from '../styles/EOM.module.css';
import { Toolbar } from '../components/toolbar';

export const EOM = ({ employee }) => {
    return (
        <div className='page-container'>
            <Toolbar />
            <div className={styles.main}>
                <h1>Employee of the Month</h1>

                <div className={styles.employeeOfTheMonth}>
                    <h3>{employee.name}</h3>
                    <h6>{employee.position}</h6>
                    <img src={employee.image} />
                    <p>{employee.description}</p>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async pageContext => {
    // const apiResponse = await fetch(
    //     'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',
    // );

    // const employee = await apiResponse.json();
    const employee = {
        name: "Preston Lund",
        position: "Software Engineer",
        image: "https://media-exp1.licdn.com/dms/image/C5603AQFllsoSUaAnsw/profile-displayphoto-shrink_400_400/0/1582839118227?e=1616630400&v=beta&t=JErnfrNqFZtvJOZDjO2-CkAfATa4KzVACTH7473ucqo",
        description: "Tall, dev guy"
    }

    return {
        props: {
            employee
        }
    }
};

export default EOM;