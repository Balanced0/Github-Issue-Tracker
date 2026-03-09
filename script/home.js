let allCards = [];
const getAllCards = () =>{
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url).then((res) => res.json()).then((data) => {
        totalCards(data.data.length);
        showAllCards(data.data);
        allCards = data.data;
    });
}

const totalCards = (totalData) => {
    const totalIssues = document.getElementById("totalIssues");
    totalIssues.innerText = totalData;
}
const showAllCards = (cards) =>{
    const idContainer = document.getElementById("cards-container");
    for(let card of cards){
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

        issueCard.addEventListener("click", () => {
            show_Modal(card);
        });

        idContainer.append(issueCard);
    }
}

const allButton = () =>{
    const closedButton = document.getElementById("closedButton");
    const allButton = document.getElementById("allButton");
    const openButton = document.getElementById("openButton");
    closedButton.classList.add("btn-outline");
    allButton.classList.remove("btn-outline");
    openButton.classList.add("btn-outline");
    const idContainer = document.getElementById("cards-container");
    idContainer.innerHTML = "";
    let allCounter = 0;
    for(let card of allCards){
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
        issueCard.addEventListener("click", () => {
            show_Modal(card);
        });
        idContainer.append(issueCard);
        allCounter++;
    }
    const totalIssues = document.getElementById("totalIssues");
    totalIssues.innerText = allCounter;
}

const closedButton = () =>{
    const closedButton = document.getElementById("closedButton");
    const allButton = document.getElementById("allButton");
    const openButton = document.getElementById("openButton");
    closedButton.classList.remove("btn-outline");
    allButton.classList.add("btn-outline");
    openButton.classList.add("btn-outline");


    const idContainer = document.getElementById("cards-container");
    idContainer.innerHTML = "";
    let closedCounter = 0;
    for(let card of allCards){
        if(card.status === "closed"){
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
            issueCard.addEventListener("click", () => {
                show_Modal(card);
            });
            closedCounter++;
        }
    }
    const totalIssues = document.getElementById("totalIssues");
    totalIssues.innerText = closedCounter;
}

const openButton = () =>{
    const closedButton = document.getElementById("closedButton");
    const allButton = document.getElementById("allButton");
    const openButton = document.getElementById("openButton");
    closedButton.classList.add("btn-outline");
    allButton.classList.add("btn-outline");
    openButton.classList.remove("btn-outline");
    const idContainer = document.getElementById("cards-container");
    idContainer.innerHTML = "";
    let openCounter = 0;
    for(let card of allCards){
        if(card.status === "open"){
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
            issueCard.addEventListener("click", () => {
                show_Modal(card);
            });
            openCounter++;
        }
    }
    const totalIssues = document.getElementById("totalIssues");
    totalIssues.innerText = openCounter;
}
const show_Modal = (card) =>{
    const body = document.getElementById("cards-container");
    const temp = document.createElement("div");
    temp.innerHTML = `
        <dialog id="${card.id}" class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="text-2xl font-bold mb-[8px]">${card.title}</h3>
            <div>
              <div class="flex items-center gap-2 mb-[24px]">
                <div class="badge ${(card.status === "open") ? "badge-success" : "badge-primary"} rounded-3xl text-white">
                  ${(card.status === "open") ? "Opened" : "Closed"}
                </div>
                <div class="bg-[#64748B] w-1 h-1 rounded-full"></div>
                <p class="text-[#64748B] text-xs">Opened by ${card.author}</p>
                <div class="bg-[#64748B] w-1 h-1 rounded-full"></div>
                <p class="text-[#64748B] text-xs">22/02/2026</p>
              </div>
              <div class="mb-[24px] flex flex-wrap gap-2">
                <div class="badge badge-soft badge-error"><img src="./assets/BugDroid.png">BUG</div>
                <div class="badge badge-soft badge-warning"><img src="./assets/Lifebuoy.png">HELP WANTED</div>
              </div>
              <p class="text-[#64748B] mb-[24px]">${card.description}</p>
              <div class="flex justify-between bg-[#F8FAFC] rounded-xl p-4">
                <div class="flex-1">
                  <p class="text-[#64748B] mb-1">Assignee:</p>
                  <p class="font-semibold">${card.assignee}</p>
                </div>
                <div class="flex flex-col flex-1 justify-start">
                  <p class="text-[#64748B] mb-1">Priority:</p>
                  <div class="badge badge-error text-white rounded-full">High</div>
                </div>
              </div>
            </div>

            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn btn-primary">Close</button>
              </form>
            </div>
          </div>
        </dialog>
    `;
    body.append(temp);
    const modal = document.getElementById(`${card.id}`);
    modal.showModal();
}
getAllCards();