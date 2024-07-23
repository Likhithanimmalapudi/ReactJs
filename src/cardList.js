import CardUI from "./card";

function cardListUI () {
    // const name1 = "Bhavana";
    // const college = "SVECW";
    const userObj = {name:"Likhitha",branch:"AIML",year:'3',college:'SVECW'};
    const users = ["name1","name2","name3","name4","name5","name6","name7","name8"]
    return(
        <div style={{display:'flex',flexWrap:'wrap'}}>
           {users.map((user, index)=>(<CardUI key = {index}
                    program = {user}
                    user = {userObj}
                    useFromArray={user} />
                )
            )
           }   
        </div>
    );
}
export default cardListUI;