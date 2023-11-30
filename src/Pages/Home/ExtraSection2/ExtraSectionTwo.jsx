// import busImg from "../../../assets/subsBG.jpg"

const ExtraSectionTwo = () => {
    return (
        <>
        
        <div>
            <div className="hero h-[70vh] bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/7kxGyLP/subsBG.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Subscribe</h1>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ExtraSectionTwo;