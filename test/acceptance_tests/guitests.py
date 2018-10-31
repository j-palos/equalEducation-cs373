#!/usr/bin/env python3

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# Check header.
def check_header(driver) :
	header = driver.find_element_by_id("page-header")
	assert header.is_displayed()

# Check title.
def check_title(driver) :
	assert "Equal Education" in driver.title

# Check footer.
def check_footer(driver) :
	footer = driver.find_element_by_xpath("/html/body/main/footer")
	assert footer.is_displayed()

# ---------
# Home Page
# ---------
def test_home(driver) :
	# Test home page.
	driver.get("https://www.equaleducation.info")
	check_header(driver)
	check_title(driver)
	check_footer(driver)
	check_links(driver)

	# Test carousel elements.
	a = driver.find_elements_by_class_name("carousel-caption")
	# Should enter three times.
	count = 0
	for elem in a :
		if count == 0 :
			assert elem.text() == "School Districts"
			xpath = find_element_by_xpath("///*[@id=\"myCarousel\"]/div/div[1]/div/div/h1")
			assert xpath.text() == "School Districts"
		else :
			if count == 1 :
				assert elem.text() == "Charities"
				xpath = find_element_by_xpath("//*[@id=\"myCarousel\"]/div/div[2]/div/div/h1")
				assert xpath.text() == "Charities"
			else :
				if count == 2 :
					assert elem.text() == "Communities"
					xpath = find_element_by_xpath("//*[@id=\"myCarousel\"]/div/div[3]/div/div/h1")
					assert xpath.text() == "Communities"
		count += 1
	
# ---------------------
# School Districts Page
# ---------------------
def test_school(driver) :
	# Test school districts page.
	driver.get("https://www.equaleducation.info/school.html")
	check_header(driver)
	check_title(driver)
	check_footer(driver)
	check_links(driver)

# --------------
# Volunteer Page
# --------------
def test_volunteer(driver) :
	# Test volunteer page.
	driver.get("https://www.equaleducation.info/volunteer.html")
	check_header(driver)
	check_title(driver)
	check_footer(driver)
	check_links(driver)

# ------------
# Charity Page
# ------------
def test_charity(driver) :
	# Test charity page.
	driver.get("https://www.equaleducation.info/charity.html")
	check_header(driver)
	check_title(driver)
	check_footer(driver)
	check_links(driver)

# ----------
# About Page
# ----------
def test_about(driver) :
	# Test about page.
	driver.get("https://www.equaleducation.info/about.html")
	check_header(driver)
	check_title(driver)
	check_footer(driver)
	check_links(driver)


# ----
# main
# ----

if __name__ == "__main__":
	driver = webdriver.Firefox()
	test_home(driver)
	test_school(driver)
	test_volunteer(driver)
	test_charity(driver)
	test_about(driver)
	driver.close()