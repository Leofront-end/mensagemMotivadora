document.addEventListener('DOMContentLoaded', () => {
    let novaMensagem = document.querySelector('button');
    let conteudo = document.querySelector('p');
    novaMensagem.addEventListener('click', () => {
        Mensagem(conteudo);
    });
});
async function Mensagem(conteudo) {
    let api = await fetch('https://api-random.vercel.app/');
    let resposta = await api.json();
    conteudo.textContent = `"${resposta.mensage}"`;
}
export {};
