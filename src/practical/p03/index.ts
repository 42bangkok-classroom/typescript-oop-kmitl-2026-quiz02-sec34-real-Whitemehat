import axios from "axios"

const API = "https://jsonplaceholder.typicode.com/users";

type User = {
    id: number,
    name: string,
    phone: string,
    address: {}
}

export async function filterUserById(id:number) {
    const res = await axios.get(API);
    const data = res.data;
    let result: User;
    for(const user of data){
        if(user.id === id){
            return result = {
                id: user.id,
                name: user.name,
                phone: user.phone,
                address: user.address
            };
        }
    }
    return "Invalid id";    
}
