**Requisitos funcionais - RF**

**Requisitos não funcionais - RNF**

**Regra de negócio - RN**

# Cadastro do veículo

**RF**
[ ] Deve ser possível cadastrar um veículo.
[ ] Deve ser possível listar todas as categorias

**RN**
[ ] Não deve ser possível cadastrar um veículo com uma placa já existente.
[ ] Não deve ser possível alterar a placa de um veículo já cadastrado.
[ ] O veículo deve ser cadastrado com "available" => true, por padrão.
[ ] O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de veículos

**RF**
[ ] Deve ser possível listar todos os veículos disponíveis.
[ ] Deve ser possível listar todos os veículos disponíveis pela marca.
[ ] Deve ser possível listar todos os veículos disponíveis pelo nome da categoria.
[ ] Deve ser possível listar todos os veículos disponíveis pelo nome do veículo.

**RN**
[ ] O usuário não precisa estar autenticado no sistema.

# Cadastro de especificação no veículo

**RF**
[ ] Deve ser possível cadastrar uma especificação para um veículo.
[ ] Deve ser possível listar as especificações
[ ] Deve ser possível listar os veículos

**RN**
[ ] Não deve ser possível cadastrar uma especificação para um veículo não cadastrado.
[ ] Não deve ser possível cadastrar uma especificação já existente para o mesmo veículo.
[ ] O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do veículo

**RF**
[ ] Deve ser possível cadastrar a imagem do veículo.
[ ] Deve ser possível listar todos os carros

**RNF**
[ ] Utilizar o multer para upload dos arquivos.

**RN**
[ ] Deve ser possível cadastrar mais de uma imagem para um único veículo.
[ ] O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de veículo

**RF**
[ ] Deve ser possível cadastrar um aluguel.

**RN**
[ ] O aluguel deve ter duração mínima de 24 horas.
[ ] Não deve ser possível cadastrar um novo aluguel caso já exista um em aberto para o mesmo usuário.[ ] Não deve ser possível cadastrar um novo aluguel caso já exista um em aberto para o mesmo veículo.
