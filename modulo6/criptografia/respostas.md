1 - 
A) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?

R: Round é o custo para rodar o algoritimo, quanto maior o custo, maior o tempo de execução e portanto sistema mais elaborados são precisos. O cost padrão na maioria das bibliotecas é 12. já o salt é uma string aleatória que antecede o hash, serve para evitar ataques chamados de rainbow table. onde são gerado senhas com possíveis algoritimos de hash e armazenados em uma tabela. Dessa forma é possivel reverter a criptografia do hash se não houver uma string aleatória.

2
A) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.

R:Deve ser modificado primeiramente o signup, visto que a senha hasheada deve ser salvo no banco de dados primeiro, para então realizar o algoritimo de comparação no login.

D) No exercício da aula anterior, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.

R:Não é necessário pois o token gerado já é criptografado e não dá acesso à senha