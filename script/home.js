const getAllCards = () =>{
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url).then((res) => res.json()).then((data) => {
        totalCards(data.data.length);
        showAllCards(data.data);
    });
}
const totalCards = (totalData) => {
    const totalIssues = document.getElementById("totalIssues");
    totalIssues.innerText = totalData;
}
const showAllCards = (cards) =>{
    const idContainer = document.getElementById("cards-container");
    for(let card of cards){
        /**
         * "id": 1,
        "title": "Fix navigation menu on mobile devices",
        "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
        "status": "open",
        "labels": [
        "bug",
        "help wanted"
        ],
        "priority": "high",
        "author": "john_doe",
        "assignee": "jane_smith",
        "createdAt": "2024-01-15T10:30:00Z",
        "updatedAt": "2024-01-15T10:30:00Z"
         */
        const fullDate = card.createdAt.split("T")[0];
        const day = fullDate.split("-")[2];
        const month = fullDate.split("-")[1];
        const year = fullDate.split("-")[0];
        let cardLabels = ``;
        for(let label of card.labels){
            if(label === "bug"){
                cardLabels = cardLabels + `<div class="badge badge-soft badge-error"><img src="./assets/BugDroid.png">BUG</div>`;
            }
            else if(label === "help wanted"){
                cardLabels = cardLabels + `<div class="badge badge-soft badge-warning"><img src="./assets/Lifebuoy.png">HELP WANTED</div>`;
            }
            else if(label === "enhancement"){
                cardLabels = cardLabels + `<div class="badge badge-soft badge-success"><img src="./assets/Sparkle.png">ENHANCEMENT</div>`;
            }
            else if(label === "good first issue"){
                cardLabels = cardLabels + `<div class="badge badge-soft badge-success"><img src="./assets/Sparkle.png">GOOD FIRST ISSUE</div>`;
            }
            else if(label === "documentation"){
                cardLabels = cardLabels + `<div class="badge badge-soft badge-info">DOCUMENTATION</div>`;
            }
        }
        let priorityBadge;
        if(card.priority === "high"){
            priorityBadge = "<div class='badge badge-soft badge-error'>HIGH</div>"
        }
        else if(card.priority === "medium"){
            priorityBadge = "<div class='badge badge-soft badge-warning'>MEDIUM</div>"
        }
        else{
            priorityBadge = "<div class='badge badge-soft badge-base-300 text-[#9CA3AF]'>LOW</div>"
        }
        const issueCard = document.createElement("div");
        issueCard.innerHTML = `
            <div class="card bg-base-100 shadow-sm h-full flex flex-col border-t-4 ${card.status === "open"? "border-t-[#00A96E]" : "border-t-[#4A00FF]"}">
                <div class="card-body flex-grow">
                    <div class="flex justify-between">
                        <img src="${card.status === "open"? "./assets/Open-Status.png" : "./assets/Closed-Status.png"}"/>
                        ${priorityBadge}
                    </div>
                    <h4 class="text-sm font-semibold">
                    ${card.title}
                    </h4>
                    <p class="text-[#64748B] text-xs mb-[12px]">
                    ${card.description}
                    </p>
                    <div class="flex flex-wrap gap-1">
                        ${cardLabels}
                    </div>
                </div>
                <hr class="text-[#E4E4E7]" />
                <div class="card-body">
                    <p class=" text-[#64748B] text-xs">
                    #${card.id} by ${card.author}
                    </p>
                    <p class=" text-[#64748B] text-xs">
                    ${month}/${day}/${year}
                    </p>
                </div>
            </div>
        `;
        idContainer.append(issueCard);
    }
}
getAllCards();