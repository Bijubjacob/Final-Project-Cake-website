import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ConfirmationPage() {
  const navigate = useNavigate();

  const order = JSON.parse(localStorage.getItem('latestOrder'));

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000); // Redirect after 10 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <header>
        <h1>Your order has been placed!</h1>
        <p>Your cake is being prepared. Thank you very much!</p>
      </header>

      <main>
        {order ? (
          <section>
            <h2>Order Summary</h2>
            <p><strong>Cake Type:</strong> {order.cakeType}</p>
            <p><strong>Total Paid:</strong> ${(order.total / 100).toFixed(2)}</p>
            {order.deliveryDate && (
              <p><strong>Delivery Date:</strong> {new Date(order.deliveryDate).toLocaleString()}</p>
            )}
          </section>
        ) : (
          <p>We couldn't load your order details. But it's confirmed!</p>
        )}

        <section>
          <h2>Return to the Homepage</h2>
          <button onClick={() => navigate('/')}>Return to Homepage</button>
          <p>You’ll be redirected automatically in a few seconds.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Piece of Cake Bakery. All rights reserved.</p>
      </footer>
    </>
  );
}

export default ConfirmationPage;
