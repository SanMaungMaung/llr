// Main.js
import React from 'react';
import './Main.css'; // Ensure this CSS file is included
import foodImage from './img/food.jpg'; // Correctly import the image
import greekSalad from './img/greek-salad.jpg'; // Import images for specials
import bruschetta from './img/bruschetta.jpg';
import lemonDessert from './img/lemon-dessert.jpg';
import profilePic1 from './img/profile-pic-1.jpg'; // Import profile pictures for reviews
import profilePic2 from './img/profile-pic-2.jpg';
import profilePic3 from './img/profile-pic-3.jpg';
import profilePic4 from './img/profile-pic-4.jpg';

function Main() {
    return (
        <main className="main-content">
            <div className="main-container">
                <section className="intro">
                    <div className="text-content">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
                        <button className="reserve-button">Reserve a Table</button>
                    </div>
                    <div className="image-container">
                        <img src={foodImage} alt="Food" className="food-image" /> {/* Use the imported image */}
                    </div>
                </section>
            </div>
            <section className="specials">
                <div className="specials-header">
                    <h2>This week's specials!</h2>
                    <button className="online-menu-button">Order Now</button>
                </div>
                <div className="specials-container">
                    <div className="special-card">
                        <img src={greekSalad} alt="Greek Salad" className="special-image" />
                        <div className="special-content">
                            <h3>Greek Salad - $12.99</h3>
                            <p>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <button className="order-button">Order a delivery</button>
                        </div>
                    </div>
                    <div className="special-card">
                        <img src={bruschetta} alt="Bruschetta" className="special-image" />
                        <div className="special-content">
                            <h3>Bruschetta - $5.99</h3>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <button className="order-button">Order a delivery</button>
                        </div>
                    </div>
                    <div className="special-card">
                        <img src={lemonDessert} alt="Lemon Dessert" className="special-image" />
                        <div className="special-content">
                            <h3>Lemon Dessert - $5.00</h3>
                            <p>This comes straight from grandma's recipe book; every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <button className="order-button">Order a delivery</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reviews">
                <h1 className="reviews-title">Valuable Customer Reviews</h1>
                <div className="reviews-container">
                    <div className="review-card">
                        <div className="review-rating">⭐⭐⭐⭐⭐</div>
                        <div className="review-header">
                            <img src={profilePic1} alt="Joshua" className="profile-pic" />
                            <div className="review-info">
                                <span className="review-name">Joshua</span>
                                <span className="review-count">16 reviews</span>
                            </div>
                        </div>
                        <p className="review-text">"Decadent, delicious dessert - the perfect ending to a fantastic meal."</p>
                    </div>
                    <div className="review-card">
                        <div className="review-rating">⭐⭐⭐⭐</div>
                        <div className="review-header">
                            <img src={profilePic2} alt="Sasha" className="profile-pic" />
                            <div className="review-info">
                                <span className="review-name">Sasha</span>
                                <span className="review-count">10 reviews</span>
                            </div>
                        </div>
                        <p className="review-text">"The pasta dish was flavorful and hearty, and the portion size was generous."</p>
                    </div>
                    <div className="review-card">
                        <div className="review-rating">⭐⭐⭐⭐⭐</div>
                        <div className="review-header">
                            <img src={profilePic3} alt="Robin" className="profile-pic" />
                            <div className="review-info">
                                <span className="review-name">Robin</span>
                                <span className="review-count">9 reviews</span>
                            </div>
                        </div>
                        <p className="review-text">"The sushi was fresh and flavorful, and the presentation was beautiful."</p>
                    </div>
                    <div className="review-card">
                        <div className="review-rating">⭐⭐⭐⭐⭐</div>
                        <div className="review-header">
                            <img src={profilePic4} alt="Natasha" className="profile-pic" />
                            <div className="review-info">
                                <span className="review-name">Natasha</span>
                                <span className="review-count">14 reviews</span>
                            </div>
                        </div>
                        <p className="review-text">"The pizza was delicious, with just the right amount of cheese and amazing toppings."</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;
