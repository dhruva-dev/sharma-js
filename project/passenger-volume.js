fetch(`http://localhost:3000/ltaodataservice/PV/Bus`)
    .then((response) => response.json())
    .then((result) => {
        const link = result.value?.[0].Link;
        if (link) {
            const a = document.createElement('a');
            a.href = link;
            a.innerText = 'Click on the link to download';
            a.classList.add('link')
            const linkContanier = document.getElementById('link');
            linkContanier.appendChild(a);
        } else {
            const span = document.createElement('div');
            span.innerText = result.fault.faultstring;
            span.classList.add('link')
            const linkContanier = document.getElementById('link');
            linkContanier.appendChild(span);
        }
    })
    .catch((error) => {
        const span = document.createElement('span');
        span.innerText = 'Click on the link to download';
        span.classList.add('link')
        const linkContanier = document.getElementById('link');
        linkContanier.appendChild(a);
    });

