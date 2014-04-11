<?php

function inmetrics_home_dynamic_css() {
  if(is_front_page()) {
    echo "\n<style>\n";
    inmetrics_dynamic_table_colors();
    inmetrics_dynamic_table_sizes();
    inmetrics_dynamic_home_images();
    inmetrics_dynamic_mobile_images();
    echo "\n</style>\n";
  }
}
add_action('wp_head', 'inmetrics_home_dynamic_css');

function inmetrics_dynamic_table_colors() {
  // Strategic Efficiency:
  inmetrics_table_colors('strategic', array(
    "dark_background" => false,
    "header" => "#6f2c78",
    "description_background" => "#6f2c78",
    "description_foreground" => "#ffffff",
    "columns" => "#e6e6e6",
    "lines_background" => "#ccb4cf",
    "lines_foreground" => "#000000",
    "selections_background" => "rgba(206,206,206,0.5)",
    "unselected" => "#6f2c78",
    "selected" => "#ffffff",
  ));

  // Management Efficiency:
  inmetrics_table_colors('management', array(
    "dark_background" => true,
    "header" => "#5a8232",
    "description_background" => "#5a8232",
    "description_foreground" => "#ffffff",
    "columns" => "#3c3b3b",
    "lines_background" => "#3f5129",
    "lines_foreground" => "#ffffff",
    "selections_background" => "rgba(89,89,89,0.5)",
    "unselected" => "#5a8232",
    "selected" => "#ffffff",
  ));

  // Operational Efficiency:
  inmetrics_table_colors('operational', array(
    "dark_background" => false,
    "header" => "#7eb01a",
    "description_background" =>"#7eb01a",
    "description_foreground" => "#ffffff",
    "columns" => "#e6e6e6",
    "lines_background" => "#bed78c",
    "lines_foreground" => "#000000",
    "selections_background" => "rgba(206,206,206,0.5)",
    "unselected" => "#7eb01a",
    "selected" => "#ffffff",
  ));

  // Functional Efficiency:
  inmetrics_table_colors('functional', array(
    "dark_background" => true,
    "header" => "#d7a500",
    "description_background" =>"#d7a500",
    "description_foreground" => "#ffffff",
    "columns" => "#2e2e2e",
    "lines_background" => "#705600",
    "lines_foreground" => "#ffffff",
    "selections_background" => "rgba(89,89,89,0.5)",
    "unselected" => "#d7a500",
    "selected" => "#ffffff",
  ));

  // Construction Efficiency:
  inmetrics_table_colors('quality', array(
    "dark_background" => false,
    "header" => "#af8728",
    "description_background" =>"#af8728",
    "description_foreground" => "#ffffff",
    "columns" => "#e6e6e6",
    "lines_background" => "#d7c393",
    "lines_foreground" => "#000000",
    "selections_background" => "rgba(206,206,206,0.5)",
    "unselected" => "#af8728",
    "selected" => "#ffffff",
  ));
}

function inmetrics_table_colors($efficiency, $colors) {
  echo <<<"CSS"
  .efficiency-$efficiency .columns h3 {
    color: {$colors['header']};
    border-bottom-color: {$colors['header']};
  }
  .efficiency-$efficiency .columns ul li {
    background-color: {$colors['columns']};
  }
  .efficiency-$efficiency .descriptions a {
    background-color: {$colors['lines_background']};
    color: {$colors['lines_foreground']};
  }
  .efficiency-$efficiency .columns ul li.selected,
  .efficiency-$efficiency .columns ul li.hovered,
  .efficiency-$efficiency .columns ul li:hover {
    background-color: {$colors['lines_background']};
  }
  .efficiency-$efficiency .selection-rows li {
    background-color: ${colors['selections_background']};
  }
  .efficiency-$efficiency .selections a {
    color: {$colors['unselected']};
  }
  .efficiency-$efficiency .selections a.selected {
    color: {$colors['selected']};
  }
  .efficiency-$efficiency.service-description {
    color: {$colors['description_foreground']};
    background-color: {$colors['description_background']};
  }

CSS;
  if($colors['dark_background']) {
    echo ".efficiency-$efficiency .column_image_light { display: none; }";
  }
  else {
    echo ".efficiency-$efficiency .column_image_dark { display: none; }";
  }
}

function inmetrics_dynamic_table_sizes() {
  $column_headers_height = inmetrics_get_column_headers_height();
  $project_types = inmetrics_get_project_types_with_counts();
  $total_projects = 0;
  foreach($project_types as $pt) {
    $width = inmetrics_get_project_types_group_width($pt->total);
    echo(".columns.project-type_{$pt->post_name}, \n");
    echo(".columns.project-type_{$pt->post_name} ul { width: {$width}px; }\n");
    $total_projects = $total_projects + $pt->total;
  }
  $total_width = inmetrics_get_project_types_group_width($total_projects);
  $col_width = INMETRICS_TABLE_COLUMN_WIDTH;
  $col_spacing = INMETRICS_TABLE_COLUMN_SPACING;
  echo(".columns-wrapper, .selection-rows { width: {$total_width}px; }\n");
  echo(".columns ul li, \n");
  echo(".selections a { width: {$col_width}px; }\n");
  echo(".selections a + a { margin-left: {$col_spacing}px; }\n");

  $projects_per_efficiency = inmetrics_get_total_projects_per_efficiency();
  $max_height = inmetrics_get_column_headers_height();
  foreach($projects_per_efficiency as $eff) {
    $height = $max_height + $eff->total_projects * 29 + ($eff->total_projects - 1) * 4 + 20;
    echo(".efficiency-{$eff->shortcode_slug} .columns ul,\n");
    echo(".efficiency-{$eff->shortcode_slug} .columns ul li { height: {$height}px; }\n");
  }
}

function inmetrics_dynamic_mobile_images() {
  $header = get_field('mobile_header_image');
  $height = $header['height'] + 78;
  echo(".mobile-efficiencies .mobile-header {\n");
  echo("  background-image: url({$header['url']});\n");
  echo("  height: {$height}px;\n");
  echo("}\n");
  $efficiencies = inmetrics_get_efficiencies();
  foreach($efficiencies as $efficiency) {
    $img = get_field('mobile_title_image', $efficiency->ID);
    $slug = get_field('shortcode_slug', $efficiency->ID);
    $height = $img['height'] + 100;
    echo(".mobile-efficiencies .service-list.efficiency-$slug h2 {\n");
    echo("  background-image: url({$img['url']});\n");
    echo("  height: {$height}px;\n");
    echo("}\n");
  }
}

function inmetrics_dynamic_home_images() {
  $header = get_field('header_image');
  $sub_header = get_field('sub_header_image');
  echo("#apresenta h2 {\n");
  echo("  width: {$header['width']}px;\n");
  echo("  height: {$header['height']}px;\n");
  echo("  background: url({$header['url']}) no-repeat;\n");
  echo("}\n");
  echo("#apresenta p {\n");
  echo("  width: {$sub_header['width']}px;\n");
  echo("  height: {$sub_header['height']}px;\n");
  echo("  background: url({$sub_header['url']}) no-repeat;\n");
  echo("}\n");
  $efficiencies = inmetrics_get_efficiencies();
  foreach($efficiencies as $efficiency) {
    $slug = get_field('shortcode_slug', $efficiency->ID);
    $img = get_field('animation_title_image', $efficiency->ID);
    if(isset($img)) {
      echo("#$slug h2 {\n");
      echo("  width: {$img['width']}px;\n");
      echo("  height: {$img['height']}px;\n");
      echo("  background: url({$img['url']}) no-repeat;\n");
      echo("}\n");
    }
  }
}

?>
