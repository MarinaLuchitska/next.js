const BaseURL = 'https://jsonplaceholder.typicode.com';


export const  getAll =async <T>(endpoint:string): Promise<T> =>{
    const newar = await fetch(`${BaseURL}${endpoint}`).then(res=> res.json());
    return newar;
}
