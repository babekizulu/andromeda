function ExploreBtn({handleToggleData}) {
    return (
        <div className='explore-data-btn-container'>
            <button className='explore-data-btn' onClick={handleToggleData}>
                Explore Data
            </button>
        </div>
    )
}

export default ExploreBtn;