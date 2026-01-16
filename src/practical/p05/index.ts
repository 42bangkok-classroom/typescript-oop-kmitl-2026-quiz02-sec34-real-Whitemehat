import axios from "axios"
const API = "https://jsonplaceholder.typicode.com/users";

type User = {
    id: number,
    name: string,
    address: {},
    phone: string,
}

export async function safeFetchUser(id: number) {
    try{
        const res = await axios.get(API);
        const data = res.data;
        let result: User;
        for(const user of data){
        if(user.id === id){
            return result = {
                id: user.id,
                name: user.name,
                address: user.address,
                phone: user.phone
            };
        }
    }
    return null;
    }
    catch(err){
        return null;
    }
}
