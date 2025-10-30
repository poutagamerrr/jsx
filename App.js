
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Name, Price, Description, Image } from './components';
import myPic from './JBLheadphone.jpg';


const firstName = ""; // Set your first name here, e.g., "Alex"

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={{ background: '#f8f9fa' }}>
      <Card style={{ width: '22rem' }}>
        <Card.Body>
          {firstName ? (
            <Image src={myPic} alt="Headphone" />
          ) : null}
          <Name name="Wireless Headphone" />
          <Price price="98.99" />
          <Description />
        </Card.Body>
      </Card>
      <div className="mt-4">
        <h4>{`Hello, ${firstName ? firstName : 'there'}!`}</h4>
      </div>
    </div>
  );
}

export default App;
