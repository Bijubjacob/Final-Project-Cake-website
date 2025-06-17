import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageTransitions from './ImageTransitions';
import './MainPage.css';



function MainPage() {

	const navigate = useNavigate();

	return (
		<>
    <main>
    	<article>
		<nav>
        <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#examples">Example Designs</a></li>
            <li><a href="#order">Order Your Own Custom Cake</a></li>
        </ul>
    	</nav>

        	<section id="about">
            		<h3>About Us</h3>
            		<p>
			Welcome to Piece of Cake Bakery! Founded in 2025, we here at Piece of Cake Bakery have the core belief that every celebration is not complete without a delicious cake as the party's centerpiece. Our online cake designer lets anybody customize their own cake with ease. Choose a selection of delicious cake flavors, cake shapes, vibrant frosting colors, and even your own custom decorations. Whether you need a cake for a birthday, graduation, or retirement party, we make designing and ordering your own custom cake easy and stress free. Make your celebration sweeter with your own delicious cake.
			</p>
        	</section>

        	<section id="examples">
            		<h4>Example Cakes</h4>
            		<div className="example-cakes">
                		<ImageTransitions />
            		</div>

                {/* A JavaScript will be used to rotate each image below */}
                {/* "chocolatecake.jpg" alt="Chocolate cake example">
                "vanillacake.jpg" alt="Vanilla cake example">
                "redvelvetcake.jpg" alt="Red Velvet cake example">
                "birthdaycake.jpg" alt="Birthday cake example">
                "graduationcake.jpg" alt="Graduation cake example"> */}
            
        	</section>

        	<section id="order">
            		<h5>Design Your Own Cake</h5>
            		<div className="buttons">
                		<button onClick={() => navigate('/CustomPage')}>
					Order Now
				</button>
            		</div>
       		</section>
    	</article>

    	<a href="#top" className="home-button" title="Back to Top">🏠</a>
    </main>

        <footer>
            <p>&copy; 2025 Piece of Cake Bakery. All rights reserved.</p>
        </footer>

       </>
     );
}

export default MainPage;
