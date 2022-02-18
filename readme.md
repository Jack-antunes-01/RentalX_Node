**Requisitos funcionais - RF**

**Requisitos não funcionais - RNF**

**Regra de negócio - RN**

# Cadastro do veículo<br />

**RF**<br />
[x] Deve ser possível cadastrar um veículo.<br />

**RN**<br />
[x] Não deve ser possível cadastrar um veículo com uma placa já existente.<br />
[x] O veículo deve ser cadastrado com "available" => true, por padrão.<br />
[x] O usuário responsável pelo cadastro deve ser um usuário administrador.<br />

# Listagem de veículos<br />

**RF**<br />
[x] Deve ser possível listar todos os veículos disponíveis.<br />
[x] Deve ser possível listar todos os veículos disponíveis pela marca.<br />
[x] Deve ser possível listar todos os veículos disponíveis pelo nome da categoria.<br />
[x] Deve ser possível listar todos os veículos disponíveis pelo nome do veículo.<br />

**RN**<br />
[x] O usuário não precisa estar autenticado no sistema.<br />

# Cadastro de especificação no veículo<br />

**RF**<br />
[x] Deve ser possível cadastrar uma especificação para um veículo.<br />

**RN**<br />
[x] Não deve ser possível cadastrar uma especificação para um veículo não cadastrado.<br />
[x] Não deve ser possível cadastrar uma especificação já existente para o mesmo veículo.<br />
[x] O usuário responsável pelo cadastro deve ser um usuário administrador.<br />

# Cadastro de imagens do veículo<br />

**RF**<br />
[ ] Deve ser possível cadastrar a imagem do veículo.<br />

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
