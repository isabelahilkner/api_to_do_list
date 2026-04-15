1-Descrição do projeto:

.  O projeto consiste em uma API com Node.js para gerenciar tarefas.

.  As funções do projeto são:

.  -Criar tasks

.  -Listar tasks

.  -Atualizar tasks

.  -Deletar tasks

.  Cada task tem os seguintes atributos:

.  ID: "Número próprio para identificar cada task"

.  title: "Nome da task"

.  completed: "Status de conclusão (true/false)"


2-Tecnologias utilizadas:

.-Node.js

.-HTTP

.-Thunder client

.-JS


3-Instalação:

.-Pegar arquivos do GitHub

.-git clone


4-Execução:

.Para iniciar o servidor:

.-node app.js

.-Servidor rodando em: - http://localhost:3000


5-Explicação da solução:

."Completed" foi colocado em taskModel, taskController e taskService.

.Rota para GET: tasks/id adicionada em taskRoutes, busca de task por id em taskServices e em taskController
