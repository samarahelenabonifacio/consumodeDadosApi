window.onload = function(){

    const dolar = document.querySelector("#dolar");

    const euro = document.querySelector("#euro");

    const bit = document.querySelector("#bit");

    dolar.addEventListener('click', function(){
        const opcoes = {
            method:'GET',
            mode:'cors',
            cache:'default'
        }

        fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL`, opcoes)
        .then(
            response => { response.json()
            .then(data => {
                    document.querySelector("#com").textContent = data['USDBRL']['bid'];
                    document.querySelector("#ven").textContent = data['USDBRL']['ask'];
                    document.querySelector("#var").textContent = data['USDBRL']['varBid'];
                    document.querySelector("#max").textContent = data['USDBRL']['high'];
                    document.querySelector("#min").textContent = data['USDBRL']['low'];
                })
            }
        )
    });

    euro.addEventListener('click', function(){
        const opcoes = {
            method:'GET',
            mode:'cors',
            cache:'default'
        }

        fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL`, opcoes)
        .then(
            response => { response.json()
            .then(data => {
                    document.querySelector("#com").textContent = data['EURBRL']['bid'];
                    document.querySelector("#ven").textContent = data['EURBRL']['ask'];
                    document.querySelector("#var").textContent = data['EURBRL']['varBid'];
                    document.querySelector("#max").textContent = data['EURBRL']['high'];
                    document.querySelector("#min").textContent = data['EURBRL']['low'];
                })
            }
        )
    });

    bit.addEventListener('click',function(){
        const opcoes = {
            method:'GET',
            mode:'cors',
            cache:'default'
        }

        fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL`, opcoes)
        .then(
            response => { response.json()
            .then(data => {
                    document.querySelector("#com").textContent = data['BTCBRL']['bid'];
                    document.querySelector("#ven").textContent = data['BTCBRL']['ask'];
                    document.querySelector("#var").textContent = data['BTCBRL']['varBid'];
                    document.querySelector("#max").textContent = data['BTCBRL']['high'];
                    document.querySelector("#min").textContent = data['BTCBRL']['low'];
                })
            }
        )
    });
}