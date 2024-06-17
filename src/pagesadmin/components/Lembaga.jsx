import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Lembaga() {
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
      <p style={{fontSize:"30px", width:"100", textAlign:"center"}}>DATA LEMBAGA</p>
      <Button className="mb-4" style={{backgroundColor:"#4D96B6"}}>Tambah Lembaga +</Button>{' '}
      <Table striped bordered hover variant='dark' style={tableStyle}>
        <thead style={headerStyle}>
          <tr style={{justifyContent:'center', textAlign:'center'}}>
            <th>NO</th>
            <th>Nama Lembaga</th>
            <th>Alamat</th>
            <th>Telepon</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Amanah Panti</td>
            <td>jl. Amanah</td>
            <td>0812345678</td>
            <td className="text-center"><Button className="me-1"  variant="primary">Edit</Button><Button className="me-1" variant="danger">Hapus</Button></td>
            
          </tr>
          <tr style={rowStyle}>
            <td>2</td>
            <td>Melati Yayasan</td>
            <td>jl. melati </td>
            <td>0812345677</td>
            <td className="text-center"><Button className="me-1"  variant="primary">Edit</Button><Button className="me-1" variant="danger">Hapus</Button></td>
          </tr>
        </tbody>
      </Table>
    </main>
  );
}

export default Lembaga;
