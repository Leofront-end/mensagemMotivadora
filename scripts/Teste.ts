document.addEventListener('DOMContentLoaded', () => {
    let novaMensagem = document.querySelector('button') as HTMLButtonElement;
    let conteudo = document.querySelector('p') as HTMLParagraphElement;

    novaMensagem.addEventListener('click', () => {
        Mensagem(conteudo)
    })
})

async function Mensagem(conteudo: HTMLParagraphElement) {
    let api = await fetch('https://api-random.vercel.app/')
    let resposta = await api.json()
    
    conteudo.textContent = `"${resposta.mensage}"`   
}