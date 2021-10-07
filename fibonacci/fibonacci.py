numero = int(input('Digite até que número você deseja verificar: '))
print('A lista printada irá até o primeiro termo posterior ao número digitado')
t1 = 0
t2 = 1
print(t1, '', t2, '',  end='')
while True:
    t3 = t1 + t2
    t1 = t2
    t2 = t3
    print('', t3, '', end='')
    if t3 > numero:
        break
