import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Col, Row } from 'react-bootstrap';
import { BsFillPersonFill } from "react-icons/bs";

const Detaildonasi = () => {
  const donationCollected = 15000; 
  const donationNeeded = 2500000;

  const incomeData = [
    {
      id: 1,
      description: "Donation from John Doe",
      amount: 15000,
      date: new Date('2024-05-27T00:00:00Z'),
      details: "Donated for educational needs",
    },
  ];
  
  const expenseData = [
    {
      id: 1,
      description: "Groceries",
      amount: 10000,
      date: new Date('2024-05-26T00:00:00Z'),
      details: "Bought groceries from Indomaret",
    },
  ];

  const [showIncomeModal, setShowIncomeModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [selectedIncome, setSelectedIncome] = useState(null);
  const [selectedExpense, setSelectedExpense] = useState(null);

  useEffect(() => {
    // Perform any side effects here if needed
  }, []);

  return (
    <div style={backgroundStyle}>
      <style>
        {`
          @keyframes colorChange {
            0% { background-position: 0% 50%; }
            25% { background-position: 25% 50%; }
            50% { background-position: 100% 50%; }
            75% { background-position: 75% 50%; }
            100% { background-position: 0% 50%; }
          }
          body.no-scroll {
            overflow: hidden;
          }
        `}
      </style>

      {/* Header Section */}
      <div className="background-atas" style={backgroundAtasStyle}>
        <h2 style={headerTitleStyle}>Yayasan Yatim Piatu Roudlotul Jannah</h2>
      </div>

      {/* Background Square */}
      <div className="background-square" style={backgroundSquareStyle}></div>

      {/* Donation Details Section */}
      <section className="detail-donasi">
        <div className="background-kuning" style={backgroundkuningStyle}>
          <div style={headerContainerStyle}>
            <h3 style={sectionTitleStyle}>Detail Donasi</h3>
            
            <div className="progres-bar" style={{ width: '100%' }}>
              <ProgressBar now={(donationCollected / donationNeeded) * 100} />
              <div className="row">
                <Col style={{color: '#000', border: '1px',}}>Donasi Terkumpul: Rp. {donationCollected}</Col>
                <Col style={{color: '#000', border: '1px', textAlign:'end'}}>Donasi Dibutuhkan: Rp. {donationNeeded}</Col>
              </div>
            </div>
          </div>

          <div className="yayasan" style={{ paddingTop: "11%" }}>
            <p style={descriptionStyle}>
              Donasi yang Anda berikan akan digunakan untuk mendukung kebutuhan dasar dan fasilitas untuk hafiz Qur’an yang memadai. Setiap kontribusi sangat berarti untuk memberikan masa depan yang lebih cerah dan penuh harapan bagi mereka yang kurang beruntung. 
              <span style={{ fontWeight: 'bold' }}> Terima kasih atas kebaikan dan kepedulian Anda.</span>
            </p>
          </div>

          <div className="row">
            <div className="col-6">
              <p style={subSectionTitleStyle}>Detail Pemasukan</p>
              <hr style={incomeHrStyle} />
              {incomeData.map((income) => (
                <div key={income.id} className="row" style={incomeRowStyle}>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <BsFillPersonFill style={iconStyle} />
                    </Col>
                    <Col>
                      <p style={incomeTextStyle}>Kawan caremates berdonasi Rp.{income.amount}<br /><span style={timeTextStyle}>5 jam yang lalu</span></p>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>

            <div className="col-6">
              <p style={subSectionTitleStyle}>Detail Pengeluaran</p>
              <hr style={expenseHrStyle} />
              <div>
                <Row className="justify-content-between">
                  <Col>Total Donasi Terkumpul</Col>
                  <Col className="text-end">Rp. 15.000</Col>
                </Row>
                <Row className="justify-content-between">
                  <Col>Biaya Layanan Dompet Digital</Col>
                  <Col className="text-end">Rp. 1.000</Col>
                </Row>
                <Row className="justify-content-between">
                  <Col>Donasi Tercairkan</Col>
                  <Col className="text-end">Rp. 0</Col>
                </Row>
                <Row className="justify-content-between">
                  <Col>Donasi Belum Tercairkan</Col>
                  <Col className="text-end">Rp. 14.000</Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles
const backgroundStyle = {
  height: '100vh', 
  background: 'linear-gradient(45deg, #00cbb7, #0098d9, #00baa7, #0081b8)',
  animation: 'colorChange 12s ease-in-out infinite',
  backgroundSize: '200% 200%',
  backgroundPosition: '0% 50%',
  fontFamily: '"Open Sans", sans-serif',
  margin: 0, 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
};

const backgroundAtasStyle = {
  marginBottom: '1%',
  padding: '1%',
  margin: '2%',
  position: 'fixed',
  width: '90%',
  zIndex: 3,
  borderRadius: '20px',
  background: 'rgba(255, 255, 255, 0.42)',
  boxShadow: '0px 0px 24px -5px rgba(0, 0, 0, 0.25)',
  WebkitBackdropFilter: 'blur(20px)',
  backdropFilter: 'blur(20px)', 
  border: '1px solid rgba(255, 255, 255, 0.77)',
};

const headerTitleStyle = {
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: '700',
  fontSize: '36px',
};

const backgroundSquareStyle = {
  position: 'fixed',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '88%',
  height: '85%',
  margin: 0,
  borderRadius: '20px',
  backgroundColor: '#ffffff6b',
  zIndex: 1,
};

const backgroundkuningStyle = {
  position: 'fixed',
  top: '32%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '17%',
  margin: 0,
  borderRadius: '20px',
  backgroundColor: '#FFCC15',
  zIndex: 1,
};

const headerContainerStyle = {
  position: 'fixed',
  paddingTop: '10px',
  paddingLeft: '20px',
  width: '98%',
};

const sectionTitleStyle = {
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: '700',
  fontSize: '30px',
  color: 'black',
};

const descriptionStyle = {
  fontFamily: 'Open Sans',
  fontWeight: '200',
  fontSize: '110%',
};

const subSectionTitleStyle = {
  textAlign: 'center',
  fontFamily: 'Open Sans',
  fontWeight: '300',
  fontSize: '20px',
};

const incomeHrStyle = {
  border: '4px solid',
  color: '#4D96B6',
  borderRadius: '30px',
};

const expenseHrStyle = {
  border: '4px solid',
  color: 'white',
  borderRadius: '30px',
};

const incomeRowStyle = {
  background: "rgba(255, 255, 255, 0.25)",
  borderRadius: "50px",
  height: '35%',
  marginTop: '2%',
};

const iconStyle = {
  width: "35px",
  height: "35px",
};

const incomeTextStyle = {
  marginTop: '2%',
  fontSize: '90%',
};

const timeTextStyle = {
  fontSize: '70%',
};

export default Detaildonasi;
