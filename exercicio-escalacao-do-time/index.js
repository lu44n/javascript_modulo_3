function addPlayer(){
    const playerPosition = document.getElementById('position').value;
    const playerName = document.getElementById('name').value;
    const playerNumber = document.getElementById('number').value;

    const confirmPlayer = confirm('Você confirma a escalação do ' + playerName + ' com a camisa número ' + playerNumber + ' ?')

    if (confirmPlayer){
        const playerList = document.getElementById('players-list')
        const newPlayer = document.createElement('li')
        newPlayer.id = playerNumber
        newPlayer.innerText = `Nome: ${playerName} - Número: ${playerNumber} - Posição: ${playerPosition}`
        playerList.appendChild(newPlayer)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}

function removePlayer(){
    const numberRemove = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById(numberRemove)

    const confirmRemove = confirm('Você confirma a remoção do camisa ' + numberRemove + ' ?')

    if (confirmRemove){
        const playerList = document.getElementById('players-list')
        playerList.removeChild(playerToRemove)

        document.getElementById('numberToRemove').value = ''
    }
}