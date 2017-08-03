import math

u = 0
s = 0
l = 0
m = 0
b = 1.3909875
f = 0
x = 0
n = 0
a = 0

def usershower():
    global u

    u = float(input("How long is your average shower? "))

def amountoflitersuseduser():
    global u
    l = (u * 13.2475)
    return l

def amountofmoneyspentuser():
    global l
    m = (l * 0.015)
    return m

def differenceperday():
    global m
    global b
    f = (m - b)
    return f

def differenceperyear():
    global f
    x = (f * 365)
    return x

def amountofpeople():
    global n
    n = float(input("How many people will be using one VodaFlow? "))

def savingsforall():
    global x
    global n
    a = (x * n)
    return a

while (True): 
    usershower()
    amountofpeople()
    l = amountoflitersuseduser()
    m = amountofmoneyspentuser()
    f = differenceperday()
    x = differenceperyear()

    if (savingsforall() > 0):
        print "Wow! Using VodaFlow on its recommended settings, you can save $"+str(round(savingsforall(),2))+" per year!" #this allows for a rounded final answer to two digits and the $ sign not to have a space between the sign and the figure

    else:
        print "Congratulations! You are conserving a great deal of water! However, if you want to jam out and have fun while saving even more water, then check out VodaFlow!"
