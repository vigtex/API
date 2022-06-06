# API de Games
Esta API é um exercício de criação de API, usa um banco de dados "falso"
## Endpoints
### GET /games
Endpoint responsável pelo retorno de todos os games cadastrados
#### Parâmetros
Nenhum
#### Respostas
##### Ok! 200
Caso essa resposta aconteça, os games serão listados

Exemplo de resposta:

```
[
    {
        "id": 23,
        "title": "Call of Duty MW",
        "year": 2019,
        "price": 60
    },
    {
        "id": 47,
        "title": "AC Creed Rogue",
        "year": 2016,
        "price": 85
    },
    {
        "id": 22,
        "title": "AC Creed Freedom Cry",
        "year": 2015,
        "price": 81
    },
    {
        "id": 95,
        "title": "Arkham Knight",
        "year": 2018,
        "price": 90
    },
    {
        "id": 18,
        "title": "Streets of Rage 4",
        "year": 2020,
        "price": 120
    },
    {
        "id": 3,
        "title": "GTA V",
        "year": 2013,
        "price": 103
    },
    {
        "id": 87,
        "title": "GTA Vice City",
        "year": 208,
        "price": 141
    }
]
```
##### Falha na autenticação! 401
Caso essa resposta aconteça, significa alguma falha durante o processo de autenticação da requisição.
Motivos: token inválido/expirado

Exemplo de resposta:

```
{
    "err": "Token Inválido!!"
}
```
### POST /auth
Endpoint responsável pelo processo de login
#### Parâmetros
email: e-mail do usuário cadastrado no sistema
password: password correto referente ao e-mail em questão
```
{
"email": "v@v.com",
"password": "v"
}
```
#### Respostas
##### Ok! 200
Caso essa resposta aconteça, um token JWT válido será gerado para cesso aos demais endpoints.

Exemplo de resposta:

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2QHYuY29tIiwiaWF0IjoxNjU0NTMyMzY1LCJleHAiOjE2NTQ3MDUxNjV9.JKyuaqRcaItzxXTPTllqRkiHpNgtu2iEJxcDB4GUBME"
}
```
##### Falha na autenticação! 401
Caso essa resposta aconteça, significa alguma falha durante o processo de autenticação da requisição.
Motivos: senha ou e mail incorretos

Exemplo de resposta:

```
{
	err: 'Password inválido!'
}
```
