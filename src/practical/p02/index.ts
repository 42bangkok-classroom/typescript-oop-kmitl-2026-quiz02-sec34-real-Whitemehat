import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/users";

type Address = {
  street: string | null;
  suite: string | null;
  city: string | null;
  zipcode: string | null;
  geo: {
    lat: string | null;
    lng: string | null;
  };
};

type User = {
  id: number;
  name: string | null;
  phone: string | null;
  address: Address | null;
};

type NewUser = {
  name?: string;
  username?: string;
  email?: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export async function addUser(newUser: NewUser): Promise<User> {
  const res = await axios.get(API);
  const data = res.data;
  const result: User[] = [];

  let maxId = 0;

  for (const user of data) {
    if (user.id > maxId) {
      maxId = user.id;
      result.push({ 
        id: user.id,
         name: user.name,
          address:
           { street: user.address.street,
             suite: user.address.suite,
              city: user.address.city,
               zipcode: user.address.zipcode,
                geo:{ 
                  lat: user.address.geo.lat,
                   lng: user.address.geo.lng 
                } }, phone: user.phone });
      
    }
  }


  return result;
}
