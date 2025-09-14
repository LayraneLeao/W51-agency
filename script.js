// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Validação do formulário
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Verificar se pelo menos um serviço foi selecionado
    const servicosCheckboxes = document.querySelectorAll('#servicos-pai input[type="checkbox"]');
    const algumServicoSelecionado = Array.from(servicosCheckboxes).some(checkbox => checkbox.checked);
    
    if (!algumServicoSelecionado) {
        alert('Por favor, selecione pelo menos um serviço em que você investe.');
        return;
    }
    
    // Simular envio do formulário
    alert('Formulário enviado com sucesso! Em breve você receberá seu diagnóstico gratuito.');
});

// Efeito de animação ao rolar a página
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação a elementos específicos
document.querySelectorAll('.listas-servicos li, .listas-beneficios li').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

function verMais() {
    let hiddenCards = document.querySelectorAll('.card-hidden');

    hiddenCards.forEach(card => {
        card.classList.remove('card-hidden');
        card.classList.add('card'); // troca para "card"
    });

    // Ocultar o botão "ver mais" após revelar os cards
    document.querySelector('button[onclick="verMais()"]').style.display = 'none';
}