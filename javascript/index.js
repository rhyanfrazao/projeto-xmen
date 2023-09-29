// Código para fazer a transição de personagem selecionado

// Passo 1: Pegar os personagens no JS para poder verificar quando o usuário passar o mouse por cima de um deles

const personagens = document.querySelectorAll('.personagem');  
console.log(personagens);   //peguei todas as lis pela classe

// Passo 2: Adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

// Colocar uma "escuta" para pegar o momento que passar o mouse
// O objetivo é add a palavra 'selecionado' à classe .personagem para poder editar a alteração depois (muda personagem e texto)

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
               // Passo 3: Verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele

                //Vamos encontrar se existe alguém com a classe '.selecionado'

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
       
        //Passo 2:
        personagem.classList.add('selecionado');

        // Passo 4: Pegar o elemento do personagem grande para trocar as informações dele

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // Passo 5: Alterar a imagem do personagem grande

        const idPersonagem = personagem.attributes.id.value //Pegando o id ao passar o mouse e salvando na variável
        imagemPersonagemGrande.src = `imagens/card-${idPersonagem}.png`;
        // Ele pega o value do Id (nome) e joga pra trocar a foto, por isso deve-se ter cuidado na nomeação das imagens e id

        // Passo 6: Alterar o nome do personagem grande

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // Passo 7: Alterar a descrição do personagem

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})




