import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { loadStripe } from '@stripe/stripe-js'; // For Stripe 
//import { Elements } from '@stripe/react-stripe-js'; // For Stripe 
//import CheckoutForm from './CheckoutForm'; // For Stripe 
//const stripeLoad = loadStripe('mockKey')


function PaymentPage() {
	const navigate = useNavigate(); {/* For the confirmation page once user submits payment*/}

	return (
		<>

    		<header>
        		<h1>Enter your payment information here.</h1>
       			<p>Review your order and follow each step carefully.</p>
    		</header>

		<main>
    			<section id="orderSummary">
        			<h2>Order Summary</h2>
        			<p id="priceSummary">Total: $0.00</p>
   			</section>

    			<section id="paymentMethod">
        			<h2>Enter your payment information below.</h2>
        			<Elements stripe={stripeLoad}> {/* Specific code for Stripe to work. */}
        				<CheckoutForm /> {/* Stripe user payment information. */}
				</Elements>
				</section>
    

    			<section id="deliveryInformation">
        			<h2>Enter your delivery address below.</h2>
        			<p>
        				<label htmlFor="address">Street Address</label>
        				<input type="text" id="address" name="address" placeholder="Enter your street address" />
				</p>
        
        			<p>
        				<label htmlFor="state">State</label>
                                        <select id="state" name="state">
            					<option value="Alabama">AL</option>
            					<option value="Alaska">AK</option>
            					<option value="Arizona">AZ</option>
            					<option value="Arkansas">AR</option>
            					<option value="California">CA</option>
            					<option value="Colorado">CO</option>
            					<option value="Connecticut">CT</option>
            					<option value="Delaware">DE</option>
            					<option value="Florida">FL</option>
            					<option value="Georgia">GA</option>
            					<option value="Hawaii">HI</option>
            					<option value="Idaho">ID</option>
            					<option value="Illinois">IL</option>
            					<option value="Indiana">IN</option>
            					<option value="Iowa">IA</option>
            					<option value="Kansas">KS</option>
            					<option value="Kentucky">KY</option>
            					<option value="Louisiana">LA</option>
            					<option value="Maine">ME</option>
            					<option value="Maryland">MD</option>
            					<option value="Massachusetts">MA</option>
            					<option value="Michigan">MI</option>
            					<option value="Minnesota">MN</option>
            					<option value="Mississippi">MS</option>
           	 				<option value="Missouri">MO</option>
            					<option value="Montana">MT</option>
            					<option value="Nebraska">NE</option>
            					<option value="Nevada">NV</option>
            					<option value="New Hampshire">NH</option>
            					<option value="New Jersey">NJ</option>
            					<option value="New Mexico">NM</option>
            					<option value="New York">NY</option>
            					<option value="North Carolina">NC</option>
            					<option value="North Dakota">ND</option>
            					<option value="Ohio">OH</option>
            					<option value="Oklahoma">OK</option>
            					<option value="Oregon">OR</option>
            					<option value="Pennsylvania">PA</option>
            					<option value="Rhode Island">RI</option>
            					<option value="South Carolina">SC</option>
            					<option value="South Dakota">SD</option>
            					<option value="Tennessee">TN</option>
            					<option value="Texas">TX</option>
            					<option value="Utah">UT</option>
            					<option value="Vermont">VT</option>
            					<option value="Virginia">VA</option>
            					<option value="Washington">WA</option>
            					<option value="West Virginia">WV</option>
            					<option value="Wisconsin">WI</option>
            					<option value="Wyoming">WY</option>
        				</select>
				</p>
        
        			<p>
        				<label htmlFor="city">City</label>
        				<input type="text" id="city" name="city" placeholder="Enter your city" />
				</p>

        			<p>
        				<label htmlFor="zip">Zip Code</label>
        				<input type="text" id="zip" name="zip" placeholder="Enter your zip code" />
				</p>

    			</section>

    			<section id="deliveryDate">
        			<h2>Enter the date and time you need your cake</h2>
        			<label htmlFor="dateInput">Select delivery date and time.</label>
        			<input type="datetime-local" id="dateInput" name="deliveryDate" />
    			</section>

    			<section id="goBack">
        			<h2>Need to make some changes?</h2>
        			<button onClick={() => navigate('/CustomPage')}>
					Go Back to Cake Customization Page.
				</button>
    			</section>
		</main>

		<footer>
        		<p>&copy; 2025 Piece of Cake Bakery. All rights reserved.</p>
		</footer>
	</>
	);
}

export default PaymentPage;
    

{/* Code by Daniel Rusev */}