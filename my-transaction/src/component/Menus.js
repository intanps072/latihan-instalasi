import React, {Component} from "react";
import {Col} from 'react-bootstrap';
import {NumberWithCommas} from '../utils/utils'

const Menus = ({menu}) => {
    return (
        <Col md={4} xs={6} className = 'mb-4'>
            <Card className ='shadow' style = {{widht : '18rem'}}>
                <Card.Img variant = 'top' src={'image/' + menu.category.nama.toLowerCase() + '/' + menu.gambar} />
                <Card.Body>
                    <Card.Title>{menu.nama}({menu.kode})</Card.Title>
                <Card.Text>
                    Rp. {NumberWithCommas(menu.harga)}
                </Card.Text>
                
                </Card.Body>
        </Card>
        </Col>
    )
}

export default Menus;