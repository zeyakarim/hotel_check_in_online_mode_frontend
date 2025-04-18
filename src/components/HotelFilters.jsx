import { Star } from "@mui/icons-material";
import { Checkbox } from "@mui/material";

const filters = [
    {
        name: 'Popular Filters',
        items: [
            {
                checked: false,
                type: 'Budget Hotel'
            },
            {
                checked: true,
                type: 'Breakfast Included'
            },
            {
                checked: false,
                type: 'Free Airport Shuttle'
            },
            {
                checked: false,
                type: 'Hostel/Backpaper'
            }
        ]
    },
    {
        name: 'Price Per Night',
        items: [
            {
                checked: false,
                type: 'Less than $50'
            },
            {
                checked: false,
                type: '$50 to $100'
            },
            {
                checked: false,
                type: '$100 to $150'
            },
            {
                checked: false,
                type: '$150 and more'
            }
        ]
    },
    {
        name: 'Guest Rating',
        items: [
            {
                checked: false,
                type: 'Any'
            },
            {
                checked: false,
                type: 'Excellent'
            },
            {
                checked: false,
                type: 'Very Good'
            },
            {
                checked: false,
                type: 'Good'
            }
        ]
    }
];

const hotelStars = [1,2,3,4,5]

const HotelFilters = () => {
    return (
        <div className="flex flex-col gap-4">
            {filters?.map((filter) => (
                <div key={filter?.name} className="flex flex-col gap-2">
                    <p className="text-base font-semibold">{filter?.name}</p>
                    {filter?.items?.map((item, index) => (
                        <div key={index} className="flex gap-1 items-center">
                            <Checkbox defaultChecked={item?.checked} style={{ padding:'0px'}} />
                            <p>{item?.type}</p>
                        </div>
                    ))}
                </div>
            ))}

            <div className="flex flex-col gap-2 pb-4">
                <p className="text-base font-semibold">Property Class</p>
                <div className="flex gap-2">
                    {hotelStars?.map((item, index) => (
                        <div key={index} className="flex gap-1 items-center rounded-full px-2" style={{ border:'1px solid lightgray'}}>
                            <p className="text-sm">{item}</p>
                            <Star style={{ fontSize:'14px', color:'gray'}} />
                        </div>
                    ))}
                </div>
            </div>            
        </div>
    )
}

export default HotelFilters;