<?php

function get_the_page_name_in_english()
{
  if(function_exists('icl_object_id')) {
    $id = get_the_ID();
    $original_id = icl_object_id($id, 'page', TRUE, 'en');
    $original_post = get_post($original_id);
    return $original_post->post_name;
  }
  else {
    return get_post()->post_name;
  }
}

function inmetrics_social_links_nav()
{
  $args = array(
    'posts_per_page' => -1,
    'post_type' => 'social_network',
    'post_status' => 'publish');
  $posts = get_posts($args);
  foreach($posts as $post) {
    $title = $post->post_title;
    $url = get_field('url', $post);
    $icon = get_field('icon', $post);
    echo("<li><a href='". esc_attr($url) . "' target='_blank' title='". esc_attr($title) . "'>");
    echo("<img src='" . esc_attr($icon) . "' /></a></li>");
  }
}

define("INMETRICS_TABLE_COLUMN_WIDTH", 35);
define("INMETRICS_TABLE_COLUMN_SPACING", 5);

function inmetrics_get_efficiencies()
{
  $args = array(
    'posts_per_page' => -1,
    'post_type' => 'efficiency',
    'post_status' => 'publish'
  );
  return get_posts($args);
}

function inmetrics_get_efficiency_by_shortcode_slug($shortcode_slug)
{
  $args = array(
    'posts_per_page' => 1,
    'post_type' => 'efficiency',
    'meta_key' => 'shortcode_slug',
    'meta_value' => $shortcode_slug,
    'post_status' => 'publish'
  );
  $results = get_posts($args);
  if($results)
    return $results[0];
}

function inmetrics_get_services($efficiency_id = null)
{
  $args = array(
    'posts_per_page' => -1,
    'post_type' => 'service',
    'post_status' => 'publish'
  );
  if($efficiency_id) {
    $args['meta_key'] = 'efficiency';
    $args['meta_value'] = $efficiency_id;
  }
  return get_posts($args);
}

function inmetrics_get_project_types()
{
  $args = array(
    'posts_per_page' => -1,
    'post_type' => 'project_type',
    'post_status' => 'publish'
  );
  return get_posts($args);
}

function inmetrics_get_projects($project_type_id = null)
{
  $args = array(
    'posts_per_page' => -1,
    'post_type' => 'project',
    'post_status' => 'publish'
  );
  if($project_type_id) {
    $args['meta_key'] = 'service_type';
    $args['meta_value'] = $project_type_id;
  }
  return get_posts($args);
}


function inmetrics_get_project_types_with_counts($lang = null)
{
  if(!$lang) {
    global $sitepress;
    $lang = $sitepress->get_current_language();
  }
  $sql = "
    select project_types.ID, project_types.post_name, count(*) as total
    from wp_postmeta
    inner join wp_icl_translations t on wp_postmeta.post_id  = t.element_id
    inner join wp_posts project_types on project_types.ID = wp_postmeta.meta_value
    where wp_postmeta.meta_key = 'service_type' and t.language_code = '$lang'
    group by project_types.ID, project_types.post_name";
  global $wpdb;
  return $wpdb->get_results($sql);
}

function inmetrics_get_selected_project_ids($selections)
{
  $sel = explode(';', $selections);
  $ids = array();
  foreach($sel as $selection) {
    $data = explode(',', $selection, 2);
    if(isset($data) && count($data) == 2) {
      $id = intval($data[1]);
      if($id != 0) array_push($ids, $id);
    }
  }
  return array_unique($ids);
}

function inmetrics_get_project_types_group_width($total_projects)
{
  return $total_projects * INMETRICS_TABLE_COLUMN_WIDTH +
         ($total_projects - 1) * INMETRICS_TABLE_COLUMN_SPACING;
}

function inmetrics_get_total_projects_per_efficiency($lang = null)
{
  if(!$lang) {
    global $sitepress;
    $lang = $sitepress->get_current_language();
  }
  global $wpdb;
  $sql = "
    select shortcode_meta.meta_value as shortcode_slug, count(*) as total_projects
    from wp_postmeta shortcode_meta
      inner join wp_posts efficiencies on efficiencies.ID = shortcode_meta.post_id
      inner join wp_icl_translations t on efficiencies.ID = t.element_id
      left join (
        wp_posts services
        inner join wp_postmeta service_meta on service_meta.post_id = services.ID
      ) on service_meta.meta_value = efficiencies.ID
    where shortcode_meta.meta_key = 'shortcode_slug'
      and t.language_code = '$lang'
      and service_meta.meta_key = 'efficiency'
      and services.post_status = 'publish'
    group by shortcode_meta.meta_value";
  return $wpdb->get_results($sql);
}

function inmetrics_get_column_headers_height($lang = null)
{
  if(!$lang) {
    global $sitepress;
    $lang = $sitepress->get_current_language();
  }
  global $wpdb;
  $sql = "
    select
      light_image_meta.meta_value as light_image_id,
      dark_image_meta.meta_value as dark_image_id
    from wp_posts projects
      inner join wp_postmeta light_image_meta
        on light_image_meta.post_id = projects.ID
        and light_image_meta.meta_key = 'column_image'
      inner join wp_postmeta dark_image_meta
        on dark_image_meta.post_id = projects.ID
        and dark_image_meta.meta_key = 'column_image_dark'
      inner join wp_icl_translations t on projects.ID = t.element_id
    where projects.post_type='project'
      and projects.post_status='publish'
      and t.language_code = '$lang'";
  $results = $wpdb->get_results($sql);
  $max_height = 0;
  foreach($results as $images) {
    $light_image = wp_get_attachment_image_src($images->light_image_id, 'full');
    $dark_image = wp_get_attachment_image_src($images->dark_image_id, 'full');
    if($light_image[2] > $max_height)
      $max_height = $light_image[2];
    if($dark_image[2] > $max_height)
      $max_height = $dark_image[2];
  }
  return $max_height;
}

?>
