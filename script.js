var sisalto = document.getElementById("sisalto");

xml = new XMLHttpRequest();

xml.onreadystatechange = function() {
    if(xml.readyState == 4 && xml.status == 200) {

var data = JSON.parse(this.responseText);

for(var i = 0; i < data.length; i++) {

sisalto.innerHTML += data[i];

}

    }
};

xml.open("GET", "https://localhost:3000/api/osoitteet");
xml.send(null);