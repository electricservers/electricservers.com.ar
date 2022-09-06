const Header = () => {
    return (
        <div className="bg-[url('../public/background/bg_header.jpg')] p-14 sm:p-28 flex flex-col sm:flex-row sm:divide-x-2 bg-[center_top_30%] h-[50vx] skew-y-2">
            <div className="m-auto -skew-y-2">
                <img src="/electric-logo.png" className="max-h-[300px]" alt="logo" />
            </div>
            <div className="font-poppins m-auto pl-6 -skew-y-2">
                <h1 className="text-center sm:text-left font-bold text-2xl md:text-3xl lg:text-4xl text-white text-shadow">
                    Tu comunidad<br />
                    en Team Fortress 2.
                </h1>
            </div>
        </div>
    );
}

export default Header;