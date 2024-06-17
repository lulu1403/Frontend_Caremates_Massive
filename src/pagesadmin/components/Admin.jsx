import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import adminAPI from '../../api/adminservice';

function Admin() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
        try {
          const response = await adminAPI.getAllAdmin();
          setData(response.results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

  return (
    <main className='main-container'>
      <p style={{ fontSize: "30px", width: "100", textAlign: "center" }}>DATA ADMIN</p>
      <Table striped bordered hover variant='dark'>
        <thead style={{ backgroundColor: "#0098d9", color: "white" }}>
          <tr style={{ justifyContent: 'center', textAlign: 'center' }}>
            <th>No</th>
            <th>Nama Admin</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </main>
  );
}

export default Admin;
