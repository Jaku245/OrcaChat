import React, { Component } from 'react';
import { Col, Row } from 'antd';
import { Button } from 'shards-react';

import '../App.css'
import LottieAnimation from '../lottie';
import pikachu_lottie from '../animations/pikachu_lottie.json'
import GuessModal from './guessComponent';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    toggleModal = async () => {
        await this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
            <>
                <Row>
                    <Col xs={24} md={8} style={{ justifyContent: 'center' }}>
                        <LottieAnimation lottie={pikachu_lottie} height={300} width={300} />
                    </Col>
                    <Col sm={24} md={16} style={{ alignSelf: 'center' }}>
                        <p className="home-content">Hey, there!! If you think you are a true pokemon fan, then try to guess random pokemon and prove it.</p>
                        <Button size="lg" theme="dark" pill className="guess-btn" onClick={this.toggleModal} >Guess pokemon</Button>
                    </Col>
                </Row >
                <GuessModal showModal={this.state.showModal} toggleModal={this.toggleModal} />
            </>
        )
    }
}