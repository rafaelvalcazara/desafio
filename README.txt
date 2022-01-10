## M2 Digital Teste ##

# Vaga: Desenvolvedor backend

# Instruções de uso

#Você precisára ter o Docker instalado em sua máquina.

- Na raiz do projeto digite "docker build -t m2digital ." para criar o container.
Aguarde finalizar o processo.

- Digite "docker run -p 3001:3001 -d m2digital"

Após isso o serviço estará rodando em sua máquina no endereço localhost:3001

# Rotas
###### Equipes ######
Método GET (Equipes)
/equipes (Irá listar todos as equipes do banco de dados, sem exceção).
/equipes/ativos (Irá listar apenas as equipes ativas do banco de dados).
/equipes/desativados (Irá listar apenas as equipes desativadas do banco de dados)

######

Método POST
/equipes (Irá criar uma equipe)
Para criar uma equipe rota espera as seguintes informações em formato JSON
{
  "nome": "String"
}
######
/equipes/update (Irá alterar um registro do banco de dados com base no campo 'idequipe')
A rota espera as seguintes informações em formato JSON.
{
  "idequipe": Integer
  "nome": "String"
}
######
/equipes/delete  (Irá desativar o registro)
A rota espera o id da equipe a ser desativado.
{
  "idequipe": Integer
}

##############################

###### Usuários ######
Método GET

/usuarios (Irá listar todos os usuários do banco de dados, sem exceção).
/usuarios/ativos (Irá listar apenas os usuários ativos do banco de dados).
/usuarios/desativados (Irá listar apenas os usuários desativados do banco de dados).

######

Método POST
/usuarios (Irá criar um usuário)
Para criar um usuários a rota espera as seguintes informações em formato JSON
{
  "nome": "String",
  "password":"String",
  "login":"String",
  "idequipe": Integer
}
######

/usuarios/update (Irá atualizar o registro do usuário com base no id do mesmo.)
Para atualizar um usuários a rota espera as seguintes informações em formato JSON

{
  "idusuario": Integer,
  "nome": "String",
  "password":"String",
  "login":"String",
  "idequipe": Integer
}
######
/usuarios/delete (Irá desativar o registro)
A rota espera o id do usuário a ser desativado.
{
  "idusuario": Integer
}




