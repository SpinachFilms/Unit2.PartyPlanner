const EVENTS_URI = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-PT-WEB-PT-A/events"

const getParties=async() =>{
    try{
    const response = await fetch (EVENTS_URI);
    const json = response.json();
    const parties = json.data;
    return parties;
}catch(error){
    console.error(error);
}
};
const init = async() => {
    const parties = await getParties();
    console.log(parties)
}
init()
const createParty = async (name, description, date, location) =>{
    try{
        const response = await fetch(EVENTS_URI, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({name, description, date, location}),
    });
    const json = await response.json();
    if(json.error){
        throw new Error(json.error);
    }
    }catch(error){
console.error(error)
    }
}

const deleteParty = async (id) => {
    try{
        const response = await fetch (EVENTS_URI,+"/"+{method: "DELETE"});
        const json = response.json();
        const parties = json.data;
        return parties;
    }catch(error){
        console.error(error);
    }
}


