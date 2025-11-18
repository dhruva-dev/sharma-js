const params = new URLSearchParams(window.location.search);
const busstopcode = params.get('BusStopCode');
const requestOptions = {
    method: "GET",
};
const busStop = document.getElementById('busstop');
const h3 = document.createElement('h3');
h3.innerText = 'Bus Stop Code: ' + busstopcode;
busStop.appendChild(h3);
const div = document.createElement('div');
fetch(`http://localhost:3000/ltaodataservice/v3/BusArrival?BusStopCode=${busstopcode}`)
    .then((response) => response.json())
    .then((result) => {
        debugger;
        const services = result.Services;
        for (let j = 0; j < services.length; j = j + 1) {
            const service = services[j];
            const h5 = document.createElement('h5');
            h5.innerText = 'Service No: ' + service.ServiceNo;
            div.appendChild(h5);
            const keys = Object.keys(service);
            const table = document.createElement('table');
            const htr = document.createElement('tr');
            const thBusCode = document.createElement('td');
            thBusCode.innerText = 'Bus name';
            htr.appendChild(thBusCode);
            const thArrival = document.createElement('td');
            thArrival.innerText = 'Arrival';
            htr.appendChild(thArrival);
            const thOriginCode = document.createElement('td');
            thOriginCode.innerHTML = 'Origin Code';
            htr.appendChild(thOriginCode);
            const thDestinationCode = document.createElement('td');
            thDestinationCode.innerText = 'Destination code';
            htr.appendChild(thDestinationCode);
            table.appendChild(htr);
            for (let i = 0; i < keys.length; i = i + 1) {
                const busData = service[keys[i]];
                if (busData && busData.OriginCode) {

                    const tr = document.createElement('tr');
                    const tdBusCode = document.createElement('td');
                    tdBusCode.innerText = keys[i];
                    const tdArrival = document.createElement('td');
                    tdArrival.innerText = busData.EstimatedArrival;
                    const tdOriginCode = document.createElement('td');
                    tdOriginCode.innerText = busData.OriginCode;
                    const tdDestinationCode = document.createElement('td');
                    tdDestinationCode.innerText = busData.DestinationCode;
                    tr.appendChild(tdBusCode);
                    tr.appendChild(tdArrival);
                    tr.appendChild(tdOriginCode);
                    tr.appendChild(tdDestinationCode);
                    table.appendChild(tr);
                }
            }
            div.appendChild(table);
        }
        busStop.appendChild(div);
    })
    .catch((error) => console.error(error));