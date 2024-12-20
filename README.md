# API, REST e RESTful

## O que é uma API?

API (Application Programming Interface) é uma interface que permite a comunicação entre duas aplicações diferentes. Basicamente, é um conjunto de rotinas que permite utilizar as funcionalidades de outra aplicação.  

- Responsável por estabelecer a comunicação entre diferentes serviços.  
- Serve como o "meio de campo" entre as tecnologias.  
- Funciona como um intermediário para troca de informações.  

### Exemplo:
Cliente (Client) → Garçom (API) → Cozinha (Servidor)

---

## O que é REST?

REST (Representational State Transfer) é um estilo arquitetural usado para projetar serviços web que se comunicam por meio de protocolos HTTP.  

- Permite a transferência de dados de maneira simbólica e didática.  
- Define algumas regras para essas transferências de dados.  
- **Resources** são entidades ou objetos que representam informações, como "usuários", "produtos", etc.

---

## O que é RESTful?

RESTful descreve um sistema ou API que implementa os princípios e padrões do REST.

### Necessidades (constraints) para ser RESTful:

1. **Client-server**: 
   - O cliente e o servidor devem ser separados. 
   - O cliente faz requisições e o servidor responde com os dados ou realiza as ações necessárias.

2. **Stateless**: 
   - Cada requisição do cliente ao servidor deve conter todas as informações necessárias para que o servidor entenda e responda (RESPONSE) à requisição (REQUEST).
   - O servidor não armazena informações de sessão entre as requisições.
   - Exemplo: A sessão do usuário deverá ser enviada em todas as requisições para saber se aquele usuário está autenticado e apto a usar os serviços. O servidor não "lembra" que o cliente foi autenticado na requisição anterior. Pode-se usar tokens para essas comunicações.

3. **Cacheable**: 
   - As respostas devem indicar se podem ou não ser armazenadas em cache para melhorar a eficiência.

4. **Uniform Interface**: 
   - A comunicação entre cliente e servidor deve seguir padrões bem definidos, como o uso de métodos HTTP (GET, POST, PUT, DELETE, etc.) e URLs para identificar recursos.

5. **Layers**: 
   - Um sistema REST pode ser composto por camadas, como servidores proxy, balanceadores de carga, etc., que são transparentes para o cliente.

6. **Code on Demand** : 
   - Permite a execução de código no cliente (como scripts).

### Boas práticas

- Utilizar verbos Http para nossas requisições.
-  Utilizar plural ou singular na criação dos endpoints não importa
apenas usar um padrão.
- Não deixar barra no final do endpoint
- Nunca deixar o clinte sem resposta

### Verbos Http

- GET -> recebe dados de um resource
- POST -> envia dados ou informações para serem processados por um resource
- PUT ->  atualiza os dados em um resource
- DELETE -> deleta um resource
  
### Status das respostas 

- 1xx: informação
- 2xx: sucesso
  - 200: OK
  - 201: CREATED
  - 204: Não tem conteúdo PUT POST DELETE
- 3xx: Redirection
- 4xx: Client Error
    - 400: Bad Request
    - 404: Not Found!
- 5xx: Server Error
  500: Internal Server Error