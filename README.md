# 🌐 Site W51 Agency

Este repositório contém o **site institucional da W51 Agency**, uma agência de marketing digital.  
O projeto apresenta os serviços da empresa, cases de clientes e disponibiliza um formulário para solicitar um **diagnóstico gratuito de marketing digital**.

> Visualize o site [aqui!]("https://w51-agency.netlify.app/")


## Sobre o projeto
O site foi desenvolvido como uma landing page completa com seções de:
- Chamada principal (**CTA**) para diagnóstico gratuito  
- Clientes atendidos  
- Explicação sobre o diagnóstico e como funciona  
- Benefícios do diagnóstico  
- Formulário de coleta de dados  
- Listagem de serviços oferecidos  
- Benefícios e diferenciais  
- Parceiros oficiais (Google, Meta, RD Station etc.)  
- Rodapé com informações institucionais  



## ⚠️ Observação importante
🚧 **O site ainda não é totalmente responsivo.**  
Atualmente, ele funciona bem em **desktop**, mas precisa de ajustes adicionais para telas menores (tablets e smartphones).  



## Estrutura do Projeto
```
├── index.html # Estrutura principal do site
├── style.css # Estilos (cores, layout, tipografia)
├── script.js # Interações JS (scroll suave, validações, animações, "ver mais")
├── img/ # Logos, ícones e imagens utilizadas
└── README.md # Documentação do projeto
```


## Tecnologias Utilizadas
- **HTML5** – marcação semântica  
- **CSS3** – estilos e layout (Work Sans como fonte principal)  
- **JavaScript** – interações (scroll suave, animações de entrada, validação do formulário)  
- **Google Fonts** – ícones e tipografia  



## Funcionalidades
- **Scroll suave** para navegação entre seções  
- **Formulário de diagnóstico** com validação (exige seleção de pelo menos um serviço)  
- **Efeito de revelação** em listas e cards ao rolar a página  
- **Botão "ver mais"** para expandir cards de benefícios escondidos  
- Estrutura de **seções institucionais completas**  



## Como rodar o projeto localmente
1. Clone este repositório:
   No **Git Bash** rode:
```
   git clone https://github.com/seu-usuario/site-w51.git
```

2. Acesse a pasta do projeto:
```
cd site-w51
```
3. Abra o arquivo `index.html` no navegador.


## Melhorias futuras
- Ajustar a responsividade para diferentes tamanhos de tela.
- Melhorar a acessibilidade (labels, contraste, ARIA attributes).
- Integrar o formulário a um backend real com PHP.