import requests
from bs4 import BeautifulSoup

crr_data = requests.get('https://learn.microsoft.com/en-us/azure/azure-netapp-files/cross-region-replication-introduction')

soup = BeautifulSoup(crr_data.content, 'html.parser')

tbodies = soup.find_all('tbody')

for table in tbodies:
    rows = table.find_all('tr')
    for row in rows:
        cells = row.find_all('td')
        print(cells[0].string + ',' + cells[1].string + ',' + cells[2].string)
        
