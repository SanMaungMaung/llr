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
import chefImage from './img/chef.jpg'; // Import about section images
import outdoorImage from './img/restaurant.jpg';
import bicycleIcon from './img/bicycle.svg'; // Import the bicycle icon

function Main() {
    return (
        <main className="main-content">
            <div className="main-container">
                <section className="intro">
                    <div className="text-content">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2> {/* Add Chicago here */}
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
                         <div className="special-title">
                            <h3>Greek Salad</h3>
                             <h4>$12.99</h4>
                         </div>
                             <p>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                             <a href="/home">Order a Delivery<img src={bicycleIcon} alt="Order a Delivery" /></a>
                    </div>
                    </div>
                    <div className="special-card">
                        <img src={bruschetta} alt="Bruschetta" className="special-image" />
                        <div className="special-content">
                         <div className="special-title">
                            <h3>Bruschetta</h3>
                            <h4>$5.99</h4>
                            </div>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <a href="/home">Order a Delivery<img src={bicycleIcon} alt="Order a Delivery" /></a>
                        </div>
                    </div>
                    <div className="special-card">
                        <img src={lemonDessert} alt="Lemon Dessert" className="special-image" />
                        <div className="special-content">
                         <div className="special-title">
                            <h3>Lemon Dessert</h3>
                            <h4>$7.99</h4>
                            </div>
                            <p>This comes straight from grandma's recipe book; every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <a href="/home">Order a Delivery<img src={bicycleIcon} alt="Order a Delivery" /></a>
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
            <section className="about">
                <div className="text-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2> {/* Add Chicago here */}
                    <p>
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails 
                        in a lively but casual environment. We offer a locally-sourced menu with daily specials.
                    </p>
                </div>
                <div className="image-container">
                    <img src={chefImage} alt="Chef" />
                    <img src={outdoorImage} alt="Restaurant" />
                </div>
            </section>
        </main>
    );
}

export default Main;
