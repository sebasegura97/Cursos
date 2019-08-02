from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
import time

class TwitterBot: 
    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.bot = webdriver.Firefox()

    def login(self):
        bot = self.bot
        bot.get('https://twitter.com/login')
        time.sleep(10)
        # email = bot.find_element_by_name('session[username_or_email]')
        # password = bot.find_element_by_name('session[password]')
        # email.clear()
        # password.clear()
        email = WebDriverWait(bot, 10).until(EC.element_to_be_clickable((By.NAME, "session[username_or_email]")))
        email.click()
        email.send_keys(self.username)
        password = WebDriverWait(bot, 10).until(EC.element_to_be_clickable((By.NAME, "session[password]")))
        password.click()
        password.send_keys(self.password)

seba = TwitterBot('sebasegura97@gmail.com', 'kunaguero10')
seba.login()
