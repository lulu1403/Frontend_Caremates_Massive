
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import pusatbantuanAPI from '../../api/pusatbantuanservice';
function Pusatbantuan() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await pusatbantuanAPI.getAllPusatbantuan();
      setData(response.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const tableStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid #ddd"
  };

  const headerStyle = {
    backgroundColor: "#0098d9",
    color: "white"
  };

  const rowStyle = {
    backgroundColor: "rgba(0, 200, 255, 0.1)",
  };

  return (
    <main className='main-container'>
        <p style={{fontSize:"30px", width:"100", textAlign:"center"}}>DATA PUSAT BANTUAN</p>
      <Button className="mb-4" style={{backgroundColor:"#4D96B6"}}>Tambah +</Button>{' '}
      <Table striped bordered hover variant='dark' style={tableStyle}>
        <thead style={headerStyle}>
          <tr style={{justifyContent:'center', textAlign:'center'}}>
            <th>ID</th>
            <th>Pertanyaan</th>
            <th>Jawaban</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.pertanyaan}</td>
              <td>{item.jawaban}</td>
              <td className="text-center"><Button className="me-1"  variant="primary">Edit</Button><Button className="me-1" variant="danger">Hapus</Button></td>
          </tr>
          ))}
        </tbody>
      </Table>
    </main>
  );
}

export default Pusatbantuan;
