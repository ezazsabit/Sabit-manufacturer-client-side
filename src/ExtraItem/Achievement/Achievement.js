import React from 'react';
import { Button, Card } from 'react-bootstrap';
import A1 from '../../Images/awards/A1.jpg'
import A2 from '../../Images/awards/A2.jpg'
import A3 from '../../Images/awards/A3.png'

const Achievement = () => {
    return (
<div>
  
<p className='mt-5 text-6xl text-secondary'>Our Achievement</p>
        <div className='App w-4/5 mt-14  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 mx-auto'>
       
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={A1} />
  <Card.Body>
    <Card.Title className='text-primary mx-auto'>Green Award</Card.Title>
    <Card.Text>
    Our products are proven for the friendly of the environment.
    </Card.Text>
   
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={A2} />
  <Card.Body>
    <Card.Title className='text-primary mx-auto'>Bashundhora Award</Card.Title>
    <Card.Text>
    Award from a big company like Bashundhora is really a proud moment for all of us!!!
    </Card.Text>
   
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={A3} />
  <Card.Body>
    <Card.Title className='text-primary mx-auto'>Best Seller Award</Card.Title>
    <Card.Text>
    Thank you all for choosing us and make us the best seller of the year.We will always be a family and we hope we always will get proper response from all of our happy members.
    </Card.Text>
   
  </Card.Body>
</Card>



         

        </div>
</div>
    );
};

export default Achievement;