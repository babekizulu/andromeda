//libs
import { useState } from "react";
//components
import DataTitle from "./DataTitle";
import Data from "./Data";
import ExploreBtn from "../../buttons/ExploreBtn";
import AnalyticsCard from "./AnalyticsCard";
import WelcomeMsg from "./WelcomeMsg";
import DashboardVisualAnalytics from "./DashboardVisualAnalytics";

function Dashboard() {
    //state management
    //eslint-disable-next-line
    const [userName, setUserName] = useState('Bob');
    //eslint-disable-next-line
    const [welcomeMsg, setWelcomeMsg] = useState(`Welcome back, ${userName}!`)
    const [toggleData, setToggleData] = useState(false);
    //variables
    const dataTitleArr = [
        'Service Delivery & Infrastructure Performance',
        'Financial Health & Governance',
        'Administrative Efficiency',
        'Economic Enablement & Local Growth',
        'Social & Human Outcomes',
        'Transparency, Trust & Civic Engagement',
        'Sustainability & Resilience',
        'Composite Indices'
    ]
    //handlers
    const handleToggleData = () => {
        setToggleData(!toggleData);
    }
     //array mappings
     const renderedAnalyticsCards = dataTitleArr.map((t,i) => {
        return <AnalyticsCard dataTitle={t} toggleData={toggleData} handleToggleData={handleToggleData} key={i}/>
    })
    return (
        <section className='page dashboard'>
            <WelcomeMsg welcomeMsg={welcomeMsg}/>
            <DashboardVisualAnalytics dashboardHeading='Municipal Analytics Overview' renderedAnalyticsCards={renderedAnalyticsCards}/>
        </section>
    )
}

export default Dashboard;