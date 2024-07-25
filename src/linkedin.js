
function Link() {
    var names = ["Scott Ayres","Richard Beson" , "Jacob Hilpertshauser","Stephanie Sweet" , "Sarah Hecker","Curt Ziegler","Hannah Recker", "Michael Angiletta"];
    var pos = ["Busting social media myths at the Social Media Lab","SaaS Customer Onboarding Manager / Producer and ...","Harness your social media content and engageme...","Customer Support / Software QA Tester","US Support & Affiliate Manager at Agorapulse","Customer Support Hero at Agorapulse","Inbound & Marketing Operations Manager at ...","Growth Marketing | CMO | Agorapulse"];
    var no = [23,7,5,4,3,3,4,3];

    return (
        <div id="container">
            {names.map((name, index) => 
                <div key={index} id="in-container">
                    <img src="image.png" alt="image" width = "60px" height="60px" />
                    <div className="name">{name}</div>
                    <div className="position">{pos[index]}</div>
                    <div className="connections"><img src="image.png" alt="image" width = "16px" height="16px" />   {no[index]} shared connections </div>
                    <button >Connect</button>
                </div>
            )}
        </div>
    );
}

export default Link;