// Main.js
import React from 'react';
import './Main.css'; // Ensure this CSS file is included
import foodImage from './img/food.jpg'; // Correctly import the image

function Main() {
    return (
        <main className="main-content">
            <div className="main-container">
                <section className="intro">
                    <div className="text-content">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned, Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button className="reserve-button">Reserve a Table</button>
                    </div>
                    <div className="image-container">
                        <img src={foodImage} alt="Food" className="food-image" /> {/* Use the imported image */}
                    </div>
                </section>
            </div>
            <section className="specials">
                <h2>Specials</h2>
                <p>Check out our daily specials that bring a delightful twist to traditional Mediterranean cuisine!</p>
                {/* Add more content for specials as needed */}
            </section>
        </main>
    );
}

export default Main;
