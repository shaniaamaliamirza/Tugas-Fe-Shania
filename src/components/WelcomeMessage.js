// src/components/WelcomeMessage.js
import React from 'react';
import styled from 'styled-components';

// Styled components
const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px); /* Menyesuaikan tinggi dengan tinggi Navbar */
  background: #ffc0cb; /* Warna latar belakang pink lembut */
  padding: 20px;
`;

const WelcomeMessage = styled.div`
  text-align: center;
  background: #ffffff; /* Warna latar belakang putih */
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 800px; /* Maksimum lebar */
`;

const Heading = styled.h1`
  font-size: 2.8rem;
  color: #ff69b4; /* Warna pink */
  margin-bottom: 20px;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
  color: #555555; /* Warna teks abu-abu */
  margin-bottom: 30px;
  line-height: 1.6;
`;

const WelcomeImage = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
`;

// Komponen utama
function WelcomeMessageComponent() {
  return (
    <WelcomeContainer>
      <WelcomeMessage>
        <Heading>Selamat datang di halaman dashboard!</Heading>
        {/* Uncomment this if you want to add a paragraph and an image */}
        {/* <Paragraph>Kami senang Anda berada di sini. Jelajahi berbagai fitur yang tersedia dan manfaatkan semuanya untuk pengalaman terbaik.</Paragraph> */}
        {/* <WelcomeImage src="https://via.placeholder.com/350x250" alt="Welcome" /> */}
      </WelcomeMessage>
    </WelcomeContainer>
  );
}

export default WelcomeMessageComponent;
