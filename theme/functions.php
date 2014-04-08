<?php
function inmetrics_include($file) {
  require_once(trailingslashit(get_template_directory()) . "includes/{$file}.php");
}
inmetrics_include("localization");
inmetrics_include("navigation");
?>