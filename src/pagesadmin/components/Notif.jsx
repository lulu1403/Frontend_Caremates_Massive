import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Notif() {
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
      <p style={{fontSize:"30px", width:"100", textAlign:"center"}}>DATA NOTIFIKASI</p>
      <Button className="mb-4" style={{backgroundColor:"#4D96B6"}}>Tambah  +</Button>{' '}
      <Table striped bordered hover variant='dark' style={tableStyle}>
        <thead style={headerStyle}>
          <tr style={{justifyContent:'center', textAlign:'center'}}>
            <th>ID</th>
            <th>Detail Notif</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Buat Akun Baru</td>
            <td className="d-flex justify-content-center align-items-center ">
                <div>
                    <Button className="me-1" variant="success">Detail</Button>
                </div>
                <div>
                    <DropdownButton id="dropdown-basic-button" title="Status">
                    <Dropdown.Item href="#/action-1">Process</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Accept</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                    </DropdownButton>
                </div>
            </td>

          </tr>
          <tr style={rowStyle}>
            <td>2</td>
            <td>Ajukan Pertanyaan</td>
            <td className="d-flex justify-content-center align-items-center ">
                <div>
                    <Button className="me-1" variant="success">Detail</Button>
                </div>
                <div>
                    <DropdownButton id="dropdown-basic-button" title="Status">
                    <Dropdown.Item href="#/action-1">Process</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Accept</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                    </DropdownButton>
                </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </main>
  );
}

export default Notif;
