
const PortfolioProjects = ({src, label, date}: any) => {
    return (
        <>
            <div className="container-in relative">
                <img src={src} alt="portfolio projects" className="w-full h-[250px] object-cover brightness-75" />
                <div className="container-in absolute inset-0 flex flex-col justify-end font-primary mb-6 ">
                    <h1 className="text-white text-sm font-bold">{label}</h1>
                    <p className="text-white text-xsm font-medium opacity-75">{date}</p>
                </div>
            </div>
        </>
    )
}
export default PortfolioProjects
