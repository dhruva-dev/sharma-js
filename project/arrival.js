const params = new URLSearchParams(window.location.search);
const busstopcode = params.get('BusStopCode');
if (busstopcode) {
    let loading = 0;
    const actionBtnSection = document.createElement('div');
    actionBtnSection.classList.add('action_btn_section');
    const refreshBtn = document.createElement('button');
    refreshBtn.classList.add('refresh_btn');
    refreshBtn.innerText = 'Refresh';
    refreshBtn.addEventListener('click', function () {
        loadBusStatus();
    });

    actionBtnSection.appendChild(refreshBtn);

    loadBusStatus();
    function loadBusStatus() {
        loading = loading + 1;
        setLoading();
        fetch(`http://localhost:3000/ltaodataservice/v3/BusArrival?BusStopCode=${busstopcode}`)
            .then((response) => response.json())
            .then((result) => {
                const busStopData = document.getElementById('busstop');
                const busStopCard = document.createElement('div');
                busStopCard.classList.add('busstop_card');
                const busStopInfo = document.createElement('div');
                busStopInfo.classList.add('busstop_info');
                const address = document.createElement('div');
                address.classList.add('address');
                address.innerText = 'Bus Stop: ' + result.BusStopCode;
                const favIcon = document.createElement('span');
                favIcon.classList.add('material-symbols-outlined');
                favIcon.innerText = 'favorite';
                let bookmarks = [];
                try {
                    bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
                } catch (e) {
                    bookmarks = [];
                }

                for (let i = 0; i < bookmarks.length; i = i + 1) {
                    if (bookmarks[i] === busstopcode) {
                        favIcon.style.color = 'pink';
                        break;
                    }
                }
                favIcon.addEventListener('click', function () {
                    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
                    if (bookmarks === null) {
                        bookmarks = [];
                    }
                    let bookmarkExist = false;
                    for (let i = 0; i < bookmarks.length; i = i + 1) {
                        if (bookmarks[i] === busstopcode) {
                            bookmarkExist = true;
                            bookmarks.splice(i, 1);
                            favIcon.style.color = 'black';
                            break;
                        }
                    }
                    if (!bookmarkExist) {
                        bookmarks.push(busstopcode);
                        favIcon.style.color = 'pink';
                    }
                    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                })
                busStopInfo.appendChild(address);
                busStopInfo.appendChild(favIcon);
                busStopCard.appendChild(busStopInfo);
                busStopData.innerHTML = "";
                busStopData.appendChild(busStopCard);

                const busStopDetails = document.createElement('div');
                address.classList.add('busstop_bus_details');

                const table = document.createElement('table');
                const headingRow = document.createElement('tr');
                const busNoColumn = document.createElement('td');
                busNoColumn.innerText = 'Bus no.'
                const nextBusColumn = document.createElement('td');
                nextBusColumn.innerText = 'Next';
                const subSeqColumn = document.createElement('td');
                subSeqColumn.innerText = 'Subseq.'
                headingRow.appendChild(busNoColumn);
                headingRow.appendChild(nextBusColumn);
                headingRow.appendChild(subSeqColumn);
                table.appendChild(headingRow);
                busStopDetails.appendChild(table);
                busStopCard.appendChild(busStopDetails);
                busStopCard.appendChild(actionBtnSection);

                const services = result.Services;
                for (let i = 0; i < services.length; i = i + 1) {
                    const cuurentDateInMilisec = (new Date()).getTime();
                    const service = services[i];
                    const tr = document.createElement('tr');
                    const busNotd = document.createElement('td');
                    busNotd.innerText = service.ServiceNo;
                    const nexttd = document.createElement('td');
                    if (service.NextBus.EstimatedArrival) {
                        const nextbusDateInMilliSec = new Date(service.NextBus.EstimatedArrival);
                        const diff = nextbusDateInMilliSec - cuurentDateInMilisec;
                        if (diff < 60000) {
                            nexttd.innerText = 'Arriving';
                        } else {
                            const minutes = diff / 60000;
                            nexttd.innerText = Math.floor(minutes) + 'min';
                        }
                    } else {
                        nexttd.innerText = '-';
                    }
                    const subseqtd = document.createElement('td');
                    if (service.NextBus2.EstimatedArrival) {
                        const subseqbusDateInMilliSec = new Date(service.NextBus2.EstimatedArrival);
                        const diff1 = subseqbusDateInMilliSec - cuurentDateInMilisec;
                        if (diff1 < 60000) {
                            subseqtd.innerText = 'Arriving';
                        } else {
                            const minutes1 = diff1 / 60000;
                            subseqtd.innerText = Math.floor(minutes1) + 'min';
                        }
                    } else {
                        subseqtd.innerText = '-';
                    }
                    tr.appendChild(busNotd);
                    tr.appendChild(nexttd);
                    tr.appendChild(subseqtd);
                    table.appendChild(tr);
                }
                loading = loading - 1;
                setLoading();
            })
            .catch((error) => {
                loading = loading - 1;
                setLoading();
                alert('Unable to fetch bus status');
                console.error(error)
            });
    }

    function setLoading() {
    if (loading > 0) {
        refreshBtn.innerText = '...loading';
    } else {
        refreshBtn.innerText = 'Refresh';
    }
}
}

