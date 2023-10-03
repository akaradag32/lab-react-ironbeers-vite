import Navbar from "../components/Navbar";
import { useParams } from 'react-router-dom';

function BeerDetailsPage() {
    const { beerId } = useParams();
    return (
        <Navbar/>
    )
}

export default BeerDetailsPage;
