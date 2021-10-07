def soma_dos_algarismos_fatorial(numero):
    a = 1
    for numeros in range(1, numero+1):
        a *= numeros
    b = str(a)
    tamanho = len(b)
    lista = []
    var = 1
    for numero in (1, tamanho+1):
         while var < a:
             lista.append(a//var % 10)
             var *= 10
    return sum(lista)

print(soma_dos_algarismos_fatorial(10))