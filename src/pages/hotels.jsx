import HotelsComponent from "../components/Hotels";
import HotelsSidebar from "../components/HotelsSidebar";

const Hotels = () => {
    return  (
        <div className="flex flex-row gap-2">
            <HotelsSidebar />

            <HotelsComponent />
        </div>
    )
}

export default Hotels;