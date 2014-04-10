<?php

function t_url($path) {
  echo(trailingslashit(get_template_directory_uri()) . $path);
}

?>