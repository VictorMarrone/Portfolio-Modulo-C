
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Receber  os dados ou enviar para um servidor
    console.log('Formulário enviado com sucesso!');
    console.log(`Nome: ${nome}`);
    console.log(`Email: ${email}`);
    console.log(`Mensagem: ${mensagem}`);
    // Exibir uma mensagem de confirmação
    alert('Obrigado pelo seu contato, ' + nome + '! Sua mensagem foi enviada.');
        
});
