`#Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.`

mdkir unix_tests

cd unix_tests

`#Crie um arquivo de texto com o nome trybe.txt.`

touch trybe.txt

`#Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt.`

cp trybe.txt trybe_backup.txt

`#Renomeie o arquivo trybe.txt.`

mv trybe.txt trybe2.txt

`#Dentro de unix_tests , crie um novo diretório chamado backup.`

mkdir backup

`#Mova o arquivo trybe_backup.txt para o diretório backup.`

mv trybe_backup.txt backup

`#Dentro de unix_tests , crie um novo diretório chamado backup2.`

mkdir backup2

`#Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.`

mv backup/trybe_backup.txt backup2

`#Apague a pasta backup.`

rmdir backup 

`#Renomeie a pasta backup2 para backup.`

mv backup2 backup

`#Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.`

pwd

ls

`#Apague o diretório backup.`

rm -rf backup

`#Limpe o terminal.`

clear

`#Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt`

`#Mostre na tela as 5 primeiras skills do arquivo skills.txt .`

head -5 skills.txt

`#Mostre na tela as 4 últimas skills do arquivo skills.txt .`

tail -4 skills.txt

`Apague todos os arquivos que terminem em .txt .`

rm *.txt

`#Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:`

`curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"`

`#Mostre todo o conteúdo do arquivo countries.txt na tela.`

cat countries.txt

`#Mostre o conteúdo de countries.txt , página por página, até encontrar a Zambia.`

less countries.txt

`#Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.`

less countries.txt

/Zambia

`#Busque por Brazil no countries.txt .`

grep 'Brazil' countries.txt

`#Busque novamente por brazil , mas agora utilizando o lower case .`

grep -i 'brazil' countries.txt

`Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.`

`#Busque pelas frases que não contenham a palavra fox .`

grep -iv 'fox' phrases.txt

`#Conte o número de palavras do arquivo phrases.txt .`

wc -w phrases.txt

`#Conte o número de linhas do arquivo phrases.txt .`

wc -l phrases.txt

`#Crie os arquivos empty.tbt e empty.pdf .`

touch empty.tbt

touch empty.pdf

`#Liste todos os arquivos do diretório unix_tests .`

ls

`#Liste todos os arquivos que terminem com txt .`

ls *.txt

`#Liste todos os arquivos que terminem com tbt ou txt .`

ls *.tbt ls *.txt

`#Acesse o manual do comando ls .`

man ls



