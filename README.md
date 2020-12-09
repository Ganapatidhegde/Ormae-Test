# Redux implementation

Here I have used use-global-hook module as store management system. Once we got the data from the Api, I am storing data in redux and fetching the store to get data and displaying on UI. And used global action to update the store

# Pagination

On intial load we are getting only 5 items and there is option to load more data. once we click on load more button it hits api again and fetches next 5 items.

# Delete

On click of delete button, I am filtering the data and updating the global store using global action methodand hence store is always in sync with data.

# Thumbnail Images

On click of thumbnail images I am showing full image in a new tab.

# Loader for the app

Since we are making Api request I am showing loader till the data comes.
