import SubHeader from '../components/SubHeader';
import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home Page' />
            <DisplayList />
        </Container>
    );
};

export default HomePage;