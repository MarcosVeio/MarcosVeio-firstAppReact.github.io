import { Button } from "./components/button"
import { ButtonModal, Modal } from "./components/modal/modal"
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

export const App = () => {
    const [number, setNumber] = useState(0)

    return (
        <div className="container">
            <div className="contador">
                <div className="sumAndSub">
                    <Button className="btn btn-danger" handleOnClick={() => {
                        setNumber(number - 1)
                    }} value="-" />

                    <span className="result">{number}</span>

                    <Button className="btn btn-success" handleOnClick={() => {
                        setNumber(number + 1)
                    }
                    } value="+" />

                </div>

                <div className="operacoes">
                    <Button className="btn btn-secondary btn-lg" handleOnClick={() => {
                        setNumber(0)
                    }} value="Reset" />

                    <Button className="btn btn-outline-primary" handleOnClick={() => {
                        setNumber(number * 2)
                    }} value="*2" />
                </div>
            </div>

            <ButtonModal className="btn btn-outline-secondary about" value="About" />
            <Modal modalTitle="About this counter" modalContent="First project, started at Apex Teaching. Made with ReactJs." />
        </div>
    )
}