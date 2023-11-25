import stats from "../../../assets/stats.jpeg"

const Stats = () => {
    return (
        <div>
            <h1 className="text-5xl text-center my-5 font-bold">Error Byte <span className="text-[#007CFF]">stat's</span></h1>
            <div className="hero h-[70vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={stats} className="max-w-sm rounded-lg shadow-2xl lg:ml-10" />
                    <div className="stats stats-vertical shadow">

                        <div className="stat">
                            <div className="stat-title">Total User</div>
                            <div className="stat-value">31K</div>
                            <div className="stat-desc">Jan 1st - Feb 1st</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Total Classes</div>
                            <div className="stat-value">4,200</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Total Enrollment</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;