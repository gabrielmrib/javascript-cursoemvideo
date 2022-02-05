let n = []


function adicionar() {
    let num = document.getElementById("txtnum")
    let list = document.getElementById("list")
    if (num.value.length == 0 || !(Number(num.value) <= 100 && Number(num.value) >= 1)) {
        window.alert("Por favor digite um número entre 1 e 100!")

    } else {

        n.push(Number(num.value))
        let item = document.createElement("option")
        console.log(n)
        item.text = num.value
        list.appendChild(item)

    }
    num.value = ""
}



function finalizar(){
    let resposta = document.getElementById("resposta")
    n.sort((a,b) => a - b)
    let menor = n[0]
    let maior = n[n.length - 1]
    let soma = 0
    let cadastrados = n.length
    

    for (let i = 0; i < n.length; i++) {
        soma += n[i]      
    }
    let media = (soma / n.length)  
    resposta.innerHTML = ` Ao todo temos ${cadastrados} números cadastrados
    </br>o menor valor informado foi o ${menor} </br>
    O maior valor informado foi ${maior}</br>
    somando todos os valores, temos: ${soma}</br>
    A média dos valores digitados é: ${media}
    `
}