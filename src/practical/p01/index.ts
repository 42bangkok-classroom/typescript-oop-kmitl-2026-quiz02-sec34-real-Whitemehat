import axios from "axios"

const API = "https://jsonplaceholder.typicode.com/users"

type Result = {
    id: number,
    name: string,
    phone: string,
    address: {} | null
}

export async function getPostalAddress() {
    let result: Result[] = [];
    const res = await axios.get(API);
    const data = res.data
    for(const user of data){
        result.push({
                id: user.id,
                name: user.name,
                phone: user.phone,
                address: user.address ?? null
            });
    }
    return result;
}
