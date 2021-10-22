# Parte 1

`#Navegue até a pasta unix_tests ;`

cd unix_tests

`#Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet , Unix e Bash , um em cada linha.`

cat > skills2.txt

Internet

Unix

Bash

`#Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓`

cat >> skills2.txt

Linux

macOS

Kernel

Site

Terminal

`#Conte quantas linhas tem o arquivo skills2.txt .`

wc -l skills2.txt

`#Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.`

sort < skills2.txt | head -3 > top_skills.txt

`#Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.`

cat > phrases2.txt 

Que o vento leve o necessário e me traga o suficiente.

Se a caminhada está difícil, é porque você está no caminho certo.

A vida é de quem se atreve a viver.

`#Conte o número de linhas que contêm as letras br .`

grep 'br' phrases2.txt | wc -l

`#Conte o número de linhas que não contêm as letras br.`

grep -iv br phrases2.txt | wc -l

`#Adicione dois nomes de países ao final do arquivo phrases2.txt .`

cat >> phrases2.txt

Canadá

Inglaterra

`#Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt`

cat phrases2.txt countries.txt > bunch_of_things.txt

`#Ordene o arquivo bunch_of_things.txt .`

sort bunch_of_things.txt

# Parte 2

`#Navegue até a pasta unix_tests ;`

cd unix_tests

`#Rode o comando ls -l e veja quais as permissões dos arquivos;`
 
 ls -l
 
 `#Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l ;`
 
 chmod a+rw bunch_of_things.txt
 
 ls -l
 
 `#Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l ;`

chmod a-rw bunch_of_things.txt

`#Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt .`

mod 644 bunch_of_things.txt

# Parte 3

`#Liste todos os processos;`

ps

`#Agora use o comando sleep 30 & ;`

sleep 30 &

`#Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo) ;`

ps

kill 10047 (número PID)

`#Execute novamente o comando sleep 30 , mas agora sem o & . Depois, faça com que ele continue executando em background;`

sleep 30

crtl + Z

bg

`#Crie um processo em background que rode o comando sleep por 300 segundos.`

sleep 300 &

`#Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.`

sleep 200 | sleep 100

`#Verifique que apenas o processo sleep 300 está em execução com o comando jobs . Suspenda a execução desse processo.`

jobs

fg %1

Ctrl + Z

`#Retome a execução do processo sleep 100 em background com o comando bg .`

bg 1

´#Termine a execução de todos os processos sleep (mate os processos) .`

kill 10540

# Parte 4

`Se você utiliza o Linux , abra o terminal e execute o comando sudo apt-get install cmatrix , ou para pessoas usuárias de macOS , utilize no terminal brew install cmatrix . Depois, execute o comando cmatrix . Quando estiver se sentindo como o Neo , aperte ctrl+c para voltar ao terminal;`

`#No sistema Linux , execute o comando sudo apt-get install fortune , ou no macOS brew install fortune , e após a instalação, crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia` Utilize apenas uma linha de comando. Dica: use o comando fortune , e o operador > ;

fortune > fortune.txt

`#Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando wc ;`

wc -c fortune.txt

`#Execute o comando sudo apt-get install sl em um terminal Linux , ou brew install sl em um terminal macOS . Após a instalação, execute o comando sl . Agora tente sl -F ;`

sudo apt-get install sl

sl

sl -f

`#No sistema Linux , execute o comando sudo apt-get install cowsay , ou brew install cowsay no macOS . Após a instalação, execute o comando cowsay e algo que você queira falar. Agora faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt ;`

sudo apt-get install cowsay

cowsay

cowsay < fortune.txt

`#Descubra os fatores primos usando o comando factor e em seguida o número 42 ;`

factor 42

`#Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando rev .`

fortune | rev

`#Execute o comando telnet towel.blinkenlights.nl e espere alguns segundos.`

telnet towel.blinkenlights.nl




