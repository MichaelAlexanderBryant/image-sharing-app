function HomePage() {
    let apiUrl = 'http://127.0.0.1:8000/api/v1/?format=api'
    let apiJson;
    async function retreiveData() {
        let apiData = await fetch(apiUrl);
        // apiJson = await apiData.json();
        console.log(apiJson);
    }

    retreiveData();

    return (
        <div></div>
    )
}

export default HomePage;