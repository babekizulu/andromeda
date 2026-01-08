//components
import { useState } from "react";

function Dashboard() {
    //eslint-disable-next-line
    const [userName, setUserName] = useState('Bob');
    return (
        <section className='page dashboard'>
            <div className='welcome-msg-container'>
                <h1>Welcome back, {userName}!</h1>
            </div>
            <div className='municipal-analytics-overview-container'>
                <div className='dashboard-heading-container'>
                    <h2>Municipal Analytics Overview</h2>
                </div>
                <div className='municipal-analytics-overview'>
                    <div className='municipal-analytics-data'>
                        <div className='data-title'>
                            <h3>Service Delivery & Infrastructure Performance</h3>
                        </div>
                        <div className='explore-data-btn-container'>
                            <button className='explore-data-btn'>
                                Explore Data
                            </button>
                        </div>
                    </div>
                </div>
                <div className='municipal-analytics-overview'>
                    <div className='municipal-analytics-data'>
                        <div className='data-title'>
                            <h3>Financial Health & Governance</h3>
                        </div>
                        <div className='explore-data-btn-container'>
                            <button className='explore-data-btn'>
                                Explore Data
                            </button>
                        </div>
                    </div>
                </div>
                <div className='municipal-analytics-overview'>
                    <div className='municipal-analytics-data'>
                        <div className='data-title'>
                            <h3>Administrative Efficiency</h3>
                        </div>
                        <div className='explore-data-btn-container'>
                            <button className='explore-data-btn'>
                                Explore Data
                            </button>
                        </div>
                    </div>
                </div>
                <div className='municipal-analytics-overview'>
                    <div className='municipal-analytics-data'>
                        <div className='data-title'>
                            <h3>Economic Enablement & Local Growth</h3>
                        </div>
                        <div className='explore-data-btn-container'>
                            <button className='explore-data-btn'>
                                Explore Data
                            </button>
                        </div>
                    </div>
                </div>
                <div className='municipal-analytics-overview'>
                    <div className='municipal-analytics-data'>
                        <div className='data-title'>
                            <h3>Social & Human Outcomes</h3>
                        </div>
                        <div className='explore-data-btn-container'>
                            <button className='explore-data-btn'>
                                Explore Data
                            </button>
                        </div>
                    </div>
                </div>
                <div className='municipal-analytics-overview'>
                    <div className='municipal-analytics-data'>
                        <div className='data-title'>
                            <h3>Transparency, Trust & Civic Engagement</h3>
                        </div>
                        <div className='explore-data-btn-container'>
                            <button className='explore-data-btn'>
                                Explore Data
                            </button>
                        </div>
                    </div>
                </div>
                <div className='municipal-analytics-overview'>
                    <div className='municipal-analytics-data'>
                        <div className='data-title'>
                            <h3>Sustainability & Resilience</h3>
                        </div>
                        <div className='explore-data-btn-container'>
                            <button className='explore-data-btn'>
                                Explore Data
                            </button>
                        </div>
                    </div>
                </div>
                <div className='municipal-analytics-overview'>
                    <div className='municipal-analytics-data'>
                        <div className='data-title'>
                            <h3>Composite Indices</h3>
                        </div>
                        <div className='explore-data-btn-container'>
                            <button className='explore-data-btn'>
                                Explore Data
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;