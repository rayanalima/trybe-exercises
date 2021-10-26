`Verifique se não existe nada sem "commitar" utilizando git status`

git status

`Crie uma nova branch com o nome trybe-skills-changes e faça checkout nela`

git branch trybe-skills-changes

`No arquivo .txt , ao final da lista de habilidades , adicione mais duas habilidades que serão desenvolvidas na Trybe`

cat >> skills-trybe.txt

JavaScript

HTML

`Faça um git add nome-do-arquivo.extensao`

git add . skills-trybe.txt

`Agora um git commit -m "Mensagem que você gostaria"`

git commit -m "Adiciona skill"

`E por último um git push -u origin trybe-skills-changes`

git push -u origin trybe-skills-changes

`Retorne para a branch principal, master , com o comando: git checkout master`

git checkout master

`Verifique que você está na branch master , com o comando: git branch (esta branch deve estar com o formato original, sem as habilidades recém adicionadas)`

git branch

`Crie uma nova branch trybe-skills-updates a partir da master e faça checkout nela`

git branch trybe-skills-updates

git checkout trybe-skills-updates

`No mesmo arquivo .txt que você modificou no passo 4 , também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos`

cat >> skills-trybe.txt

Internet

`Faça um git add nome-do-arquivo.extensao`

git add skills-trybe.txt

`Agora um git commit -m "Mensagem que você gostaria"`

git commit -m "adiciona skill"

`e por último um git push -u origin trybe-skills-updates`

git push -u origin trybe-skills-updates






