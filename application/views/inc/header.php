<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head>
	<meta charset="UTF-8" http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
	<title>PopCorn</title>
	    <?php
        /* --------------- =JS --------------- */
        echo '<script>';

        // App Configurations
        printf('var baseUrl = "%s";' . PHP_EOL, base_url());
        printf('var siteUrl = "%s";' . PHP_EOL, site_url("/"));
        echo '</script>';
        /* --------------- =CSS --------------- */
        ?>

        <link href="css/bootstrap.css" rel="stylesheet">
        <link href="css/main.css?p=12" rel="stylesheet">
        
        <!--[if lt IE 9]>
	      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    	<![endif]-->

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="js/jquery.cookie.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
        <script type="text/javascript" src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>
       
        <script src="js/jquery.touchSwipe.js"></script>
        <!--script src="js/h5utils.js"></script-->



        
        <!--Fonts-->
        <!-- <link href='http://fonts.googleapis.com/css?family=Carter+One' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Skranji:400,700' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Averia+Sans+Libre' rel='stylesheet' type='text/css'> -->
        <!--Font End-->
</head>
<body>

