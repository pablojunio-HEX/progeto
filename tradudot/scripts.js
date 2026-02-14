
let idioma = document.querySelector(".idioma")
let inputTexto = document.querySelector(".input-text")
let traducao = document.querySelector(".traducao")
async function traduzir() {


    let endereco = "https://api.mymemory.translated.net/get?q="
        + inputTexto.value
        + "&langpair=pt-BR|"
        + idioma.value

    let resposta = await fetch(endereco)
    let dados = await resposta.json()
    console.log(dados)
    traducao.innerHTML = dados.responseData.translatedText

}
function ouvirvoz() {
    let voz = window.webkitSpeechRecognition
    let reconhecimentoVoz = new voz()
    reconhecimentoVoz.lang = "pt-BR"
    reconhecimentoVoz.onresult = (evento) => {
        let textotranscri = evento.results[0][0].transcript
        
        inputTexto.textContent = textotranscri
        traduzir()

    }
    reconhecimentoVoz.start()



}