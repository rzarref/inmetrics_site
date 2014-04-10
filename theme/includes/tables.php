<?php

function inmetrics_services_list($efficiency_id)
{
  $services = inmetrics_get_services($efficiency_id);
  foreach($services as $service) {
    $slug = $service->post_name;
    $title = $service->post_title;
    $_title = esc_attr($title);
    echo "<li><a href='#service-$slug'>$title</a></li>";
  }
}

function inmetrics_services_descriptions($efficiency)
{
  $services = inmetrics_get_services($efficiency->ID);
  $shortcode_slug = get_field('shortcode_slug', $efficiency->ID);
  foreach($services as $service) {
    $slug = $service->post_name;
    $title = $service->post_title;
    ?>
    <div id="service-<?php echo $slug ?>" class="efficiency-<?php echo $shortcode_slug; ?> service-description mfp-hide">
      <h3><?php echo $service->post_title ?></h3>
      <div class="service-description-left">
        <h4><?php _e("What is it?", "inmetrics") ?></h4>
        <?php echo get_field("what_is_it", $service->ID, TRUE) ?>
      </div>
      <div class="service-description-right">
        <div class="service-purpose">
          <h4><?php _e("Purpose", "inmetrics") ?></h4>
          <?php echo get_field("what_is_it_for", $service->ID, TRUE) ?>
        </div>
        <div class="service-results">
          <h4><?php _e("Results", "inmetrics") ?></h4>
          <?php echo get_field("results", $service->ID, TRUE) ?>
        </div>
        <div class="service-term">
          <h4><?php _e("Term", "inmetrics") ?></h4>
          <?php echo get_field("term", $service->ID, TRUE) ?>
        </div>
      </div>
    </div>
    <?php
  }
}

function inmetrics_project_list($project_type_id)
{
  $projects = inmetrics_get_projects($project_type_id);
  foreach($projects as $project) {
    $slug = $project->post_name;
    $light = get_field('column_image', $project->ID, TRUE);
    $dark = get_field('column_image_dark', $project->ID, TRUE);
    $light = "<img src='$light' class='column_image_light' />";
    $dark = "<img src='$dark' class='column_image_dark' />";
    echo "<li data-selection-row='$slug'>$light$dark</li>";
  }
}

function inmetrics_efficiency_table($shortcode_slug)
{  
  $efficiency = inmetrics_get_efficiency_by_shortcode_slug($shortcode_slug);
  if($efficiency) {
    $services = inmetrics_get_services($efficiency->ID);
    $project_types = inmetrics_get_project_types();
    $projects = inmetrics_get_projects();
    $table_title_image_url = get_field('table_title_image', $efficiency->ID, TRUE);
    $table_header_image_url = get_field('table_header_image', $efficiency->ID, TRUE);
    inmetrics_services_descriptions($efficiency);    
  ?>
<table class="selector-table efficiency-table efficiency-<?php echo $shortcode_slug ?>">
  <tr>
    <td rowspan="3" class="td-main selector-title"><img src="<?php echo $table_title_image_url ?>" /></td>
    <td class="td-main fill table-header">
      <img src="<?php echo $table_header_image_url ?>" />
    </td>
    <?php foreach($project_types as $project_type): ?>
      <?php $tagline_image = get_field('tagline_image', $project_type->ID, TRUE); ?>
      <td class="columns project-type_<?php echo $project_type->post_name ?>">
        <div class="demand-tagline"><img src="<?php echo $tagline_image; ?>" /></div>
      </td>
    <?php endforeach; ?>
  </tr>
  <tr>    
    <td></td>
    <?php foreach($project_types as $project_type): ?>      
      <td class="columns project-type_<?php echo $project_type->post_name ?>">        
        <h3><?php echo $project_type->post_title; ?></h3>
      </td>
    <?php endforeach; ?>
  </tr>
  <tr>
    <td class="td-main fill">
      <ul class="descriptions">
        <?php inmetrics_services_list($efficiency->ID); ?>
      </ul>
    </td>
    <td class="td-main" colspan="3">
      <div class="columns-overlap">
        <table class="columns-wrapper">
          <tr>
            <?php foreach($project_types as $project_type): ?>
              <td class="columns project-type_<?php echo $project_type->post_name ?>">
                <ul>
                  <?php inmetrics_project_list($project_type->ID); ?>
                </ul>
              </td>
            <?php endforeach; ?>
          </tr>
        </table>
        <ul class="selection-rows">
          <?php
            foreach($services as $service) {
              $enabled_projects = get_field('projects', $service->ID);
              echo '<li>';
              echo '<div class="selections">';
              foreach($projects as $project) {
                if(in_array($project->ID, $enabled_projects))
                  echo "<a href='#' data-selection='{$project->post_name}' data-selection-ids='$service->ID,$project->ID'><i class='fa fa-circle'></i></a>";
                else
                  echo "<a href='#' disabled='disabled'></a>";
              }
              echo '</div>';
              echo '</li>';
            }
          ?>
        </ul>
      </div>
    </td>
  </tr>
</table>
    <?php
  }
}

function inmetrics_mobile_efficiencies() {
  foreach(inmetrics_get_efficiencies() as $efficiency):
    $services = inmetrics_get_services($efficiency->ID);
?>
  <div class="service-list efficiency-<?php the_field("shortcode_slug", $efficiency->ID); ?>">
    <h2><?php echo $efficiency->post_title; ?></h2>
    <ul>
      <?php 
      foreach($services as $service): 
        $slug = $service->post_name;
        $id = "service-popup-$slug";
      ?>
      <li>
        <a href="#<?php echo $id; ?>" " data-toggle="slide"><?php echo $service->post_title; ?></a>
        <div id="<?php echo $id; ?>" class="service-popup">
          <div class="wrapper">
            <h3><?php echo $service->post_title; ?></h3>
            <h4><?php _e("What is it?", "inmetrics") ?></h4>
            <?php echo get_field("what_is_it", $service->ID, TRUE) ?>
            <div class="service-purpose">
              <h4><?php _e("It's purpose is:", "inmetrics") ?></h4>
              <?php echo get_field("what_is_it_for", $service->ID, TRUE) ?>
            </div>
            <div class="service-results">
              <h4><?php _e("What results should I expect?", "inmetrics") ?></h4>
              <?php echo get_field("results", $service->ID, TRUE) ?>
            </div>
            <div class="service-term">
              <h4><?php _e("How long do I have to wait in average to obtain results?", "inmetrics") ?></h4>
              <?php echo get_field("term", $service->ID, TRUE) ?>
            </div>
          </div>
          <div class="back-button">
            <a class="back" data-toggle="slide" href="#<?php echo $id; ?>"><?php _e("Close", 'inmetrics'); ?></a>
          </div>
        </div>
      </li>
      <?php endforeach; ?>
    </ul>
  </div>
<?php
  endforeach;
}
?>
