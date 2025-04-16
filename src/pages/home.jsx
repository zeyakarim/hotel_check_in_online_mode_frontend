import { Fragment } from "react";
import Header from "../components/Header";
import HomeMainSection from "../components/PopularDestinations";
import HotelsLovedByGuest from "../components/HotelsLovedByGuest";
import LatestUpdate from "../components/LatestUpdate";
import Footer from "../components/Footer";

const Home = () => {

    return (
        <Fragment>
            <div className="flex flex-col w-full gap-8">
                <Header />

                <HomeMainSection />

                <HotelsLovedByGuest />

                <LatestUpdate />

                <Footer />
            </div>
        </Fragment>
    )
}

export default Home;