let hasil, fahrenheit;
document.getElementById("penjumlahan").onclick = function(){
    function Converter(F){
        let A = 5/9
        let B = F-32
        let C = A * (B)
        return C
    }

    fahrenheit = document.getElementById("fahrenheit").value;
    

    hasil = parseInt(Converter(fahrenheit));
    
    document.getElementById("hasil").textContent = `Kalau dalam Celcius : ${hasil}`;
}