<!doctype html>
<html ng-app="dribble">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Dribble</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
		<link rel="stylesheet" href="assets/css/app.css"/>
    </head>
    <body>
        <div class="container">
        	<div class="navbar">
        		<div class="navbar-inner">
        			<a class="brand" href="#/">Dribble</a>
        			<ul class="nav">
        			</ul>
        		</div>
        	</div>

        	<ul class="nav">
				<li><a href='#/popular'>Popular</a></li>
				<li><a href='#/debuts'>Debuts</a></li>
				<li><a href='#/everyone'>Everyone</a></li>
			</ul>
        </div>
		
		<div ng-view></div>

        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.8/angular-route.min.js"></script>
        <script src="assets/js/app.js"></script>
        <script src="assets/js/services.js"></script>
        <script src="assets/js/controllers.js"></script>
        <script src="assets/js/filters.js"></script>
        <script src="assets/js/directives.js"></script>
    </body>
</html>