function Searching() {
  var myHeaders = new Headers();
  myHeaders.append("X-API-KEY", "712811c41cc5b487be4ba9adea0cc3ca7cbd495c");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    q: "buyerga inputning valuesi qoyiladi",
    gl: "uz",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://google.serper.dev/images", requestOptions)
    .then((result) => result.json())
    .then((result) => {
        console.log(result)
    });
}
