# UFOs

## Project Overview
I am helping a senior data journalist who is choosing to write her next article about her hometown, McMinnville, OR. This town is known for its UFOs sightings and attracting the attention of many UFO ethusiasts. Dana is able to aggregate a javascript datafile full of international UFO sitings. By having access to this larger file, Dana can highlight how many citings there are in her hometown.

## Resources
Data source: data.js
Software: Visual Studio Code
Languages: Javascript, HTML, CSS
Stlyling: Bootstrap, D3.js

## Results
For the article, a webpage was created that contains not only the journalist's article, but a dynamic table to hold the UFO siting data.

Below is a screenshot of what the top 5 rows of the table look like:

![unfiltered table](https://github.com/asliwinski23/UFOs/blob/main/static/images/unfiltered%20table.png)

This table is dynamic because there are five categories viewers can filter the data by on the side:

![filter_categories](https://github.com/asliwinski23/UFOs/blob/main/static/images/filter_categories.png)

A user does not need to filter for all of the categories at once. To help the user with the format of their input, example text is shown in each box.

Let's say someone wanted to filter by state and shape. More specifically by California sightings that were triangle shapes. The user would simply type 'ca' in the box under 'Enter State' and 'triangle' in the box under 'Enter Shape'. After filtering, the top 5 rows in our filtered table would look as follows:

![filtered_table](https://github.com/asliwinski23/UFOs/blob/main/static/images/filtered_table.png)

## Summary
While this page is awesome, there are some drawbacks. We have all of this great data, but we don't visualize it in a way that is immediately useful to the user. Providing a map of the sitings in the table would be very interesting.

Two additional recommendations are:
1. Since the table can get quite long the user may have to scroll through 100+ entries, which can be annoying. The website may look cleaner if the table had subpages, displaying 10 entries per subpage.
2. Create an export data button.
