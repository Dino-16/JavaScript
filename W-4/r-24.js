async function getData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await response.json();

        console.log(data);
    } catch(error) {
        console.log(error.message);
    } finally {
        console.log("Data is successfully fetched");
    }
}



async function getBrokenData() {
    try {
        let response2 = await fetch("https://wrong-url.com/data");
        let data2 = await response2.json();

        console.log(data2);
    } catch(error) {
        console.log("Second Fetch:", error.message);
    }
}

    getData();
getBrokenData();