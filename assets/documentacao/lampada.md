## Documentação do Desenvolvimento do Site da Lâmpada 💡

A seguir, apresento uma documentação do desenvolvimento do site da lâmpada, abordando as dificuldades, o processo de programação e as partes-chave do código HTML, CSS e JavaScript.

## Descrição Geral do Site 🌐

O site da lâmpada é uma página da web simples que exibe uma imagem de uma lâmpada 💡 e um interruptor 🔌. O objetivo principal do site é permitir ao usuário clicar no interruptor para ligar e desligar a lâmpada. Além disso, há uma opção para trocar a lâmpada quando ela quebrar 💔. A página também possui um menu de navegação no cabeçalho e informações de contato no rodapé.

## Dificuldades Enfrentadas 😓

Durante o desenvolvimento do site da lâmpada, algumas dificuldades foram encontradas:

1. **Gerenciamento de Imagens**: Uma das principais dificuldades foi o gerenciamento de imagens 🖼️. Garantir que as imagens estivessem corretamente vinculadas através de URLs absolutas ou relativas foi crucial. Qualquer erro nas referências às imagens pode resultar em falhas na exibição das mesmas.

2. **Posicionamento e Estilização**: Posicionar os elementos corretamente na página e aplicar o estilo desejado foi um desafio, especialmente ao posicionar o interruptor e o botão de trocar lâmpada.

3. **Interação com o Usuário**: Implementar a interação do usuário para ligar/desligar a lâmpada e trocá-la quando quebrada exigiu uma compreensão sólida de JavaScript e manipulação do DOM.

## Processo de Programação 🚀

O desenvolvimento do site da lâmpada envolveu as seguintes etapas:

1. **Estrutura HTML**: Começamos criando a estrutura básica do HTML, incluindo os elementos do cabeçalho, corpo e rodapé. Foi importante definir identificadores exclusivos (IDs) para os elementos que seriam manipulados via JavaScript.

2. **Estilização com CSS**: Aplicamos estilos CSS para dar ao site a aparência desejada. Isso incluiu formatação de cores, tamanhos e posicionamento dos elementos.

3. **Interação com JavaScript**: Escrevemos o código JavaScript para gerenciar a interação do usuário. Isso incluiu a detecção de cliques no interruptor, a troca da imagem da lâmpada e a lógica para quebrar a lâmpada após um número específico de cliques.

4. **Testes e Depuração**: Testamos o site em diferentes navegadores para garantir a compatibilidade e corrigimos quaisquer erros ou comportamentos inesperados que surgiram.

## Partes-Chave do Código 💻

### HTML:
- Utilização de tags semânticas como `<header>`, `<main>`, `<article>`, e `<footer>` para melhor estruturação do conteúdo.
- Uso de IDs para identificar os elementos que seriam manipulados pelo JavaScript, como `id="luz"` e `id="interruptor"`.

### CSS:
- Estilização das seções principais da página, como o fundo preto (`background-color: var(--preto);`) e a formatação do cabeçalho e rodapé.
- Posicionamento dos elementos usando `position: absolute` para o interruptor e o botão de trocar lâmpada.

### JavaScript:
- Manipulação do DOM para detectar cliques no interruptor e no botão de trocar lâmpada.
- Alternância da imagem da lâmpada e do interruptor com base nas interações do usuário.
- Contagem de cliques para quebrar a lâmpada após um número específico de tentativas.

## Conclusão 🎉

O desenvolvimento do site da lâmpada foi uma experiência valiosa para aprender sobre HTML, CSS e JavaScript. Enfrentamos desafios relacionados a imagens, estilização e interação do usuário, mas com paciência e resolução de problemas, conseguimos criar uma página interativa e funcional que atende ao seu propósito. O site pode ser usado como um exemplo simples de como construir uma página da web com interatividade básica.