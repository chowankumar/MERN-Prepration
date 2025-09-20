function fetcData (url,callback){
       fetch(url)
       .then(response => response.json())
       .then(data => callback(data))
       .catch(err => console.log("error in fetching data",err))

}

function handleData (data){
           console.log('procced data :: ', data)
}
function main(){
    const url1 = 'https://jsonplaceholder.typicode.com/posts/1'
    const url2 = 'https://jsonplaceholder.typicode.com/posts/2'

    fetcData(url1,handleData)
    fetcData(url2,handleData)



}
main()