<?php

function inmetrics_dynamic_home_javascript() {
  if(is_front_page()) {
    echo "\n<script>\n";
    echo "window.config = {\n";    
    echo ' base: "' . trailingslashit(get_template_directory_uri()) . '",'; 
    echo "\n};\n";
    echo "\n</script>\n";
  }
}
add_action('wp_head', 'inmetrics_dynamic_home_javascript');

?>