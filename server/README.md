## Ecoleta
### 1 - React.

## O que é **React**?
- Biblioteca para construção de interfaces.
- Utilizado para construção de **Single-Page Applications**.
- Podemos chamar de framework?
- Tudo fica dentro do JavaScript.
- React, ReactJS, React Native.

## Exemplo de um **componente React**.
- `Component Button`.
```jsx
import React from 'react';

import './button.css';
import icon from './button.png';

function Button(){
    return (
        <button>
            <img src={icon}/>
        </button>
    );
}
```

## Vantagens
- Organização do código.
- Componentização.
- Divisão de responsabilidades.
  - Front-end: Interface.
  - Back-end: Regras de negócio.
- Uma API, múltiplos clientes.




## Projeto.

- Figma - 

## Ambiente de desenvolvimento
- Node - https://nodejs.org/en/
- Visual Studio Code - https://code.visualstudio.com/


- **.**..

```
npm init -y
```

**Dependências**
- **Express**
- `node_modules`, `packege-lock.json`
```
npm install express
```
- **@types**
```
npm install @types/express -D
```
- **Ts-node**
```
npm install ts-node -D
```

- Executar o pacote
```
npx ts-node src/server.ts
```

- Criação do arquivo `tsconfig.json`
```
npx tsc --init
```

- **JSON Viewer** (Google Chrome) `Extenção`.
- Site - https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=pt-BR

- Observa atualizações no projeto, não precisa **re-loader**.

```
npm install ts-node-dev -D
```

- Acrescentar código no **scripts** do arquivo `package.json`
```json
"scripts": {
    "dev": "ts-node-dev src/server.ts"
  },
``` 
**Roda o Projeto**
```
npm run dev
```


## Criando o projeto React.
```
npx create-react-app web --template=typescript
```





























##



##

- By:  **Daniel Oliveira**

  - `Instagram` - https://www.instagram.com/danieloliv3/
  - `Facebook` - https://web.facebook.com/danielsapup3/
  - `Twitter` - https://twitter.com/danielsapup3/
  - `Linkedin` - https://www.linkedin.com/in/danielsapup3/

  ##
