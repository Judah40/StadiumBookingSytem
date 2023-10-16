import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

const ScanQR = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleScan = async (data) => {
    if (data) {
      try {
        const res = await fetch('/api/scan-qr', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ qrValue: data }), // send the scanned data to the API
        });

        const result = await res.json();

        if (result.status === 'success') {
          // Navigate to success page
          router.push('/success');
        } else {
          setError(result.message);
        }
      } catch (error) {
        setError('Error reading QR Code. Please try again.');
      }
    }
  };

  const handleError = (err) => {
    setError('Error reading QR Code. Please try again.');
  };

  return (
    <div>
      <h1>Scan your QR code</h1>
      {error && <p>{error}</p>}
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default ScanQR;
