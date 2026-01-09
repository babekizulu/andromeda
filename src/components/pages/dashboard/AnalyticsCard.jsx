//components
import DataTitle from "./DataTitle";
import Data from "./Data";
import ExploreBtn from "../../buttons/ExploreBtn";

function AnalyticsCard({dataTitle, toggleData, handleToggleData}) {
    return (
        <div className='analytics-card'>
            <div className='analytics-data'>
                <DataTitle title={dataTitle}/>
                {toggleData ? <Data/> : ''}
                <ExploreBtn handleToggleData={handleToggleData}/>
            </div>
        </div>
    )
}

export default AnalyticsCard;