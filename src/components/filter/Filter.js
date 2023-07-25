import './filter.css'

function Filter({ filters, rating, deliveryFilter }) {
    const setFilt = (data) => {
        switch (data) {
            case 2:
                rating(4)
                break
            case 3:
                rating(3.5)
                break
            case 5: deliveryFilter()
                break
            default:
        }
    }
    return (
        <div className="maxWidth filterContainer">
            {filters &&
                filters.map((filter) =>
                    // TODO: designing the filter box and designing the border.
                    // Highlights: header and tab options completed and working on filters. 
                    <div onClick={() => setFilt(filter.id)} className='filterItem flexCenter userSelect cursorPointer'>
                        {filter.icon}
                        {filter.name}
                    </div>
                )
            }
        </div>
    )
}
export default Filter