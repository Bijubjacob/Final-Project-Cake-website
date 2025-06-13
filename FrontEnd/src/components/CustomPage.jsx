import React from "react";
import { useNavigate } from "react-router-dom";

function CustomPage() {
  const navigate = useNavigate();

  const sizeOptions = {
    rectangle: ["6x8", "8x10", "10x12"],
    circle: ["6 inch", "8 inch", "10 inch"],
    star: ["Small", "Medium", "Large"],
  };

  const prices = {
    shape: {
      rectangle: 15,
      circle: 12,
      star: 18,
    },
    size: {
      "6x8": 5,
      "8x10": 8,
      "10x12": 10,
      "6 inch": 4,
      "8 inch": 7,
      "10 inch": 9,
      Small: 6,
      Medium: 9,
      Large: 12,
    },
    layer: {
      1: 0,
      2: 5,
      3: 10,
    },
  };

  const [shape, setShape] = React.useState("");
  const [size, setSize] = React.useState("");
  const [layer, setLayer] = React.useState("");
  const [flavor, setFlavor] = React.useState("");
  const [frostingColor1, setFrostingColor1] = React.useState("");
  const [frostingColor2, setFrostingColor2] = React.useState("");
  const [frostingColor3, setFrostingColor3] = React.useState("");
  const [userFrostingDesign, setUserFrostingDesign] = React.useState("");
  const [cakeText, setCakeText] = React.useState("");
  const [cakeDecor, setCakeDecor] = React.useState("");
  const [userImage, setUserImage] = React.useState(null);

  // Example: calculate total price (optional)
  const calculatePrice = () => {
    let total = 0;
    if (shape) total += prices.shape[shape];
    if (size) total += prices.size[size];
    if (layer) total += prices.layer[layer];
    return total.toFixed(2);
  };

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
          <select
            id="shape"
            value={shape}
            onChange={(e) => {
              setShape(e.target.value);
              setSize(""); // reset size when shape changes
            }}
          >
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
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            disabled={!shape}
          >
            <option value="" disabled>
              Select a size
            </option>
            {shape &&
              sizeOptions[shape].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </section>

        <section id="cakeLayer">
          <h2>Choose amount of layers for your cake.</h2>
          <label htmlFor="layer">Cake Layer Amount:</label>
          <select
            id="layer"
            value={layer}
            onChange={(e) => setLayer(e.target.value)}
          >
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
          <select
            id="flavor"
            value={flavor}
            onChange={(e) => setFlavor(e.target.value)}
          >
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

        {/* Frosting Colors and Design Inputs (add onChange handlers similarly) */}
        {/* ... */}

        <section id="pricingSummary">
          <h2>Total Price:</h2>
          <p id="price">${calculatePrice()}</p>
        </section>

        <section id="paymentPage">
          <h2>Next Step</h2>
          <button onClick={() => navigate("/PaymentPage")}>
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

export default CustomPage;

 {/* Code by Daniel Rusev */}