import React, { useEffect, useState } from 'react';

const Contacts = () => {
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
        getContacts('https://contact.mediusware.com/api/contacts/');
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
    
console.log(contacts)
    return (
        <div>
            <h2>Contact Information</h2>
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
};

export default Contacts;
