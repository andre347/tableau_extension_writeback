'use strict';

  $(document).ready(function () {
    $('#image').click(function(){
    $('#close').toggle();
    });


    tableau.extensions.initializeAsync().then(function () {
        var dashboard = tableau.extensions.dashboardContent.dashboard;
        var sheet = dashboard.worksheets[0];
        console.log(dashboard.name);
        console.log(sheet);


          // get some data source information
        sheet.getDataSourcesAsync().then(function(dataSource){
          //console.log(dataSource);
          var dataSourceID = dataSource[0].id;
          console.log(dataSourceID);


          // refresh said dataSource

          $("#clickButton").click(function() {
              console.log(dataSource[0].name);
              var name = dataSource[0].name
              dataSource[0].refreshAsync().then(function(){
                console.log('refreshed');
                $('#refreshDS').text('   ' + name + ' refreshed')
              });


          });

         });

    });
  });
