## Como configurar
1. Instalar dependências necessárias:
  - [node](https://nodejs.org/en/download/)
  - [yarn](https://yarnpkg.com/lang/en/docs/install/)
2. Crie um banco de dados postgresql e configure suas credenciais no arquivo ormconfig.json
3. Execute `yarn` para instalar as bibliotecas necessárias
4. Execute as migrations do typeorm: `yarn typeorm migration:run`

## Como executar
1. Como dev:
  - Altere o `ormconfig.json` para os arquivos na pasta `src`
  - Rode `yarn dev:start`
2. Como prod:
  - Altere o `ormconfig.json` para os arquivos na pasta `dist`
  - Rode `yarn build`
  - Rode `yarn prod:start`
  
  
## Rotas
### `GET /companies`
  - Mostra todas as companies

### `GET /companies/:id`
  - Mostra 1(uma) company

### `POST /companies`
  - Criar uma comanie
  - Body exemple: 
  ```json
  {
	"name": "Supermercado teste",
	"description": "Supermercado de varejo",
	"img_url": "http://imagem.com/img.png",
	"lat": -0.01303212,
	"long": -0.1231312
  }
  ```
  
### `PUT /companies/:id`
  - Atualiza uma company
  - Body exemple: 
  ```json
  {
	"name": "Supermercado teste",
	"description": "Supermercado de varejo",
	"img_url": "http://imagem.com/img.png",
	"lat": -0.01303212,
	"long": -0.1231312
  }
  ```
  
### `DELETE /companies/:id`
  - Deleta uma company
  
  
### `GET /products`
  - Mostra todos os produtos
  - query params(filtro):
    - q = pesquisa por nome
    - have_gluten = boolean
    - have_lactose = boolean
    - is_vegan = boolean
    - is_ecologic = boolean  

### `POST /products`
  - Cria um product
  - Body example:
  ```json
  {
	"name": "Feijão",
	"description": "Arroz gostoso",
	"img_url": "google.com",
	"is_vegan": true,
	"is_ecologic": true,
	"have_lactose": true,
	"have_gluten":true,
  "bar_code": "1112"
  }
  ```
  
 ### `PUT /products/:id`
  - Atualiza product
  - Body example:
  ```json
  {
	"name": "Feijão",
	"description": "Arroz gostoso",
	"img_url": "google.com",
	"is_vegan": true,
	"is_ecologic": true,
	"have_lactose": true,
	"have_gluten":true,
  "bar_code": "1112"
  }
  ```
 
 ### `DELETE /products/:id`
  - Deleta product
  
