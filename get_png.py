import matplotlib.pyplot as plt
import numpy as np

a = [
    260,       265, 246.89999,
    194.5, 137.74001, 132.35001,
    124.18,    118.18,     120.4,
    101.74,    108.73,     91.71,
    44.97,        46,   40.6799,
    40.69,     45.94,     49.51
]

b = [
    '2021-03-11', '2021-03-10',
    '2021-03-09', '2021-03-08',
    '2021-03-05', '2021-03-04',
    '2021-03-03', '2021-03-02',
    '2021-03-01', '2021-02-26',
    '2021-02-25', '2021-02-24',
    '2021-02-23', '2021-02-22',
    '2021-02-19', '2021-02-18',
    '2021-02-17', '2021-02-16'
]

fig, ax = plt.subplots()
ax.plot(b[::-1],a[::-1])

ax.set(xlabel='Date', ylabel='price (USD)',
       title='Gamestop Coorporation (GME)')
ax.grid()
plt.xticks(rotation=90)
fig.savefig("gme.png")

