#!/usr/bin/env python3
import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class GUITests(unittest.TestCase):

	# Sets up the FireFox driver.
	def setUp(self):
		self.driver = webdriver.Firefox()

	# ---------
	# Home Page
	# ---------
	def test_home_title_title(self) :
		driver = self.driver
		driver.get("http://www.equaleducation.info/")
		self.assertTrue("Equal Education" in driver.title)
		
	# def test_home_

	# ---------------------
	# School Districts Page
	# ---------------------
	def test_school_title(self) :
		driver = self.driver
		driver.get("http://www.equaleducation.info/schools")
		self.assertTrue("Equal Education" in driver.title)

	# ----------------
	# Communities Page
	# ----------------
	def test_community_title(self) :
		driver = self.driver
		driver.get("http://www.equaleducation.info/communities")
		self.assertTrue("Equal Education" in driver.title)

	# ------------
	# Charity Page
	# ------------
	def test_charity_title(self) :
		driver = self.driver
		driver.get("http://www.equaleducation.info/charities")
		self.assertTrue("Equal Education" in driver.title)

	# ----------
	# About Page
	# ----------
	def test_about_title(self) :
		driver = self.driver
		driver.get("http://www.equaleducation.info/about")
		self.assertTrue("Equal Education" in driver.title)

	def test_about_site(self) :
		driver = self.driver
		driver.get("http://www.equaleducation.info/about")
		elem = driver.find_element_by_id("about-site")
		assert "About the site" in elem

	# Closes the driver.
	def tearDown(self) :
		self.driver.close()

# ----
# main
# ----

if __name__ == "__main__":
	unittest.main()