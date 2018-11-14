#!/usr/bin/env python3
import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class GUITests(unittest.TestCase):

	# Sets up the FireFox driver.
	def setUp(self):
		self.driver = webdriver.Firefox()

	def test_home_title(self) :
		driver = self.driver
		driver.get("http://www.equaleducation.info/")
		self.assertTrue("Equal Education" in driver.title)
		
	def test_home_mission(self) :
		driver = self.driver
		driver.get("http://www.equaleducation.info/")
		elem = driver.find_element_by_class_name("mission")
		assert "Here at Equal Education, our mission is to help people find charitable organizations that support education in their desired region." in elem

	def test_home_carousel(self) :
		# Test carousel elements.
		a = driver.find_elements_by_class_name("carousel-caption text-left")
		# Should enter three times.
		count = 0
		for elem in a :
			if count == 0 :
				assert elem.text() == "School Districts"
			else :
				if count == 1 :
					assert elem.text() == "Charities"
				else :
					if count == 2 :
						assert elem.text() == "Communities"
			count += 1

	def test_school_title(self) :
		driver = self.driver
		driver.get("http://www.equaleducation.info/schools")
		self.assertTrue("Equal Education" in driver.title)

	def test_community_title(self) :
		driver = self.driver
		driver.get("http://www.equaleducation.info/communities")
		self.assertTrue("Equal Education" in driver.title)

	def test_charity_title(self) :
		driver = self.driver
		driver.get("http://www.equaleducation.info/charities")
		self.assertTrue("Equal Education" in driver.title)

	def test_about_title(self) :
		driver = self.driver
		driver.get("http://www.equaleducation.info/about")
		self.assertTrue("Equal Education" in driver.title)

	def test_about_site(self) :
		driver = self.driver
		driver.get("http://www.equaleducation.info/about")
		elem = driver.find_element_by_id("about-site")
		assert "About the site" in elem

	def test_about_data(self) :
		driver = self.driver
		driver.get("http://www.equaleducation.info/about")
		elem = driver.find_element_by_id("about-data")
		assert "About our Data" in elem

	def test_about_us(self) :
		driver = self.driver
		driver.get("http://www.equaleducation.info/about")
		elem = driver.find_element_by_id("about-us")
		assert "About Us" in elem

	def test_about_stats(self) :
		driver = self.driver
		driver.get("http://www.equaleducation.info/about")
		elem = driver.find_element_by_id("about-stats")
		assert "Statistics" in elem

	def test_about_tools(self) :
		driver = self.driver
		driver.get("http://www.equaleducation.info/about")
		elem = driver.find_element_by_id("about-tools")
		assert "Tools Used" in elem

	# Closes the driver.
	def tearDown(self) :
		self.driver.close()

# ----
# main
# ----

if __name__ == "__main__":
	unittest.main()