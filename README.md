# vite-typescript

1. Certifique-se de ter o Yarn instalado em seu computador, como mencionado na aula anterior.

2. Abra o terminal e crie um novo projeto Vite com o comando yarn create vite app:

````yaml
yarn create vite app
````

3. Selecione o framework, escolhendo `React`
````yaml
success Installed "create-vite@4.1.0" with binaries:
      - create-vite
      - cva
? Select a framework: » - Use arrow-keys. Return to submit.
    Vanilla
    Vue
>   React
    Preact
    Lit
    Svelte
    Others
````
4. Selecione `Typescript`
````yaml
success Installed "create-vite@4.1.0" with binaries:
      - create-vite
      - cva
√ Select a framework: » React
? Select a variant: » - Use arrow-keys. Return to submit.
    JavaScript
>   TypeScript
    JavaScript + SWC
    TypeScript + SWC
````
5. Acesse a pasta e instale os módulos
````yaml
success Installed "create-vite@4.1.0" with binaries:
      - create-vite
      - cva
√ Select a framework: » React
√ Select a variant: » TypeScript

Scaffolding project in C:\Users\dhieg\Documents\Jobs\DH\vite-typescript\app...

Done. Now run:

  cd app
  yarn
  yarn dev
````
---
### Typescript
- O TypeScript é um superset do JavaScript que adiciona tipagem estática ao JavaScript. Ele foi desenvolvido pela Microsoft e é usado em muitos projetos, incluindo o Angular e o VS Code.

- Com o TypeScript, é possível adicionar tipos a variáveis, parâmetros de função, propriedades de objetos e mais. Isso ajuda a evitar erros comuns no JavaScript, como passar o tipo errado de valor para uma função ou acessar uma propriedade que não existe em um objeto.

- O TypeScript também suporta interfaces, que permitem definir contratos que os objetos devem seguir. As interfaces podem ser usadas para garantir que um objeto tenha as propriedades e métodos corretos, o que é útil para garantir que seu código funcione corretamente com bibliotecas de terceiros.

### Usando Tipos
- Com o TypeScript instalado e configurado, podemos começar a usar tipos em nosso código. Vamos modificar o exemplo de consumo da API do Pokemon para usar tipos.

- Primeiro, vamos definir um tipo Pokemon que representa um Pokémon com nome e imagem:
````tsx
type Pokemon = {
  name: string;
  image: string;
};
````
> Este tipo define que um Pokémon tem uma propriedade name que é uma string e uma propriedade image que também é uma string.

- Agora, vamos usar este tipo no nosso componente App:
````tsx
import { useEffect, useState } from "react";

type Pokemon = {
  name: string;
  image: string;
};

function App() {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((res) => res.json())
      .then((data) => {
        setPokemon({
          name: data.name,
          image: data.sprites.front_default,
        });
      });
  }, []);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
  );
}

export default App;
````

Agora, vamos analisar como usamos os tipos em nosso código:

1. Definimos um tipo Pokemon que tem duas propriedades: name e image. Usamos a palavra-chave type para criar um novo tipo.

2. Criamos um estado pokemon com o tipo Pokemon usando a função useState. Isso garante que o estado pokemon sempre tenha a forma correta de um Pokémon com nome e imagem.

3. No nosso efeito useEffect, obtemos os dados do Pokémon da API e os transformamos em um objeto do tipo Pokemon antes de definir o estado pokemon. Isso garante que estamos definindo um estado pokemon com a forma correta.

4. No nosso componente, usamos o tipo Pokemon para definir o tipo da variável pokemon. Isso garante que a variável pokemon sempre tenha a forma correta de um Pokémon com nome e imagem.

5. Ao renderizar o componente, usamos as propriedades name e image do objeto pokemon para exibir o nome e a imagem do Pokémon.

### Conclusão
> O TypeScript pode ser uma ferramenta poderosa para ajudar a evitar erros em seu código JavaScript. Ao adicionar tipos, você pode ter certeza de que seu código está funcionando corretamente e é mais fácil de entender e manter. Com o TypeScript, você também pode usar interfaces para definir contratos que os objetos devem seguir. Espero que este exemplo ajude a entender como usar o TypeScript em seu projeto React!