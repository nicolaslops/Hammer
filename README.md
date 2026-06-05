Markdown
# HAMMER

## Sobre o Projeto

Este projeto consiste em um ambiente interativo de simulação física focado no teste de colisões, peso e gravidade de corpos rígidos dinâmicos. A aplicação foi estruturada utilizando HTML, CSS e o ecossistema gráfico do **p5.js**, trazendo o motor físico **Matter.js** para gerenciar de forma realista o comportamento de diferentes materiais na tela.

Na simulação, o usuário controla uma ferramenta (representada por um retângulo ou martelo) que acompanha a posição do cursor do mouse em tempo real. Ao movimentá-lo pelo canvas, é possível interagir, empurrar e golpear múltiplos elementos independentes (como blocos de ferro, pedra e borracha), testando na prática o impacto de forças físicas baseadas na massa e densidade específicas de cada material.

---

## Funcionalidades

* Controle e movimentação do objeto principal (Hammer) acoplado diretamente às coordenadas do cursor do mouse.
* Mecânica avançada de física 2D para gerenciar a gravidade, aceleração e fricção de objetos soltos na tela.
* Modelagem de corpos dinâmicos com comportamentos de colisão realistas baseados em propriedades de materiais como ferro (`ferro.js`), pedra (`pedra.js`) e borracha (`Rubber.js`).
* Criação de superfícies ou limites estáticos (`Plane.js`) que servem como chão ou anteparo para o repouso dos objetos.
* Atualização contínua do motor físico sincronizado com a taxa de renderização de quadros (frames) do canvas.

---

## Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **p5.js** (e extensões: p5.dom, p5.sound)
* **Matter.js** (Engine de física 2D)

---

## Objetivo

O principal objetivo deste projeto é aprofundar os estudos em programação orientada a objetos (POO) combinada à simulação física. O foco está na criação de classes personalizadas em JavaScript para representar diferentes elementos materiais no ecossistema da `Matter.js` e na aplicação prática do controle cinemático (movendo um corpo rígido através do mouse) interagindo com corpos dinâmicos baseados em massa e gravidade.

---

## Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos como:

* Programação Orientada a Objetos (POO) com JavaScript para a criação e reutilização de corpos físicos modulares.
* Configuração e ajuste de densidade (`density`), restituição/elasticidade (`restitution`) e atrito (`friction`) para simular a diferença física entre ferro, pedra e borracha.
* Atualização da posição de um corpo rígido da Matter.js com base nos inputs analógicos de posição do mouse (`mouseX` e `mouseY`).
* Gerenciamento do ciclo de atualização do motor físico (`Engine.update()`) integrado ao loop contínuo do p5.js.
* Utilização de bibliotecas auxiliares para criação de interfaces e controle multimídia.

---

## Como Executar

1. Clone este repositório:
```bash
git clone [https://github.com/seu-usuario/HAMMER-MINECRAFT.git](https://github.com/seu-usuario/HAMMER-MINECRAFT.git)
```

2. Acesse a pasta do projeto:

```bash
cd HAMMER
```

3. Abra o arquivo index.html em seu navegador de preferência e mova o cursor na tela para interagir com os blocos.

--- 

## Estrutura do Projeto

```text
HAMMER/
│
├── scripts/
│   ├── ferro.js
│   ├── Hammer.js
│   ├── matter.js
│   ├── p5.dom.min.js
│   ├── p5.min.js
│   ├── p5.sound.min.js
│   ├── pedra.js
│   ├── Plane.js
│   ├── Rubber.js
│   └── sketch.js
│
├── style/
│   └── style.css
│
├── index.html
└── README.md
```

--- 

## Licença
Este projeto foi desenvolvido exclusivamente para fins educacionais e de aprendizado.

Desenvolvido como prática de engenharia de software e simulação de física 2D, criando um ambiente interativo com objetos mecânicos controlados por Matter.js e renderizados em p5.js.
