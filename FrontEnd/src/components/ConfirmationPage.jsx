import React from 'react';
import { useNavigate } from 'react-router-dom'


function ConfirmationPage() {
	const navigate = useNavigate();

	return (
		<>
			<header>
        			<h1>Your order has been placed!</h1>
        			<p>Your cake is being prepared. Thank you very much!</p>
    			</header>

    			<main>
        			<section>
           				 <h2>Return to the Homepage</h2>
            				 <button onClick={() => navigate('/MainPage')}>Return to Homepage</button>
        			</section>
    			</main>

   			 <footer>
        			<p>&copy; 2025 Piece of Cake Bakery. All rights reserved.</p>
    			</footer>
		</>
	);
}

export default ConfirmationPage;

    {/* Code by Daniel Rusev */}