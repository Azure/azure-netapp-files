from selenium import webdriver # pip install selenium
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager # pip install webdriver-manager
from selenium.webdriver.common.by import By

driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))

driver.get("https://azure.microsoft.com/en-us/explore/global-infrastructure/products-by-region/?products=netapp&regions=all&rar=true#select-product")

driver.implicitly_wait(0.5)

table = driver.find_element(by=By.ID, value='primary-table') # gets the JS rendered table

# below four lines are not needed as we can get the region name from the attribute of the status cell itself
#regionHeaderRow = table.find_element(by=By.CLASS_NAME, value='region-headers-row') # gets the single TR which contains the region names
#regionHeaderCells = regionHeaderRow.find_elements(by=By.TAG_NAME, value='th') # gets the individual cells within the TR above
#for regionHeader in regionHeaderCells:
#    print(regionHeader.get_attribute("data-region-slug"))

regionStatusRow = table.find_element(by=By.CLASS_NAME, value='service-row') # gets the single TR which contains the region status image
regionStatusCells = regionStatusRow.find_elements(by=By.TAG_NAME, value='td') # gets the individual cells within the TR above

totalANFRegions = 0

for regionStatus in regionStatusCells:
    src = ''
    region = regionStatus.get_attribute("data-region-slug")
    images = regionStatus.find_elements(by=By.TAG_NAME, value="img")
    status = 'Not Available'
    if len(images) > 0:
        src = images[0].get_property('src')
        if 'ga.svg' in src:
            status = 'Generally Available'
            totalANFRegions += 1
        elif 'planned-active.svg' in src:
            status = 'Future Availability Planned'
    print(region + ',' + status)

print('Total Available ANF Regions: ' + str(totalANFRegions))
