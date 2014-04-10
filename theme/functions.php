<?php

function inmetrics_include($file) {
  require_once(trailingslashit(get_template_directory()) . "includes/{$file}.php");
}
inmetrics_include("api");
inmetrics_include("localization");
inmetrics_include("navigation");
inmetrics_include("helpers");
inmetrics_include("custom_fields");
inmetrics_include("metaboxes");
inmetrics_include("tables");
inmetrics_include("dynamic_css");
inmetrics_include("dynamic_js");

?>