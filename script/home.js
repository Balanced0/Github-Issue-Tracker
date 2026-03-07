const getAllCards = () =>{
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url).then((res) => res.json()).then((data) => {
        totalCards(data.data.length);
    });
}
const totalCards = (totalData) => {
    const totalIssues = document.getElementById("totalIssues");
    totalIssues.innerText = totalData;
}
getAllCards();