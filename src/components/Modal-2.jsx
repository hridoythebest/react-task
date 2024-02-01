import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Modal1 from './Modal-1';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
const Modal2 = ({modal2IsOpen,closeModal2, }) => {
  const [modal1IsOpen, setModel1IsOpen] = React.useState(false);
  const [contacts, setContacts] = useState([]);
  const [count, setCount] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  const getContacts = (url) => {
      fetch(url)
          .then(res => res.json())
          .then(data => {
              setCount(data.count);
              setNextPage(data.next);
              setPreviousPage(data.previous);
              setContacts(data.results);
          })
          .catch(error => console.error('Error fetching contacts:', error));
  };

  useEffect(() => {
      getContacts('https://contact.mediusware.com/api/country-contacts/United%20States/');
  }, []); 

  const handleNextPage = () => {
      if (nextPage) {
          getContacts(nextPage);
      }
  };

  const handlePreviousPage = () => {
      if (previousPage) {
          getContacts(previousPage);
      }
  };

    function openModal1() {
        closeModal2();
        setModel1IsOpen(true);
      }

    // function closeModal1() {
    //     setModel1IsOpen(false);
    // }
    return (
        <div >
        <Modal
        isOpen={modal2IsOpen}
        onRequestClose={closeModal2}
        style={{customStyles,height:'500px'}}
        contentLabel="Example Modal"
      >
        <h2 >Modal-2</h2>

        <div className='mt-4'>
          <button>All Contacts</button>
          <button onClick={openModal1} className='ml-4'>Us Contacts</button>
          <button className='ml-4' onClick={closeModal2}>Close</button>
        </div>
      <br />
        <div>
            <h2>US Contact Information</h2>
            <p>Count: {count}</p>
            <p><button onClick={handlePreviousPage} disabled={!previousPage}>Previous Page</button> <button onClick={handleNextPage} disabled={!nextPage}>Next Page</button> </p>
          

            {contacts.map((contact) => (
                <div key={contact.id} >
                    <p>Id : {contact.id}</p>
                    <p>Name : {contact.country.name}</p>
                    <p>Country_id : {contact.country.id}</p>
                    <p>Phone : {contact.phone}</p>
                    <br />
                </div>
            ))}
        </div>
    );
      </Modal>
      {/* <Modal1 modal1IsOpen={modal1IsOpen} closeModal1={closeModal1}></Modal1> */}
        </div>
    );
};

export default Modal2;