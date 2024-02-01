import React from 'react';
import Modal from 'react-modal';
import Modal1 from './Modal-1';
import Modal2 from './Modal-2';

Modal.setAppElement('#root');
const Problem2 = () => {
    const [modal1IsOpen, setModel1IsOpen] = React.useState(false);
    const [modal2IsOpen, setModel2IsOpen] = React.useState(false);
    function openModal1() {
        setModel1IsOpen(true);
      }

    function closeModal1() {
        setModel1IsOpen(false);
    }


    //Modal-2
    function openModal2() {
        setModel2IsOpen(true);
      }

    function closeModal2() {
        setModel2IsOpen(false);
    }

    return (

        <div className="container">
    
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button onClick={openModal1} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                <button onClick={openModal2} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>
                
            </div>
            <Modal1 modal1IsOpen={modal1IsOpen} closeModal1={closeModal1}></Modal1>
            <Modal2 modal2IsOpen={modal2IsOpen} closeModal2={closeModal2}></Modal2>
        </div>
    );
};

export default Problem2;