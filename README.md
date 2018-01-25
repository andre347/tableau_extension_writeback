Tableau Extension API: Write Back to Local File
=====================================
Created by [Andre de Vries](https://www.twitter.com/andre347_) (22nd Jan 2018)

####  **The Tableau Extension API is still in Development and therefore will contain bugs and should only be deployed when it has been released. This is solely for testing purposes. Please report any bugs straight to Tableau**

Example Tableau Extension to write back to the source data. In this case a local text file.

You can sign up for the Developer Preview [here](https://www.tableau.com/developer/extensions). You can download the latest Developer Preview on the [Pre-release website](http://prerelease.tableau.com)

Extension Installation Instructions
----------------

1. Clone the repo
2. Place the trex file in your Tableau Repository (Beta)/Extensions folder
3. Change the trex file to the location where you host this Extension (e.g localhost)
3. Start the Express Server on Localhost 3000

```
node app.js
```

4. Start your Extension Server (on localhost navigate to the Extension folder)
```
npm start
```
5. Open the Write Back Workbook.twb file, or create a new workbook with the product_file.txt as the data source. Add the Extension to the Dashboard.

NOTE: No web authentication added, nor checks on the correctness of the input of the data. This is just an example extension of writing back to a data source.

