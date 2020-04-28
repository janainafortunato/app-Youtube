import React, { Camponents, Component } from 'react';

class CardsProducts extends Component{

    state = {
        cards: [

            {
            imagem:'https://pt-br.reactjs.org/docs/getting-started.html',
            title: 'Card 1',
            text:'ugfdsgfdgfjhaflkalfjlasjflçsfskf',
            },
            {
            imagem:'https://pt-br.reactjs.org/docs/getting-started.html',
            title: 'Card 2',
            text:'ugfdsgfdgfjhaflkalfjlasjflçsfskf',
            },
            {
            imagem:'https://pt-br.reactjs.org/docs/getting-started.html',
            title: 'Card 3',
            text:'ugfdsgfdgfjhaflkalfjlasjflçsfskf',
            }
        ]
    }

    render() {
        return(
            <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </>
            
        )
    }
}



export default CardsProducts;