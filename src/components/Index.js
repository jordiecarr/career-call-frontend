// left sidebar
import {Link} from 'react-router-dom'

function Index(props) {

   
    // loaded function
    const loaded = () => {
        return props.career.map((ad) => (
            <div key={ad._id} className="ad">
                <Link to ={`/hires/${ad._id}`}>
                    <h1>{ad.title} | {ad.company} | {ad.location}</h1>
                </Link>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <h1>{props.career ? loaded() : loading()}</h1>
    )
}

export default Index