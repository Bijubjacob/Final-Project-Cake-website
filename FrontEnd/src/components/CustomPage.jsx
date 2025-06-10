import React from 'react';
import { useNavigate } from 'react-router-dom';

function CustomPage() {
	const navigate = useNavigate();
	return (
		<>

    <header>
        <h1>Customize Your Own Cake</h1>
        <p>Follow each step carefully to design your own cake.</p>
    </header>

    <main>
        <section id="cakeShape">
            <h2>Choose a shape for your cake.</h2>
            <label htmlFor="shape">Cake Shapes:</label>

            <select id="shape" defaultValue="">
                <option value="" disabled>
		Select a shape
		</option>
                <option value="rectangle">Rectangle</option>
                <option value="circle">Circle</option>
                <option value="star">Star</option>
            </select>
        </section>

        <section id="cakeSize">
            <h2>Choose a size for your cake.</h2>
            <label htmlFor="size">Cake Sizes:</label>

            <select id="size" defaultValue="">
                <option value="" disabled>
			Select a size
		</option>
            </select>
        </section>
        {/*The cake sizes will dynamically update based on shape selection. 
        The sizes will be placed in the JavaScript portion of website.*/}

        {/*Example of how it would look in JavaScript. */}
        
        {/* <script>
        const sizeOptions = {
            rectangle: ["6x8", "8x10", "10x12"],
            circle: ["6 inch", "8 inch", "10 inch"],
            star: ["Small", "Medium", "Large"]
        };*/}
        {/* Remove notes once JavaScript is implemented*/}

        <section id="cakeLayer">
            <h2>Choose amount of layers for your cake.</h2>
            <label htmlFor="layer">Cake Layer Amount:</label>

            <select id="layer" defaultValue="">
                <option value="" disabled>
			Select an amount of layers
		</option>
                <option value="1">Single Sheet</option>
                <option value="2">Double Sheet</option>
                <option value="3">Triple Sheet</option>
            </select>
        </section>

        <section id="cakeFlavor">
            <h2>Choose a flavor for your cake.</h2>
            <label htmlFor="flavor">Cake Flavors:</label>

            <select id="flavor" defaultValue="">
                <option value="" disabled>
			Select a flavor
		</option>
                <option value="chocolate">Chocolate</option>
                <option value="vanilla">Vanilla</option>
                <option value="red velvet">Red Velvet</option>
                <option value="lemon">Lemon</option>
                <option value="carrot">Carrot</option>
            </select>
        </section>

        <section id="cakeFrosting">
            <h2>Choose frosting colors for your cake.</h2>

            <p>
            <label htmlFor="frostingColor1">Choose Primary Frosting Color:</label>
            <select id="frostingColor1" defaultValue="">
                <option value="" disabled>
			Select a frosting color
		</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="light blue">Light Blue</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="gold">Gold</option>
                <option value="purple">Purple</option>
                <option value="pink">Pink</option>
                <option value="white">White</option>
                <option value="brown">Brown</option>
                <option value="black">Black</option>
            </select>
            </p>

            <p>
            <label htmlFor="frostingColor2">Choose Secondary Frosting Color:</label>
            <select id="frostingColor2" defaultValue="">
                <option value="" disabled>
			Select a frosting color
		</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="light blue">Light Blue</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="gold">Gold</option>
                <option value="purple">Purple</option>
                <option value="pink">Pink</option>
                <option value="white">White</option>
                <option value="brown">Brown</option>
                <option value="black">Black</option>
                <option value="none">None</option>
            </select>
            </p>

            <p>
            <label htmlFor="frostingColor3">Choose Tertiary Frosting Color:</label>
            <select id="frostingColor3" defaultValue="">
                <option value="" disabled>
			Select a frosting color
		</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="light blue">Light Blue</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="gold">Gold</option>
                <option value="purple">Purple</option>
                <option value="pink">Pink</option>
                <option value="white">White</option>
                <option value="brown">Brown</option>
                <option value="black">Black</option>
                <option value="none">None</option>
            </select>
            </p>

            <p>
            <label htmlFor="userFrostingDesign">
		Input instructions for frosting design:
	    </label>
            <textarea 
		id="userFrostingDesign" 
		name="userFrostingDesign" 
		className="textbox" 
		placeholder="E.g., I would like a Drop Flower design along the top edges with my primary frosting color. I would like a Open Star design along the bottom edges with my secondary color. I would like the frosting in between the cake layers to be the tertiary color." 
		required
	      />
            </p>
        </section>
     
        <section id="cakeDecorations">
            <h2>Add any additional decorations or text you would like on the cake.</h2>
            <p>
            <label htmlFor="cakeText">Input text to put on cake:</label>
            <textarea 
		id="cakeText" 
		name="cakeText" 
		rows={5} 
		className="textbox" 
		placeholder="E.g., Put 'Happy Birthday Mom!'"
	    />
            </p>

            <p>
            <label htmlFor="cakeDecor">Input instructions:</label>
            <textarea 
		id="cakeDecor" 
		name="cakeDecor" 
		rows={5} 
		className="textbox" 
		placeholder="E.g., Put red, green, and yellow frosting balloons next to 'Happy Birthday Mom!'. Put pink frosting heart underneath 'Happy Birthday Mom!'."
	    />
            </p>

            <p>
            <label htmlFor="userImage">
		Have a picture of a design you would like to implement in your cake?
	    </label>
	    </p> 
            <p>
		Upload a image here:
            	<input 
			type="file" 
			id="userImage" 
			name="userImage" 
			accept="image/png, image/jpeg"
		/>
            </p>
        </section>
        
        {/*Textboxes will be formated on the CSS file.*/}

        {/*Example of how it would look in the CSS.*/}

        {/*.textbox {
  display: block;
  width: 100%;
  max-width: 600px;
  height: auto;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 1rem;
  font-family: inherit;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
    } */}
  {/* Remove notes once CSS is implemented */}

        <section id="pricingSummary">
            <h2>Total Price:</h2>
            <p id="price">$0.00</p>
        </section>

        {/* The cake prices based on user selection will have to be placed in the JavaScript portion of website.*/}

        {/* Example of how it would look in JavaScript. */}
        
        {/* <script>
const prices = {
    shape: {
        rectangle: 15,
        circle: 12,
        star: 18
    },
    size: {
        "6x8": 5, "8x10": 8, "10x12": 10,
        "6 inch": 4, "8 inch": 7, "10 inch": 9,
        "Small": 6, "Medium": 9, "Large": 12
    },
    layer: {
        1: 0,
        2: 5,
        3: 10
    },
</script>

        }; */}

        {/* Remove notes once JavaScript is implemented. */}

        <section id="paymentPage">
            <h2>Next Step</h2>
            <button onClick={() => navigate('/PaymentPage')}>
		Continue to Payment Method
	    </button>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Piece of Cake Bakery. All rights reserved.</p>
    </footer>
  </>
 );
}

    

    {/* JavaScript for this page will go above. "script.js" is temporary. */}
    {/* JavaScript will need event listeners. */}
    {/* I will add example pictures for each option once CSS and JavaScript is complete. */}

export default CustomPage;
 {/* Code by Daniel Rusev */}