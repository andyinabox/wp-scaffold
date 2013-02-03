<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package wp-scaffold
 * @since wp-scaffold 1.0
 */
?><!DOCTYPE html>
<!--[if lt IE 9]><html class="ie" <?php language_attributes(); ?>><![endif]-->
<!--[if gte IE 9]><!--><html <?php language_attributes(); ?>><!--<![endif]-->
<head>
	
<!-- meta -->
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<!-- /meta -->

<!-- who am i? -->
<title><?php wp_title( '|', true, 'right' ); ?></title>
<!-- /who am i? -->

<!-- XHTML Friends Network http://gmpg.org/xfn/ -->
<link rel="profile" href="http://gmpg.org/xfn/11" />

<!-- holla back-->
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

<!-- sourcery -->
<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<script data-main="<?php echo get_template_directory_uri(); ?>/js/main" src="http://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.4/require.min.js"></script>
<!-- /sourcery -->


<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<?php do_action( 'before' ); ?>
	<header id="masthead" class="site-header" role="banner">
		<hgroup>
			<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
		</hgroup>

		<nav role="navigation" class="site-navigation main-navigation">
			<h1 class="assistive-text"><?php _e( 'Menu', 'wp_scaffold' ); ?></h1>
			<div class="assistive-text skip-link"><a href="#content" title="<?php esc_attr_e( 'Skip to content', 'wp_scaffold' ); ?>"><?php _e( 'Skip to content', 'wp_scaffold' ); ?></a></div>

			<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
		</nav><!-- .site-navigation .main-navigation -->
	</header><!-- #masthead .site-header -->

	<div id="main" class="site-main">
