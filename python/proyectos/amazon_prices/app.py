import requests
from bs4 import BeautifulSoup
import smtplib

URL = 'https://articulo.mercadolibre.com.ar/MLA-708621663-macbook-pro-2017-13-23ghz-i5-8gb-128-ssd-73000-_JM'
headers = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36'}


def check_price():
    page = requests.get(URL, headers=headers)
    # Analizador de paginas web:
    soup = BeautifulSoup(page.content, 'html.parser')
    price = soup.find_all('span', 'price-tag-fraction')
    converted_price = int(price[0].get_text().replace('.', ''))
    
    print(converted_price)
    if (converted_price < 86000):
        send_mail()

def send_mail():
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.ehlo
    
    server.login('sebasegura97@gmail.com', 'lilociro2578')
    subject = 'El precio ha bajado!'
    body = 'Mira en mercadolibre! https://articulo.mercadolibre.com.ar/MLA-708621663-macbook-pro-2017-13-23ghz-i5-8gb-128-ssd-73000-_JM'

    msg = f"Subject:{subject}\n\n{body}"
    server.sendmail("sebasegura97@gmail.com", "sebasegura97@gmail.com", msg)
    print('Mail has been sent!!')
    
    server.quit()


while(true):
    check_price()
    # Ejecutara la funcion cada 30 minutos
    # Se deberia usar un scheduler
    time.sleep(60 * 30)