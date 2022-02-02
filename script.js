const btc = document.getElementById('btc')
const body = document.getElementById('body')
const newdiv = document.createElement('div')


btc.addEventListener('click', function(e){
    fetchBTC()
})


function fetchBTC(){

fetch("https://coingecko.p.rapidapi.com/simple/price?ids=bitcoin&vs_currencies=usd&include_last_updated_at=false&include_market_cap=true&include_24hr_change=true&include_24hr_vol=false", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coingecko.p.rapidapi.com",
		"x-rapidapi-key": "d84f0708afmsh5ca0134fa6807b8p1c4acejsn553f05ea523d"
	}
})
.then(resp => resp.json())
.then(json => pushData(json))
.catch(err => {
	console.log(err);
});
}

function pushData(bitbit){
    let constt = document.createElement('p')
            constt.innerHTML = btc.innerText
            newdiv.append(constt)
    let bitcoinmess = Object.entries(bitbit)
    bitcoinmess.forEach(Tbit => {
        newO = Tbit[1]
        for (let property in newO){
                //console.log(`${property}: ${newO[property]}`);
                
                const ulparent = document.createElement('ul')
                let li = document.createElement('li')
                
                li.innerHTML = `${property}: ${newO[property]}`;
                ulparent.append(li)
                newdiv.append(ulparent)
                body.append(newdiv)
            }
            newdiv.classList = 'newbox'
            newdiv.id = 'newdiv'
            button = document.createElement('button')
            newdiv.append(button)
            button.innerHTML = 'Back to the main menu'
            button.classList = 'button'
            //newB = document.getElementById('newdiv')
            button.addEventListener('click', function(e){
                
                newdiv.innerHTML = '';
                newdiv.remove()
                
            })
            
    })
    
}


// document.getElementById('newdiv').addEventListener('click', function(e){
//     console.log(e)
// })




//https://api.nomics.com/v1