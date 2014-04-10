<?php

define('ACF_LITE' , true);

// Fix for symlinks
function inmetrics_fix_acf_dir($file) {
  $base = get_template_directory();
  $base = readlink($base);
  $dir = get_template_directory_uri();
  $dir = str_replace($base, $dir, $file);
  return str_replace('\\' ,'/', $dir);
}

if(!class_exists('Acf')) {
  $base = get_template_directory();
  if(is_link($base)) {
    add_filter('acf/helpers/get_dir', 'inmetrics_fix_acf_dir', 1, 1);
    require_once(trailingslashit(get_template_directory()) . "vendor/advanced-custom-fields/acf.php");
    remove_filter('acf/helpers/get_dir', array(acf, 'helpers_get_dir'), 1, 1);
  }
  else {
    require_once(trailingslashit(get_template_directory()) . "vendor/advanced-custom-fields/acf.php");
  }
}

function inmetrics_acf_options_hide_all() {
  return array (
    'position' => 'normal',
    'layout' => 'default',
    'hide_on_screen' => array (
      0 => 'permalink',
      1 => 'the_content',
      2 => 'excerpt',
      3 => 'custom_fields',
      4 => 'discussion',
      5 => 'comments',
      6 => 'revisions',
      7 => 'slug',
      8 => 'author',
      9 => 'format',
      10 => 'featured_image',
      11 => 'categories',
      12 => 'tags',
      13 => 'send-trackbacks',
  ));
}

function inmetrics_acf_options_default() {
  return array(
    'position' => 'normal',
    'layout' => 'default',
    'hide_on_screen' => array()
  );
}

function inmetrics_acf_home_page() {
  global $sitepress;
  $home = get_page_by_path("home");
  $trid = $sitepress->get_element_trid($home->ID, 'post_page');
  $translations = $sitepress->get_element_translations($trid);
  $rules = array();
  $i = 0;
  foreach($translations as $translation) {
    $i++;
    $rules[] = array(array (
      'param' => 'post_type',
      'operator' => '==',
      'value' => 'page',
      'order_no' => 0,
      'group_no' => $i,
    ), array (
      'param' => 'page',
      'operator' => '==',
      'value' => $translation->element_id,
      'order_no' => 1,
      'group_no' => $i,
    ));
  }
  register_field_group(array(
    'id' => 'acf_home_page_images',
    'title' => __('Home Page Images', 'inmetrics'),
    'fields' => array(
      array(
        'key' => 'field_header_image',
        'label' => 'Header',
        'name' => 'header_image',
        'type' => 'image',
        'required' => 0,
        'save_format' => 'object',
        'preview_size' => 'full',
        'library' => 'uploadedTo',
      ),array(
        'key' => 'field_sub_header_image',
        'label' => 'Sub Header',
        'name' => 'sub_header_image',
        'type' => 'image',
        'required' => 0,
        'save_format' => 'object',
        'preview_size' => 'full',
        'library' => 'uploadedTo',
      ),array(
        'key' => 'field_mobile_header_image',
        'label' => __('Mobile Header', 'inmetrics'),
        'name' => 'mobile_header_image',
        'type' => 'image',
        'required' => 0,
        'save_format' => 'object',
        'preview_size' => 'full',
        'library' => 'uploadedTo',
      ),array(
        'key' => 'field_table_header_image',
        'label' => __('Table Header (Light Background)', 'inmetrics'),
        'name' => 'table_header_image',
        'type' => 'image',
        'required' => 0,
        'save_format' => 'object',
        'preview_size' => 'full',
        'library' => 'uploadedTo',
      ),array(
        'key' => 'field_table_header_dark_image',
        'label' => __('Table Header (Dark Background)', 'inmetrics'),
        'name' => 'table_header_dark_image',
        'type' => 'image',
        'required' => 0,
        'save_format' => 'object',
        'preview_size' => 'full',
        'library' => 'uploadedTo',
      ),
    ),
    'location' => $rules,
    'options' => inmetrics_acf_options_hide_all(),
    'menu_order' => 0,
  ));
  register_field_group(array (
    'id' => 'acf_contact-form',
    'title' => __('Contact Form', 'inmetrics'),
    'fields' => array (
      array (
        'key' => 'field_533b45d88e7d1',
        'label' => __('Title', 'inmetrics'),
        'name' => 'contact_form_title',
        'type' => 'text',
        'required' => 1,
        'default_value' => '',
        'placeholder' => '',
        'prepend' => '',
        'append' => '',
        'formatting' => 'html',
        'maxlength' => '',
      ),
      array (
        'key' => 'field_533b4fca3fdba',
        'label' => __('Title for Mobile', 'inmetrics'),
        'name' => 'contact_form_mobile_title',
        'type' => 'text',
        'required' => 1,
        'default_value' => '',
        'placeholder' => '',
        'prepend' => '',
        'append' => '',
        'formatting' => 'html',
        'maxlength' => '',
      ),
      array (
        'key' => 'field_533b45f78e7d2',
        'label' => __('Addresses', 'inmetrics'),
        'name' => 'contact_form_addresses',
        'type' => 'wysiwyg',
        'default_value' => '',
        'toolbar' => 'full',
        'media_upload' => 'no',
      ),
    ),
    'location' => $rules,
    'options' => inmetrics_acf_options_default(),
    'menu_order' => 1,
  ));
}
add_action('init', 'inmetrics_acf_home_page');

