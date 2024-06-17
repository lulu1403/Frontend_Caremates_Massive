import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Transaksi() {
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
      <p style={{fontSize:"30px", width:"100", textAlign:"center"}}>DATA TRANSAKSI</p>
      <Button className="mb-4" style={{backgroundColor:"#4D96B6"}}>Tambah  +</Button>{' '}
      <Table striped bordered hover variant='dark' style={tableStyle}>
        <thead style={headerStyle}>
          <tr style={{justifyContent:'center', textAlign:'center'}}>
            <th>NO</th>
            <th>Nama Yayasan</th>
            <th>Jenis Transaksi</th>
            <th>Nominal</th>
            <th>Detail</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Amanah Panti</td>
            <td>Pengajuan Penggalangan</td>
            <td>RP 5.000.000</td>
            <td>Pembelian Alat Sholat</td>
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
            <td>Ceria Panti</td>
            <td>Pengajuan Penggalangan</td>
            <td>RP 5.000.000</td>
            <td>Pembelian Alat Tulis</td>
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

export default Transaksi;
