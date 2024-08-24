//example
function identity<T>(arg: T): T {
    return arg
}
let output = identity<string>('HELLO')

//example
function merge<T, U>(arg1: T, arg2: U): [U] {
    return [arg2]
}

merge('utsav', { name: "utsav" })



//3.example 
function arrayHandler<T>(arg: T): T {
    return arg
}
let number1 = [1, 2, 3, 4, 5]
arrayHandler(number1)


//example
async function fetchHandler<T>(url: string): Promise<T | null> {
    let res = await fetch(url)
    let data: T = await res.json()
    return data
}
type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}
const url: string = 'https://jsonplaceholder.typicode.com/posts'
fetchHandler<Post[]>(url).then((item) => {
    if (item) {
        console.log(item)
    }
})
