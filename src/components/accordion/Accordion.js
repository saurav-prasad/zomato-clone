import React from 'react'
import './accordion.css'

function Accordion() {
    return (
        <div style={{ backgroundColor: "#fcfcfc" }}>
            <div className='accordionContainer accordion maxWidth'>
                <h1 className='accordionName'>Explore options near me</h1>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item  my-4 rounded">
                        <h2 className="accordion-header">
                            <button className="accordion-button accordionButtomName bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Popular cuisines near me
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                <div className='accordionItems'>
                                    <span className='accordionLists'>Bakery food near me</span>
                                    <span className='accordionLists'>• Bengali food near me</span>
                                    <span className='accordionLists'>• Beverages food near me</span>
                                    <span className='accordionLists'>• Biryani food near me</span>
                                    <span className='accordionLists'>• Burger food near me</span>
                                    <span className='accordionLists'>• Chinese food near me</span>
                                    <span className='accordionLists'>• Continental food near me</span>
                                    <span className='accordionLists'>• Desserts food near me</span>
                                    <span className='accordionLists'>• Momos food near me</span>
                                    <span className='accordionLists'>• Mughlai food near me</span>
                                    <span className='accordionLists'>• North Indian food near me</span>
                                    <span className='accordionLists'>• Pizza food near me</span>
                                    <span className='accordionLists'>• Rolls food near me</span>
                                    <span className='accordionLists'>•  Sandwich food near me</span>
                                    <span className='accordionLists'>• Seafood food near me</span>
                                    <span className='accordionLists'>• Shake food near me</span>
                                    <span className='accordionLists'>• Sichuan food near me</span>
                                    <span className='accordionLists'>• South Indian food near me</span>
                                    <span className='accordionLists'>• Street food near meTea food near me </span>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-4 rounded">
                        <h2 className="accordion-header">
                            <button className="accordion-button  accordionButtomName bg-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Popular restaurant types near me
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <div className='accordionItems'>
                                    <span className='accordionLists'>Bakeries near me</span>
                                    <span className='accordionLists'>• Bars near me</span>
                                    <span className='accordionLists'>•  Beverage Shops near me</span>
                                    <span className='accordionLists'>• Bhojanalya near me</span>
                                    <span className='accordionLists'>• Casual Dining near me</span>
                                    <span className='accordionLists'>• Clubs near me</span>
                                    <span className='accordionLists'>• Dessert Parlors near me</span>
                                    <span className='accordionLists'>• Dhabas near me</span>
                                    <span className='accordionLists'>• Fine Dining near me</span>
                                    <span className='accordionLists'>• Food Courts near me</span>
                                    <span className='accordionLists'>• Kiosks near me</span>
                                    <span className='accordionLists'>• Rolls food near me</span>
                                    <span className='accordionLists'>• Lounges near me</span>
                                    <span className='accordionLists'>• Paan Shop near me</span>
                                    <span className='accordionLists'>• Pubs near me</span>
                                    <span className='accordionLists'>• Sweet Shops near me</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item  my-4 rounded">
                        <h2 className="accordion-header">
                            <button className="accordion-button accordionButtomName bg-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Cities We Deliver To
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body accordionCitiesContainer flexCenter">
                                <div className="accordionCitiesBox ">
                                    <span className="accordionCities">Delhi NCR</span>
                                    <span className="accordionCities">Hyderabad</span>
                                    <span className="accordionCities">Ahmedabad</span>
                                    <span className="accordionCities">Nashik</span>
                                    <span className="accordionCities">Amritsar</span>
                                    <span className="accordionCities">Nashik</span>
                                    <span className="accordionCities">Amritsar</span>
                                    <span className="accordionCities">Ranchi</span>
                                    <span className="accordionCities">Vadodara</span>
                                    <span className="accordionCities">Puducherry</span>
                                    <span className="accordionCities">Srinagar</span>
                                    <span className="accordionCities">Haridwar</span>
                                    <span className="accordionCities">Kozhikode</span>
                                </div>
                                <div className="accordionCitiesBox">
                                    <span className="accordionCities">Kolkata</span>
                                    <span className="accordionCities">Chennai</span>
                                    <span className="accordionCities">Chandigarh</span>
                                    <span className="accordionCities">Ooty</span>
                                    <span className="accordionCities">Kanpur</span>
                                    <span className="accordionCities">Visakhapatnam</span>
                                    <span className="accordionCities">Nagpur</span>
                                    <span className="accordionCities">Surat</span>
                                    <span className="accordionCities">Khajuraho</span>
                                    <span className="accordionCities">Keh</span>
                                    <span className="accordionCities">Alapuzha</span>
                                    <span className="accordionCities">Kota</span>
                                    <span className="accordionCities">Jammu</span>
                                </div>
                                <div className="accordionCitiesBox">
                                    <span className="accordionCities">Mumbai</span>
                                    <span className="accordionCities">Lucknow</span>
                                    <span className="accordionCities">Goa</span>
                                    <span className="accordionCities">Shimla</span>
                                    <span className="accordionCities">Allahabad</span>
                                    <span className="accordionCities">Bhubaneshwar</span>
                                    <span className="accordionCities">Agra</span>
                                    <span className="accordionCities">Varanasi</span>
                                    <span className="accordionCities">Neemrana</span>
                                    <span className="accordionCities">Pushkar</span>
                                    <span className="accordionCities">Thrissur</span>
                                    <span className="accordionCities">Ajmer</span>
                                    <span className="accordionCities">Manali</span>
                                </div>
                                <div className="accordionCitiesBox">
                                    <span className="accordionCities">Bengaluru</span>
                                    <span className="accordionCities">Kochi</span>
                                    <span className="accordionCities">Indore</span>
                                    <span className="accordionCities">Ludhinana</span>
                                    <span className="accordionCities">Aurangabad</span>
                                    <span className="accordionCities">Coimbatore</span>
                                    <span className="accordionCities">Dehradun</span>
                                    <span className="accordionCities">Patna</span>
                                    <span className="accordionCities">Cuttack</span>
                                    <span className="accordionCities">Rajkot</span>
                                    <span className="accordionCities">Manipal</span>
                                    <span className="accordionCities">Mussorie</span>
                                    <span className="accordionCities">Dharamshala</span>
                                </div>
                                <div className="accordionCitiesBox">
                                    <span className="accordionCities">Pune</span>
                                    <span className="accordionCities">Jaipur</span>
                                    <span className="accordionCities">Siliguri</span>
                                    <span className="accordionCities">Gantok</span>
                                    <span className="accordionCities">Guwahati</span>
                                    <span className="accordionCities">Bhopal</span>
                                    <span className="accordionCities">Manglore</span>
                                    <span className="accordionCities">Mysore</span>
                                    <span className="accordionCities">Udaipur</span>
                                    <span className="accordionCities">Trivandrum</span>
                                    <span className="accordionCities">Madurai</span>
                                    <span className="accordionCities">Vijayawada</span>
                                    <span className="accordionCities">Rishikesh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion