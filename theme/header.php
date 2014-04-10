<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width">
    <title><?php wp_title( '|', true, 'right' ); ?></title>    
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <link href='//fonts.googleapis.com/css?family=Droid+Sans:400,700' rel='stylesheet' type='text/css'>
    <link href='//fonts.googleapis.com/css?family=Amatic+SC' rel='stylesheet' type='text/css'>
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <link href="<?php t_url("css/inmetrics.min.css"); ?>" rel="stylesheet">
    <!--[if lt IE 9]>
      <script src="<?php t_url("js/vendor/html5.js"); ?>"></script>
    <![endif]-->
    <!--[if (gte IE 6)&(lte IE 8)]>
      <script type="text/javascript" src="<?php t_url("js/vendor/selectivizr.js"); ?>"></script>      
    <![endif]-->
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <header>
      <div class="mid pR">
        <span class="in-inspire"></span>
      </div>
      <nav class="lang" role="navigation">
        <?php inmetrics_language_switcher('language_code'); ?>
      </nav>
      <div class="wrapper">
        <a href="#menu" data-toggle="slide" class="mobile-menu"><img src="<?php t_url("images/mobile-menu.png"); ?>" /></a>
        <nav id="menu" class="menu" role="navigation">
          <?php inmetrics_main_menu(); ?>
        </nav>
        <a href="<?php echo inmetrics_home_url(); ?>" title="InMetrics" class="logo"><img alt="Logo" src="<?php t_url("images/logo.png"); ?>" /></a>
      </div>
    </header>