function inmetrics_acf_efficiency() {
  register_post_type('efficiency', array(
    'labels' => array('name' => __('Efficiencies', 'inmetrics'),
                      'singular_name' => __('Efficiency', 'inmetrics'),
                      'all_items' => __('All Efficiencies', 'inmetrics'),
                      'add_new' => __('Add New ', 'inmetrics'),
                      'add_new_item' => __('Add New Efficiency', 'inmetrics'),
                      'edit_item' => __('Edit Efficiency', 'inmetrics'),
                      'new_item' => __('New Efficiency', 'inmetrics'),
                      'view_item' => __('View Efficiency', 'inmetrics'),
                      'search_items' => __('Search Efficiencies', 'inmetrics'),
                      'not_found' => __('Efficiency Not Found', 'inmetrics'),
                      'not_found_in_trash' => __('Efficiency Not Found in Trash', 'inmetrics')),
    'public' => false,
    'exclude_from_search' => true,
    'publicly_queryable' => false,
    'show_ui' => true,
    'show_in_admin_bar' => false,
    'menu_position' => 20,
    'menu_icon' => get_template_directory_uri() . '/images/efficiencies.png',
    'capability_type' => 'inmetrics_custom_post',
    'map_meta_cap' => true,
    'supports' => array('title', 'custom-fields'),
    'rewrite' => false,
    'query_var' => false
  ));
  $rules = array(array(array(
    'param' => 'post_type',
    'operator' => '==',
    'value' => 'efficiency',
    'order_no' => 0,
    'group_no' => 0)));
  register_field_group(array (
    'id' => 'acf_home-page',
    'title' => __('Home Page', 'inmetrics'),
    'fields' => array (
      array (
        'key' => 'field_532f2fe4f1a27',
        'label' => __('Title Image', 'inmetrics'),
        'name' => 'table_title_image',
        'type' => 'image',
        'required' => 1,
        'save_format' => 'url',
        'preview_size' => 'full',
        'library' => 'uploadedTo',
      ),
      array (
        'key' => 'field_53456cea3c7cc',
        'label' => __('Animation Title Image', 'inmetrics'),
        'name' => 'animation_title_image',
        'type' => 'image',
        'save_format' => 'object',
        'preview_size' => 'full',
        'library' => 'uploadedTo',
      ),
      array (
        'key' => 'field_mobile_title_image',
        'label' => __('Mobile Title Image', 'inmetrics'),
        'name' => 'mobile_title_image',
        'type' => 'image',
        'save_format' => 'object',
        'preview_size' => 'full',
        'library' => 'uploadedTo',
      ),
    ),
    'location' => $rules,
    'options' =>  inmetrics_acf_options_hide_all(),
    'menu_order' => 0,
  ));
}
add_action("init", "inmetrics_acf_efficiency");

function inmetrics_acf_project_type() {
  register_post_type('project_type', array(
    'labels' => array('name' => __('Project Types', 'inmetrics'),
                      'singular_name' => __('Project Type', 'inmetrics'),
                      'all_items' => __('All Project Types', 'inmetrics'),
                      'add_new' => __('Add New', 'inmetrics'),
                      'add_new_item' => __('Add New Project Type', 'inmetrics'),
                      'edit_item' => __('Edit Project Type', 'inmetrics'),
                      'new_item' => __('New Project Type', 'inmetrics'),
                      'view_item' => __('View Project Type', 'inmetrics'),
                      'search_items' => __('Search Project Types', 'inmetrics'),
                      'not_found' => __('Project Type Not Found', 'inmetrics'),
                      'not_found_in_trash' => __('Project Type Not Found in Trash', 'inmetrics')),
    'public' => false,
    'exclude_from_search' => true,
    'publicly_queryable' => false,
    'show_ui' => true,
    'show_in_admin_bar' => false,
    'menu_position' => 22,
    'menu_icon' => get_template_directory_uri() . '/images/project_types.png',
    'capability_type' => 'inmetrics_custom_post',
    'map_meta_cap' => true,
    'supports' => array('title', 'custom-fields'),
    'rewrite' => false,
    'query_var' => false
  ));
  $rules = array(array(array(
    'param' => 'post_type',
    'operator' => '==',
    'value' => 'project_type',
    'order_no' => 0,
    'group_no' => 0)));
  register_field_group(array(
    'id' => 'acf_demand-tagline',
    'title' => __('Demand Tagline', 'inmetrics'),
    'fields' => array (
      array (
        'key' => 'field_5330bb1fcbc0f',
        'label' => 'Tagline Image',
        'name' => 'tagline_image',
        'type' => 'image',
        'required' => 1,
        'save_format' => 'url',
        'preview_size' => 'full',
        'library' => 'uploadedTo',
      ),
    ),
    'location' => $rules,
    'options' => inmetrics_acf_options_hide_all(),
    'menu_order' => 0,
  ));
}
add_action("init", "inmetrics_acf_project_type");

function inmetrics_acf_project() {
  register_post_type('project', array(
    'labels' => array('name' => __('Projects', 'inmetrics'),
                      'singular_name' => __('Project', 'inmetrics'),
                      'all_items' => __('All Projects', 'inmetrics'),
                      'add_new' => __('Add New', 'inmetrics'),
                      'add_new_item' => __('Add New Project', 'inmetrics'),
                      'edit_item' => __('Edit Project', 'inmetrics'),
                      'new_item' => __('New Project', 'inmetrics'),
                      'view_item' => __('View Project', 'inmetrics'),
                      'search_items' => __('Search Projects', 'inmetrics'),
                      'not_found' => __('Project Not Found', 'inmetrics'),
                      'not_found_in_trash' => __('Project Not Found in Trash', 'inmetrics')),
    'public' => false,
    'exclude_from_search' => true,
    'publicly_queryable' => false,
    'show_ui' => true,
    'show_in_admin_bar' => false,
    'menu_position' => 23,
    'menu_icon' => get_template_directory_uri() . '/images/projects.png',
    'capability_type' => 'inmetrics_custom_post',
    'map_meta_cap' => true,
    'supports' => array('title', 'custom-fields'),
    'rewrite' => false,
    'query_var' => false
  ));
  $rules = array(array(array(
    'param' => 'post_type',
    'operator' => '==',
    'value' => 'project',
    'order_no' => 0,
    'group_no' => 0)));
  register_field_group(array (
    'id' => 'acf_project-type',
    'title' => __('Project Type', 'inmetrics'),
    'fields' => array (
      array (
        'key' => 'field_532f44808df19',
        'label' => __('Project Type', 'inmetrics'),
        'name' => 'service_type',
        'type' => 'post_object',
        'required' => 1,
        'post_type' => array(0 => 'project_type'),
        'taxonomy' => array (0 => 'all'),
        'allow_null' => 0,
        'multiple' => 0,
      ),
    ),
    'location' => $rules,
    'options' => inmetrics_acf_options_hide_all(),
    'menu_order' => 0,
  ));
  register_field_group(array (
    'id' => 'acf_column-header-images',
    'title' => 'Column Header Images',
    'fields' => array (
      array (
        'key' => 'field_532f54fa7e3c7',
        'label' =>__('Image for a Light Background', 'inmetrics'),
        'name' => 'column_image',
        'type' => 'image',
        'required' => 1,
        'save_format' => 'url',
        'preview_size' => 'full',
        'library' => 'uploadedTo',
      ),
      array (
        'key' => 'field_532f6215fb862',
        'label' => __('Image for a Dark Background', 'inmetrics'),
        'name' => 'column_image_dark',
        'type' => 'image',
        'required' => 1,
        'save_format' => 'url',
        'preview_size' => 'full',
        'library' => 'uploadedTo',
      ),
    ),
    'location' => $rules,
    'options' => inmetrics_acf_options_default(),
    'menu_order' => 2,
  ));
}
add_action("init", "inmetrics_acf_project");

