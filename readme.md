**Requisitos funcionais - RF**

**Requisitos não funcionais - RNF**

**Regra de negócio - RN**

# Cadastro do veículo<br />

**RF**<br />
[ ] Deve ser possível cadastrar um veículo.<br />
[ ] Deve ser possível listar todas as categorias<br />

**RN**<br />
[ ] Não deve ser possível cadastrar um veículo com uma placa já existente.<br />
[ ] Não deve ser possível alterar a placa de um veículo já cadastrado.<br />
[ ] O veículo deve ser cadastrado com "available" => true, por padrão.<br />
[ ] O usuário responsável pelo cadastro deve ser um usuário administrador.<br />

# Listagem de veículos<br />

**RF**<br />
[ ] Deve ser possível listar todos os veículos disponíveis.<br />
[ ] Deve ser possível listar todos os veículos disponíveis pela marca.<br />
[ ] Deve ser possível listar todos os veículos disponíveis pelo nome da categoria.<br />
[ ] Deve ser possível listar todos os veículos disponíveis pelo nome do veículo.<br />

**RN**<br />
[ ] O usuário não precisa estar autenticado no sistema.<br />

# Cadastro de especificação no veículo<br />

**RF**<br />
[ ] Deve ser possível cadastrar uma especificação para um veículo.<br />
[ ] Deve ser possível listar as especificações<br />
[ ] Deve ser possível listar os veículos<br />

**RN**<br />
[ ] Não deve ser possível cadastrar uma especificação para um veículo não cadastrado.<br />
[ ] Não deve ser possível cadastrar uma especificação já existente para o mesmo veículo.<br />
[ ] O usuário responsável pelo cadastro deve ser um usuário administrador.<br />

# Cadastro de imagens do veículo<br />

**RF**<br />
[ ] Deve ser possível cadastrar a imagem do veículo.<br />
[ ] Deve ser possível listar todos os carros<br />

**RNF**<br />
[ ] Utilizar o multer para upload dos arquivos.<br />

**RN**<br />
[ ] Deve ser possível cadastrar mais de uma imagem para um único veículo.<br />
[ ] O usuário responsável pelo cadastro deve ser um usuário administrador.<br />

# Aluguel de veículo<br />

**RF**<br />
[ ] Deve ser possível cadastrar um aluguel.<br />

**RN**<br />
[ ] O aluguel deve ter duração mínima de 24 horas.<br />
[ ] Não deve ser possível cadastrar um novo aluguel caso já exista um em aberto para o mesmo usuário.<br />
[ ] Não deve ser possível cadastrar um novo aluguel caso já exista um em aberto para o mesmo veículo.
