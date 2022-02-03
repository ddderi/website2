//

const btc = document.getElementById('btc')
const eth = document.getElementById('eth')
const bnb = document.getElementById('bnb')
const ada = document.getElementById('ada')
const body = document.getElementById('body')
const newdiv = document.createElement('div')


//Event listener for the 4 choices of crypto that we can display on the website.

btc.addEventListener('click', function(e){
    seek = event.target.textContent
    fetchData()
})

eth.addEventListener('click', function(e){
    seek = event.target.textContent
    fetchData()
})

bnb.addEventListener('click', function(e){
    seek = event.target.textContent.replace(' ', '')
    fetchData()
})

ada.addEventListener('click', function(e){
    seek = event.target.textContent
    fetchData()
})

//function to fetch the cryptocurrency I am looking for.

function fetchData(){
fetch(`https://coingecko.p.rapidapi.com/simple/price?ids=${seek}&vs_currencies=usd`
, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coingecko.p.rapidapi.com",
		"x-rapidapi-key": 'd84f0708afmsh5ca0134fa6807b8p1c4acejsn553f05ea523d'
	}
}
 ) 
.then(resp => resp.json())
.then(json => pushData(json))
.catch(err => {
	console.log(err);
});
}

// function which treats the response/function fetchData and put the data in the DOM

function pushData(bitbit){
    let constt = document.createElement('p')
            constt.innerHTML = seek
            newdiv.append(constt)
    let bitcoinmess = Object.entries(bitbit)
    bitcoinmess.forEach(Tbit => {
        newO = Tbit[1]
        for (let property in newO){
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
            button.addEventListener('click', function(e){
            newdiv.innerHTML = '';
            newdiv.remove()
            })
            
    })
    
}


//https://api.nomics.com/v1