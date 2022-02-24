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
[x] Deve ser possível cadastrar a imagem do veículo.<br />

**RNF**<br />
[x] Utilizar o multer para upload dos arquivos.<br />

**RN**<br />
[x] Deve ser possível cadastrar mais de uma imagem para um único veículo.<br />
[x] O usuário responsável pelo cadastro deve ser um usuário administrador.<br />

# Aluguel de veículo<br />

**RF**<br />
[x] Deve ser possível cadastrar um aluguel.<br />

**RN**<br />
[x] O aluguel deve ter duração mínima de 24 horas.<br />
[x] Não deve ser possível cadastrar um novo aluguel caso já exista um em aberto para o mesmo usuário.<br />
[x] Não deve ser possível cadastrar um novo aluguel caso já exista um em aberto para o mesmo veículo.
[] Ao realizar um aluguel o status do veículo deve ser alterado para indisponível.

# Aluguel de veículo<br />

**RF**<br />
[x] Deve ser possível realizar a devolução de um carro.<br />

**RN**<br />
[x] Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.<br />
[x] Ao realizar devolução, o carro deverá ser liberado para outro aluguel.<br />
[x] Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.<br />
[x] Ao realizar a devolução, deverá ser calculado o total do aluguel.<br />
[x] Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.<br />
[x] Caso haja multa, deverá ser somado ao total do aluguel.<br />
[x] O usuário precisa estar autenticado no sistema.<br />

# Aluguel de veículo<br />

**RF**<br />
[x] Deve ser possível realizar a busca de todos os aluguéis para o usuário.<br />

**RN**<br />
[x] O usuário deve estar logado na aplicação.<br />

# Recuperar senha<br />

**RF**<br />
[] Deve ser possível o usuário recuperar a senha informando o e-mail.<br />
[] O usuário deve receber um e-mail com o passo a passo para a recuperação da senha.<br />
[] O usuário deve conseguir inserir uma nova senha.<br />

**RN**<br />
[] O usuário precisa informar uma nova senha.<br />
[] O link enviado para a recuperação deve expirar em 3 horas.<br />
