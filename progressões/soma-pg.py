def somaPG(inicio, r, n):
    if n > 0 and r != 0:
        elementos = inicio
        lista_elementos = [elementos]

        if r > 0:
            for i in range(1, n):
                elementos *= r
                lista_elementos.append(elementos)
            return sum(lista_elementos)
        if r < 0:
            for i in range(1, n):
                elementos *= r
                lista_elementos.append(elementos)
            return sum(lista_elementos)
    else:
        return print('Deve haver pelo menos um elemento')

