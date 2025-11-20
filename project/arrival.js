const params = new URLSearchParams(window.location.search);
const busstopcode = params.get('BusStopCode');
const requestOptions = {
    method: "GET",
};

fetch(`http://localhost:3000/ltaodataservice/v3/BusArrival?BusStopCode=${busstopcode}`)
    .then((response) => response.json())
    .then((result) => {
        if (!busstopcode) {
            return;
        }
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
        busStopInfo.appendChild(address);
        busStopInfo.appendChild(favIcon);
        busStopCard.appendChild(busStopInfo);
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
                if (diff < 1) {
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
                if (diff1 < 1) {
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

    })
    .catch((error) => console.error(error));


result = {
    "BusStopCode": "55051",
    "Services": [
        {
            "ServiceNo": "163",
            "NextBus": {
                "EstimatedArrival": "2025-11-20T22:11:08+08:00",
            },
            "NextBus2": {
                "EstimatedArrival": "2025-11-20T22:22:48+08:00",
            },
        },
        {
            "ServiceNo": "70M",
            "NextBus": {
                "EstimatedArrival": "2025-11-20T22:09:57+08:00",
            },
            "NextBus2": {
                "EstimatedArrival": "",
            }
        }
    ]
}

// <div class="busstop_card">
//     <div class="busstop_info">
//         <div class="address">Electronics</div>
//
//             <span class="material-symbols-outlined">
//                 favorite
//             </span>
//     </div>
//     <div class="busstop_bus_details">
//         <table>
//             <tr>
//                 <th>Company</th>
//                 <th>Contact</th>
//                 <th>Country</th>
//             </tr>
//             <tr>
//                 <td>Alfreds Futterkiste</td>
//                 <td>Maria Anders</td>
//                 <td>Germany</td>
//             </tr>
//             <tr>
//                 <td>Centro comercial Moctezuma</td>
//                 <td>Francisco Chang</td>
//                 <td>Mexico</td>
//             </tr>
//             <tr>
//                 <td>Ernst Handel</td>
//                 <td>Roland Mendel</td>
//                 <td>Austria</td>
//             </tr>
//             <tr>
//                 <td>Island Trading</td>
//                 <td>Helen Bennett</td>
//                 <td>UK</td>
//             </tr>
//             <tr>
//                 <td>Laughing Bacchus Winecellars</td>
//                 <td>Yoshi Tannamuri</td>
//                 <td>Canada</td>
//             </tr>
//             <tr>
//                 <td>Magazzini Alimentari Riuniti</td>
//                 <td>Giovanni Rovelli</td>
//                 <td>Italy</td>
//             </tr>
//         </table>
//     </div>
// </div>