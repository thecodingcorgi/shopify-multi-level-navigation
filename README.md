# shopify-multi-level-navigation
This is a three tier accordion menu that can be easily installed into any Shopify site. Simply follow the instructions in the README.txt file found in the download. Happy Coding!

Installation
---------------------------------------------
1) Add the "multilayer-navigation.js" and "multilayer-navigation.scss" to asset folder
2) Add the "multilayer-navigation.liquid" to your snippets folder
3) Add "{% include 'multilayer-navigation' %}" in your theme where you want it to
    appear.


Multi Level Navigation Documentation
-------------------------------------
The navigation follows the common practice of adding dropdown menus to Shopify.
This requires multiple menus to be created in the admin section and specific names
for each one so they know where to go.


Adding new links to tier 1.
-----------------------------------
1) Log into Shopify admin
2) Go to "Online Store" > "Navigation"
3) Find the menu with the "sidebar-menu" handle. This handle is what the code is looking
    for in order to find the links for the first level. If it does not exist, create it.
4) Add new links to the menu by clicking on the "Add menu item" button on the
    left side of the page.
5) Save.

Adding a tier 2 under a link in tier 1.
------------------------------------
1) Log into Shopify admin
2) Go to "Online Store" > "Navigation"
3) Create a new menu by clicking on the "Add Menu" button
4) Add a menu and give it the same exact name as the link you want the new second tier
    navigation to go under. For example, if you would like the new tier to appear
    under a link called 'krispy kreme' you would have to call your new menu 'krispy kreme'.
5) Add any links that you would like to this tier.
6) Save.

Adding new links to tier 3
----------------------------------
Adding a third tier is similar to adding a second tier with one exception.

To prevent errors with links that have the same name,
(for example, take the example below. The men and women categories that appear in both the
"limited production" and "off the runway") you must add the grandparent name
to the new menu before the name of the parent link.

***
Here's an example:

- Limited Production  (Grandparent) Tier 1
  --> Men             (Parent)      Tier 2
      --> Shoes       (Child)       Tier 3
      --> Pants
      --> Sweater
  --> Women
      --> Shoes
      --> Purses
- Off the Runway
  --> Men
      --> Shoes
      --> Socks
      --> Suits
  --> Women
      --> Dresses
      --> Skirts

To recreate the structure above we would already need to have the "Men" link added to
a menu called "Limited Production". This would create the second tier in the menu.

You would Then create a new menu called "Limited Production - Men". This will create
the third tier. In here you would add the "shoes", "pants", and "sweater" links.