function inmetrics_acf_service() {
  register_post_type('service', array(
    'labels' => array('name' => __('Services', 'inmetrics'),
                      'singular_name' => __('Service', 'inmetrics'),
                      'all_items' => __('All Services', 'inmetrics'),
                      'add_new' => __('Add New', 'inmetrics'),
                      'add_new_item' => __('Add New Service', 'inmetrics'),
                      'edit_item' => __('Edit Service', 'inmetrics'),
                      'new_item' => __('New Service', 'inmetrics'),
                      'view_item' => __('View Service', 'inmetrics'),
                      'search_items' => __('Search Services', 'inmetrics'),
                      'not_found' => __('Service Not Found', 'inmetrics'),
                      'not_found_in_trash' => __('Service Not Found in Trash', 'inmetrics')),
    'public' => false,
    'exclude_from_search' => true,
    'publicly_queryable' => false,
    'show_ui' => true,
    'show_in_admin_bar' => false,
    'menu_position' => 21,
    'menu_icon' => get_template_directory_uri() . '/images/services.png',
    'capability_type' => 'inmetrics_custom_post',
    'map_meta_cap' => true,
    'supports' => array('title', 'custom-fields'),
    'rewrite' => false,
    'query_var' => false
  ));
  $rules = array(array(array(
    'param' => 'post_type',
    'operator' => '==',
    'value' => 'service',
    'order_no' => 0,
    'group_no' => 0)));
  register_field_group(array (
    'id' => 'acf_efficiency',
    'title' => __('Efficiency', 'inmetrics'),
    'fields' => array (
      array (
        'key' => 'field_532f3f3cbd902',
        'label' => __('Efficiency', 'inmetrics'),
        'name' => 'efficiency',
        'type' => 'post_object',
        'required' => 1,
        'post_type' => array (0 => 'efficiency'),
        'taxonomy' => array (0 => 'all'),
        'allow_null' => 0,
        'multiple' => 0,
      ),
    ),
    'location' => $rules,
    'options' => inmetrics_acf_options_hide_all(),
    'menu_order' => 0,
  ));
  register_field_group(array(
    'id' => 'acf_home-page-table-2',
    'title' => __('Home Page Table', 'inmetrics'),
    'fields' => array (
      array (
        'key' => 'field_532f43e46ccca',
        'label' => __('Enabled Projects', 'inmetrics'),
        'name' => 'projects',
        'type' => 'relationship',
        'return_format' => 'id',
        'post_type' => array (0 => 'project'),
        'taxonomy' => array (0 => 'all'),
        'filters' => array (),
        'result_elements' => array (0 => 'post_title'),
        'max' => '',
      ),
    ),
    'location' => $rules,
    'options' => inmetrics_acf_options_default(),
    'menu_order' => 1
  ));
  register_field_group(array(
    'id' => 'acf_service-description',
    'title' => __('Service Description', 'inmetrics'),
    'fields' => array (
      array (
        'key' => 'field_532f337a3e604',
        'label' => __('What is it?', 'inmetrics'),
        'name' => 'what_is_it',
        'type' => 'wysiwyg',
        'required' => 1,
        'default_value' => 'Lorem Ipsum Dolor Sit Amet',
        'toolbar' => 'basic',
        'media_upload' => 'no',
      ),
      array (
        'key' => 'field_532f534fd9506',
        'label' => __('Purpose', 'inmetrics'),
        'name' => 'what_is_it_for',
        'type' => 'wysiwyg',
        'required' => 1,
        'default_value' => 'Lorem ipsum dolor sit amet',
        'toolbar' => 'basic',
        'media_upload' => 'no',
      ),
      array (
        'key' => 'field_532f536cd9507',
        'label' => __('Results', 'inmetrics'),
        'name' => 'results',
        'type' => 'wysiwyg',
        'required' => 1,
        'default_value' => 'Lorem ipsum dolor sit amet',
        'toolbar' => 'basic',
        'media_upload' => 'no',
      ),
      array (
        'key' => 'field_532f537cd9508',
        'label' => __('Term', 'inmetrics'),
        'name' => 'term',
        'type' => 'wysiwyg',
        'required' => 1,
        'default_value' => 'Lorem ipsum dolor sit amet',
        'toolbar' => 'basic',
        'media_upload' => 'no',
      ),
    ),
    'location' => $rules,
    'options' => inmetrics_acf_options_default(),
    'menu_order' => 2,
  ));
}
add_action("init", "inmetrics_acf_service");

?>
