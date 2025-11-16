const myHeaders = new Headers();
myHeaders.append("AccountKey", "gDYp8AZuSjCCIs1814cPNg==");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://datamall2.mytransport.sg/ltaodataservice/v3/BusArrival?BusStopCode=64241&ServiceNo=87", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));