def somaPG(inicio, razao, termos):
    if n > 0 and razao != 0:
        termo = inicio
        lista_termos = [termo]
        for i in range(1, termos):
            termo *= razao
            lista_elementos.append(termo)
        return sum(lista_termos)

    else:
        return print('Deve haver pelo menos um termo e a razão deve ser diferente de 0')
