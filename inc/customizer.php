<?php
/**
 * wp-scaffold Theme Customizer
 *
 * @package wp-scaffold
 * @since wp-scaffold 1.2
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 *
 * @since wp-scaffold 1.2
 */
function wp_scaffold_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport        = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport = 'postMessage';
}
add_action( 'customize_register', 'wp_scaffold_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 *
 * @since wp-scaffold 1.2
 */
function wp_scaffold_customize_preview_js() {
	wp_enqueue_script( 'wp_scaffold_customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20120827', true );
}
add_action( 'customize_preview_init', 'wp_scaffold_customize_preview_js' );
