function DashboardVisualAnalytics({dashboardHeading, renderedAnalyticsCards}) {
    return (
        <div className='dashboard-section-container'>
            <div className='dashboard-heading-container'>
                <h2>{dashboardHeading}</h2>
            </div>
            {renderedAnalyticsCards}
        </div>
    )
}

export default DashboardVisualAnalytics;