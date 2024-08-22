import React from 'react'

function Recommened() {
    return (
        <main>
            <section className='ps2 container'>

                <Card style={{ width: '18rem' }} className='m-2'>
                    <Card.Img variant="top" src={products.thumbnail} alt={beta.id} />
                    <Card.Body>
                        <Card.Title>{products.title}</Card.Title>
                        <Card.Text>${products.price}</Card.Text>
                        <div className='py-2'>
                            <Card.Text className='d-flex '>
                                <Rating name="read-only" value={products.rating} readOnly />
                                <span className='ps-1 text-secondary'>{products.rating}</span></Card.Text>
                        </div>
                        <Button variant="primary" as={Link} to={`/ViewProduct/${products.id}`} >View Product</Button>
                    </Card.Body>
                </Card>

            </section>
        </main>
    )
}

export default Recommened